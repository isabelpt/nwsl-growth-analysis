import { useState } from 'react'
import { rivalryPremium } from '../../data/rivalryPremium'
import { TEAM_ABBREV } from '../../data/teamAbbrev'
import ChartTooltip from './ChartTooltip'
import ChartScrollFrame from './ChartScrollFrame'

// Diverging horizontal bar chart: every matchup with >=8 meetings, ranked by
// its average attendance lift/drag on the host's own same-season baseline.
// Navy = the away team pulls extra fans in; red = it drags the crowd down.
// Same reporting convention as the site's other bars (EffectSizeChart): a
// solid zero line down the middle, values printed at each bar's tip.
const W = 640
const ROW_H = 27
const TOP_PAD = 14
const BOT_PAD = 28
const LABEL_X = 100
// Center + half-width are fixed independently of the label columns (rather
// than derived from a plot-area L/R pair) so there's always room reserved
// for the value label past each bar's tip, even at the max bar length --
// otherwise the biggest bar's label (the Cascadia derby, the site's own
// headline stat) clips past the chart's right edge.
const CENTER_X = 330
const HALF_W = 170

const rows = [...rivalryPremium].sort((a, b) => a.lift - b.lift)
const maxAbs = Math.max(...rows.map((r) => Math.abs(r.lift)))
const H = TOP_PAD + rows.length * ROW_H + BOT_PAD

export default function RivalryPremiumChart() {
  const [hover, setHover] = useState<number | null>(null)

  return (
    <div className="bg-[var(--color-paper)] border border-[var(--color-line)] shadow-offset-sm p-5">
      <div className="flex items-baseline justify-between mb-3">
        <p className="font-mono-label text-[10px] text-[var(--color-ink)]/60">
          Away team's avg. attendance lift vs. host's same-season baseline
        </p>
        <p className="font-mono-label text-[10px] text-[var(--color-ink)]/50">n = {rows.length}, &ge;8 meetings</p>
      </div>

      <ChartScrollFrame minWidth={480}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block overflow-visible" role="img"
          aria-label="Rivalry premium by matchup">
          {/* zero line */}
          <line x1={CENTER_X} y1={2} x2={CENTER_X} y2={H - BOT_PAD + 4} stroke="var(--color-line)" strokeWidth={1.5} />

          {rows.map((row, i) => {
            const y = TOP_PAD + i * ROW_H
            const cy = y + ROW_H / 2
            const positive = row.lift >= 0
            const barLen = (Math.abs(row.lift) / maxAbs) * HALF_W
            const barX = positive ? CENTER_X : CENTER_X - barLen
            const isHover = hover === i
            const color = positive ? 'var(--color-primary)' : '#a5453c'
            const away = TEAM_ABBREV[row.away] ?? row.away
            const home = TEAM_ABBREV[row.home] ?? row.home

            return (
              <g key={row.matchup} opacity={hover === null || isHover ? 1 : 0.45}>
                <text
                  x={LABEL_X}
                  y={cy}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="font-mono"
                  fontSize={11}
                  fill="var(--color-ink)"
                >
                  {away} <tspan fill="var(--color-ink)" opacity={0.45}>@</tspan> {home}
                </text>

                <rect
                  x={barX}
                  y={y + 5}
                  width={Math.max(barLen, 1)}
                  height={ROW_H - 10}
                  fill={color}
                  stroke={isHover ? 'var(--color-accent)' : 'none'}
                  strokeWidth={isHover ? 2 : 0}
                />

                <text
                  x={positive ? CENTER_X + barLen + 8 : CENTER_X - barLen - 8}
                  y={cy}
                  textAnchor={positive ? 'start' : 'end'}
                  dominantBaseline="middle"
                  className="font-mono"
                  fontSize={11}
                  fontWeight={isHover ? 700 : 400}
                  fill="var(--color-ink)"
                >
                  {positive ? '+' : ''}
                  {row.lift.toLocaleString()}
                </text>

                {/* full-width hit area */}
                <rect
                  x={0}
                  y={y}
                  width={W}
                  height={ROW_H}
                  fill="transparent"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: 'pointer' }}
                />
              </g>
            )
          })}
        </svg>

        {hover !== null && (
          <ChartTooltip
            xPct={(CENTER_X / W) * 100}
            yPct={((TOP_PAD + hover * ROW_H) / H) * 100}
            visible
          >
            <p className="font-mono-label text-[10px] text-[var(--color-accent)] mb-1">{rows[hover].matchup}</p>
            <p>
              <span className="font-semibold">{rows[hover].lift >= 0 ? '+' : ''}{rows[hover].lift.toLocaleString()}</span> fans
              vs. {rows[hover].home}'s own season average
            </p>
            <p className="text-[var(--color-ink)]/60 mt-1">{rows[hover].meetings} meetings, 2016-2025</p>
          </ChartTooltip>
        )}
      </ChartScrollFrame>
    </div>
  )
}

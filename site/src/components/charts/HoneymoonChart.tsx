import { useState } from 'react'
import { honeymoon, type HoneymoonTeam } from '../../data/honeymoon'
import ChartTooltip from './ChartTooltip'

const W = 260
const H = 130
const PAD_L = 34
const PAD_R = 12
const PAD_T = 14
const PAD_B = 22

function MiniChart({ team }: { team: HoneymoonTeam }) {
  const [hover, setHover] = useState<number | null>(null)
  const seasons = team.seasons
  const values = seasons.map((s) => s.attendance)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const pad = (max - min) * 0.15 || max * 0.1
  const yMin = Math.max(0, min - pad)
  const yMax = max + pad

  const x = (i: number) => PAD_L + (i / (seasons.length - 1)) * (W - PAD_L - PAD_R)
  const y = (v: number) => H - PAD_B - ((v - yMin) / (yMax - yMin)) * (H - PAD_T - PAD_B)

  const firstAfterIdx = seasons.findIndex((s) => s.afterMove)
  const moveX = firstAfterIdx > 0 ? (x(firstAfterIdx - 1) + x(firstAfterIdx)) / 2 : null

  const linePath = seasons.map((s, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(s.attendance)}`).join(' ')

  return (
    <div className="border border-[var(--color-line)] bg-[var(--color-paper)] p-3">
      <p className="font-serif-heading text-[13px] font-semibold text-[var(--color-primary-deep)] leading-tight">
        {team.team}
      </p>
      <p className="font-mono-label text-[9px] text-[var(--color-ink)]/55 mb-1">
        &rarr; {team.venue} ({team.moveYear})
      </p>

      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block overflow-visible" role="img" aria-label={`${team.team} attendance by season`}>
          {/* y gridlines */}
          <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={H - PAD_B} stroke="var(--color-line)" strokeWidth={1} />
          <line x1={PAD_L} y1={H - PAD_B} x2={W - PAD_R} y2={H - PAD_B} stroke="var(--color-line)" strokeWidth={1} />

          {moveX !== null && (
            <line x1={moveX} y1={PAD_T} x2={moveX} y2={H - PAD_B} stroke="var(--color-accent)" strokeWidth={1} strokeDasharray="3 3" />
          )}

          <path d={linePath} fill="none" stroke="var(--color-primary)" strokeWidth={1.5} opacity={0.55} />

          {seasons.map((s, i) => {
            const isHover = hover === i
            return (
              <g key={s.season}>
                <circle
                  cx={x(i)}
                  cy={y(s.attendance)}
                  r={isHover ? 5.5 : 4}
                  fill={s.afterMove ? 'var(--color-accent)' : 'var(--color-paper)'}
                  stroke={s.afterMove ? 'var(--color-accent)' : 'var(--color-primary)'}
                  strokeWidth={1.5}
                />
                <text x={x(i)} y={H - PAD_B + 12} textAnchor="middle" className="font-mono" fontSize={8} fill="var(--color-ink)" opacity={0.55}>
                  {String(s.season).slice(2)}
                </text>
                <circle
                  cx={x(i)}
                  cy={y(s.attendance)}
                  r={9}
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
          <ChartTooltip xPct={(x(hover) / W) * 100} yPct={(y(seasons[hover].attendance) / H) * 100} visible>
            <p className="font-mono-label text-[10px] text-[var(--color-accent)] mb-0.5">{seasons[hover].season}</p>
            <p>{seasons[hover].attendance.toLocaleString()} avg. attendance</p>
            <p className="text-[var(--color-ink)]/60">{seasons[hover].afterMove ? 'After move' : 'Before move'}</p>
          </ChartTooltip>
        )}
      </div>

      <p className="font-mono text-[11px] text-[var(--color-ink)]/75 mt-1">
        {team.beforeAvg.toLocaleString()} &rarr; {team.afterAvg.toLocaleString()}{' '}
        <span className="text-[var(--color-primary)] font-semibold">+{team.pctChange.toFixed(0)}%</span>
      </p>
    </div>
  )
}

// Five small-multiples: one before/after attendance timeline per team that
// moved into a new venue. Hollow dots = before the move, filled accent dots
// = after -- the dashed line marks the move itself.
export default function HoneymoonChart() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {honeymoon.map((team) => (
        <MiniChart key={team.team} team={team} />
      ))}
    </div>
  )
}

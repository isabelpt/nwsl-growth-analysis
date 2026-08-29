import { useState } from 'react'
import { youtubeRise } from '../../data/youtubeRise'
import ChartTooltip from './ChartTooltip'
import ChartScrollFrame from './ChartScrollFrame'

const W = 640
const H = 260
const PAD_L = 46
const PAD_R = 16
const PAD_T = 16
const PAD_B = 26

// Upload-volume line chart: NWSL's own channel vs. every independent
// women's-soccer channel combined, 2015-2025. The crossover in 2021 is the
// whole story -- independents have out-uploaded the league's own channel
// every year since.
function UploadsLineChart() {
  const { years, officialChannel } = youtubeRise
  const [hover, setHover] = useState<number | null>(null)

  const maxV = Math.max(...years.map((y) => Math.max(y.official, y.independentTotal)))
  const x = (i: number) => PAD_L + (i / (years.length - 1)) * (W - PAD_L - PAD_R)
  const y = (v: number) => H - PAD_B - (v / maxV) * (H - PAD_T - PAD_B)

  const officialPath = years.map((yr, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(yr.official)}`).join(' ')
  const indepPath = years.map((yr, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(yr.independentTotal)}`).join(' ')

  return (
    <ChartScrollFrame minWidth={480}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block overflow-visible" role="img" aria-label="YouTube uploads per year, NWSL vs independents">
        {[0, 0.5, 1].map((f) => (
          <line key={f} x1={PAD_L} y1={H - PAD_B - f * (H - PAD_T - PAD_B)} x2={W - PAD_R} y2={H - PAD_B - f * (H - PAD_T - PAD_B)} stroke="var(--color-line)" strokeWidth={1} strokeDasharray={f === 0 ? undefined : '3 3'} />
        ))}
        <text x={PAD_L - 8} y={H - PAD_B} textAnchor="end" dominantBaseline="middle" className="font-mono" fontSize={9} fill="var(--color-ink)" opacity={0.55}>0</text>
        <text x={PAD_L - 8} y={PAD_T} textAnchor="end" dominantBaseline="middle" className="font-mono" fontSize={9} fill="var(--color-ink)" opacity={0.55}>{maxV.toLocaleString()}</text>

        <path d={indepPath} fill="none" stroke="var(--color-accent)" strokeWidth={2} />
        <path d={officialPath} fill="none" stroke="var(--color-primary)" strokeWidth={2} />

        {years.map((yr, i) => (
          <text key={yr.year} x={x(i)} y={H - PAD_B + 15} textAnchor="middle" className="font-mono" fontSize={9} fill="var(--color-ink)" opacity={0.55}>
            {i % 2 === 0 ? yr.year : ''}
          </text>
        ))}

        {years.map((yr, i) => {
          const isHover = hover === i
          return (
            <g key={yr.year}>
              <circle cx={x(i)} cy={y(yr.independentTotal)} r={isHover ? 5.5 : 3.5} fill="var(--color-accent)" />
              <circle cx={x(i)} cy={y(yr.official)} r={isHover ? 5.5 : 3.5} fill="var(--color-primary)" />
              <rect x={x(i) - (W / years.length) / 2} y={PAD_T} width={W / years.length} height={H - PAD_T - PAD_B}
                fill="transparent" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }} />
            </g>
          )
        })}

        {hover !== null && (
          <line x1={x(hover)} y1={PAD_T} x2={x(hover)} y2={H - PAD_B} stroke="var(--color-ink)" strokeOpacity={0.25} strokeWidth={1} strokeDasharray="3 3" />
        )}
      </svg>

      {hover !== null && (
        <ChartTooltip xPct={(x(hover) / W) * 100} yPct={(Math.min(y(years[hover].official), y(years[hover].independentTotal)) / H) * 100} visible>
          <p className="font-mono-label text-[10px] text-[var(--color-accent)] mb-1">{years[hover].year}</p>
          <p><span style={{ color: 'var(--color-primary)' }}>&#9679;</span> {officialChannel}: {years[hover].official.toLocaleString()}</p>
          <p><span style={{ color: 'var(--color-accent)' }}>&#9679;</span> Independents combined: {years[hover].independentTotal.toLocaleString()}</p>
          {Object.entries(years[hover].byChannel).filter(([, v]) => v > 0).length > 0 && (
            <p className="text-[var(--color-ink)]/60 mt-1 pt-1 border-t border-[var(--color-line)]">
              {Object.entries(years[hover].byChannel)
                .filter(([, v]) => v > 0)
                .sort((a, b) => b[1] - a[1])
                .map(([ch, v]) => `${ch}: ${v}`)
                .join(' · ')}
            </p>
          )}
        </ChartTooltip>
      )}
    </ChartScrollFrame>
  )
}

const SUB_W = 640
const SUB_ROW_H = 26
// Wide enough to fit "National Women's Soccer League" at 11px without
// clipping past the SVG's left edge.
const SUB_LABEL_X = 216
const SUB_PLOT_L = 226
const SUB_PLOT_R = 570

function SubscriberBars() {
  const [hover, setHover] = useState<number | null>(null)
  const rows = [...youtubeRise.channelSnapshot].sort((a, b) => b.subscribers - a.subscribers)
  const max = Math.max(...rows.map((r) => r.subscribers))
  const subH = rows.length * SUB_ROW_H + 12

  return (
    <div className="mt-4">
      <p className="font-mono-label text-[10px] text-[var(--color-ink)]/60 mb-2">Current subscriber count</p>
      <ChartScrollFrame minWidth={480}>
      <svg viewBox={`0 0 ${SUB_W} ${subH}`} className="w-full h-auto block overflow-visible" role="img" aria-label="Current YouTube subscriber counts by channel">
        {rows.map((row, i) => {
          const cy = 8 + i * SUB_ROW_H + SUB_ROW_H / 2
          const barLen = (row.subscribers / max) * (SUB_PLOT_R - SUB_PLOT_L)
          const isHover = hover === i
          const isOfficial = row.channel === youtubeRise.officialChannel
          return (
            <g key={row.channel} opacity={hover === null || isHover ? 1 : 0.5}>
              <text x={SUB_LABEL_X - 8} y={cy} textAnchor="end" dominantBaseline="middle" className="font-mono" fontSize={11} fill="var(--color-ink)">
                {row.channel}
              </text>
              <rect x={SUB_PLOT_L} y={cy - 7} width={Math.max(barLen, 1)} height={14}
                fill={isOfficial ? 'var(--color-primary)' : 'var(--color-accent)'}
                stroke={isHover ? 'var(--color-primary-deep)' : 'none'} strokeWidth={2} />
              <text x={SUB_PLOT_L + barLen + 8} y={cy} dominantBaseline="middle" className="font-mono" fontSize={11} fill="var(--color-ink)" fontWeight={isHover ? 700 : 400}>
                {row.subscribers >= 1000 ? `${(row.subscribers / 1000).toFixed(0)}K` : row.subscribers}
              </text>
              <rect x={0} y={8 + i * SUB_ROW_H} width={SUB_W} height={SUB_ROW_H} fill="transparent"
                onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }} />
            </g>
          )
        })}
      </svg>

      {hover !== null && (
        <ChartTooltip xPct={(SUB_PLOT_L / SUB_W) * 100} yPct={((8 + hover * SUB_ROW_H) / subH) * 100} visible>
          <p className="font-mono-label text-[10px] text-[var(--color-accent)] mb-0.5">{rows[hover].channel}</p>
          <p>{rows[hover].subscribers.toLocaleString()} subscribers</p>
          <p className="text-[var(--color-ink)]/60">Channel created {rows[hover].created}</p>
        </ChartTooltip>
      )}
      </ChartScrollFrame>
    </div>
  )
}

export default function YoutubeRiseChart() {
  return (
    <div className="bg-[var(--color-paper)] border border-[var(--color-line)] shadow-offset-sm p-5">
      <div className="flex items-center gap-4 mb-3">
        <p className="flex items-center gap-1.5 font-mono-label text-[9px] text-[var(--color-ink)]/75">
          <span className="inline-block w-2.5 h-2.5" style={{ backgroundColor: 'var(--color-primary)' }} /> NWSL's own channel
        </p>
        <p className="flex items-center gap-1.5 font-mono-label text-[9px] text-[var(--color-ink)]/75">
          <span className="inline-block w-2.5 h-2.5" style={{ backgroundColor: 'var(--color-accent)' }} /> Independent channels, combined
        </p>
      </div>
      <UploadsLineChart />
      <SubscriberBars />
    </div>
  )
}

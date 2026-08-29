import { useState } from 'react'
import { topicMix } from '../../data/topicMix'
import ChartTooltip from './ChartTooltip'
import ChartScrollFrame from './ChartScrollFrame'

const TOPIC_COLORS: Record<string, string> = {
  'Team/League Updates': 'var(--color-primary)',
  'Coaching Updates & Controversies': '#a5453c',
  'Schedules & Power Rankings': 'var(--color-accent)',
  'How to Watch': '#8a95a5',
}

const W = 640
const H = 320
const PAD_L = 46
const PAD_R = 12
const PAD_T = 14
const PAD_B = 30
const GAP = 6

// Stacked bars of NWSL headline volume by year and LDA topic -- bar height
// carries total coverage volume (roughly tripling since 2018), segment
// color carries the topic mix shifting away from "How to Watch" logistics.
// Hovering the legend dims every other topic across all 13 years at once;
// hovering a segment shows that year+topic's count and share.
export default function TopicMixChart() {
  const { topics, years } = topicMix
  const [hoverTopic, setHoverTopic] = useState<string | null>(null)
  const [hoverCell, setHoverCell] = useState<{ yearIdx: number; topic: string } | null>(null)

  const maxTotal = Math.max(...years.map((y) => y.total))
  const barW = (W - PAD_L - PAD_R) / years.length - GAP

  const x = (i: number) => PAD_L + i * ((W - PAD_L - PAD_R) / years.length) + GAP / 2
  const yScale = (v: number) => (v / maxTotal) * (H - PAD_T - PAD_B)

  return (
    <div className="bg-[var(--color-paper)] border border-[var(--color-line)] shadow-offset-sm p-5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            onMouseEnter={() => setHoverTopic(t)}
            onMouseLeave={() => setHoverTopic(null)}
            className="flex items-center gap-1.5 font-mono-label text-[9px] cursor-pointer"
            style={{ opacity: hoverTopic === null || hoverTopic === t ? 1 : 0.35 }}
          >
            <span className="inline-block w-2.5 h-2.5" style={{ backgroundColor: TOPIC_COLORS[t] }} />
            <span className="text-[var(--color-ink)]/75">{t}</span>
          </button>
        ))}
      </div>

      <ChartScrollFrame
        minWidth={480}
        overlay={
          hoverCell && (
            <ChartTooltip
              xPct={((x(hoverCell.yearIdx) + barW / 2) / W) * 100}
              yPct={((H - PAD_B - yScale(years[hoverCell.yearIdx].counts[hoverCell.topic]) / 2) / H) * 100}
              visible
            >
              <p className="font-mono-label text-[10px] text-[var(--color-accent)] mb-0.5">{years[hoverCell.yearIdx].year}</p>
              <p className="font-semibold">{hoverCell.topic}</p>
              <p>
                {years[hoverCell.yearIdx].counts[hoverCell.topic].toLocaleString()} articles (
                {(years[hoverCell.yearIdx].proportions[hoverCell.topic] * 100).toFixed(0)}%)
              </p>
              <p className="text-[var(--color-ink)]/60">{years[hoverCell.yearIdx].total.toLocaleString()} total that year</p>
            </ChartTooltip>
          )
        }
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block overflow-visible" role="img" aria-label="NWSL headline topic mix by year">
          <line x1={PAD_L} y1={H - PAD_B} x2={W - PAD_R} y2={H - PAD_B} stroke="var(--color-line)" strokeWidth={1.5} />
          {[0, 0.5, 1].map((f) => (
            <line
              key={f}
              x1={PAD_L}
              y1={H - PAD_B - f * (H - PAD_T - PAD_B)}
              x2={W - PAD_R}
              y2={H - PAD_B - f * (H - PAD_T - PAD_B)}
              stroke="var(--color-line)"
              strokeWidth={1}
              strokeDasharray={f === 0 ? undefined : '3 3'}
            />
          ))}
          <text x={PAD_L - 8} y={H - PAD_B} textAnchor="end" dominantBaseline="middle" className="font-mono" fontSize={9} fill="var(--color-ink)" opacity={0.55}>
            0
          </text>
          <text x={PAD_L - 8} y={H - PAD_B - (H - PAD_T - PAD_B)} textAnchor="end" dominantBaseline="middle" className="font-mono" fontSize={9} fill="var(--color-ink)" opacity={0.55}>
            {maxTotal.toLocaleString()}
          </text>

          {years.map((yr, i) => {
            let cumulative = 0
            return (
              <g key={yr.year}>
                {topics.map((t) => {
                  const count = yr.counts[t]
                  const segH = yScale(count)
                  const segY = H - PAD_B - cumulative - segH
                  cumulative += segH
                  const dim = hoverTopic !== null && hoverTopic !== t
                  const isHoverCell = hoverCell?.yearIdx === i && hoverCell.topic === t
                  return (
                    <rect
                      key={t}
                      x={x(i)}
                      y={segY}
                      width={barW}
                      height={Math.max(segH, 0)}
                      fill={TOPIC_COLORS[t]}
                      opacity={dim ? 0.2 : isHoverCell ? 1 : 0.85}
                      stroke={isHoverCell ? 'var(--color-primary-deep)' : 'none'}
                      strokeWidth={1.5}
                      onMouseEnter={() => {
                        setHoverCell({ yearIdx: i, topic: t })
                        setHoverTopic(t)
                      }}
                      onMouseLeave={() => {
                        setHoverCell(null)
                        setHoverTopic(null)
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                  )
                })}
                {(i % 2 === 0 || years.length < 10) && (
                  <text x={x(i) + barW / 2} y={H - PAD_B + 14} textAnchor="middle" className="font-mono" fontSize={9} fill="var(--color-ink)" opacity={0.55}>
                    {yr.year}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </ChartScrollFrame>
    </div>
  )
}

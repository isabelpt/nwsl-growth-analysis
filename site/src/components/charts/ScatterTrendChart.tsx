import { useState } from 'react'
import ChartTooltip from './ChartTooltip'
import ChartScrollFrame from './ChartScrollFrame'

export type ScatterPoint = {
  x: number
  y: number
  label: string
  sub?: string
}

type Tick = { at: number; label: string }

type ScatterTrendChartProps = {
  points: ScatterPoint[]
  /** Bivariate OLS trend, fit in the same x-space as `points[].x`. */
  slope: number
  intercept: number
  r: number
  n?: number
  xDomain: [number, number]
  yDomain?: [number, number]
  xTicks: Tick[]
  yTicks?: Tick[]
  xAxisLabel: string
  yAxisLabel: string
  yFormat?: (y: number) => string
  xTooltipFormat?: (x: number) => string
}

const W = 640
const H = 380
const PAD_L = 62
const PAD_R = 16
const PAD_T = 16
const PAD_B = 40

// Generic scatter + bivariate-OLS-trendline chart, reused for every
// x-vs-attendance figure (on-field success, market size, distance from
// downtown). Points are colored by which side of the trend line they land
// on -- navy above (over-performing), red-brown below (under-performing) --
// the same "signed miss" idea the reference figure uses, just continuous
// instead of leave-one-out.
export default function ScatterTrendChart({
  points,
  slope,
  intercept,
  r,
  n,
  xDomain,
  yDomain,
  xTicks,
  yTicks,
  xAxisLabel,
  yAxisLabel,
  yFormat = (y) => y.toLocaleString(),
  xTooltipFormat = (x) => x.toFixed(2),
}: ScatterTrendChartProps) {
  const [hover, setHover] = useState<number | null>(null)

  const [x0, x1] = xDomain
  const ys = points.map((p) => p.y)
  const [y0, y1] = yDomain ?? [0, Math.max(...ys) * 1.08]

  const px = (x: number) => PAD_L + ((x - x0) / (x1 - x0)) * (W - PAD_L - PAD_R)
  const py = (y: number) => H - PAD_B - ((y - y0) / (y1 - y0)) * (H - PAD_T - PAD_B)

  const resolvedYTicks: Tick[] =
    yTicks ??
    Array.from({ length: 5 }, (_, i) => {
      const v = y0 + (i / 4) * (y1 - y0)
      return { at: v, label: yFormat(v) }
    })

  const trendX0 = px(x0)
  const trendY0 = py(slope * x0 + intercept)
  const trendX1 = px(x1)
  const trendY1 = py(slope * x1 + intercept)

  return (
    <div className="bg-[var(--color-paper)] border border-[var(--color-line)] shadow-offset-sm p-5">
      <div className="flex items-baseline justify-between mb-2">
        <p className="font-mono-label text-[10px] text-[var(--color-ink)]/60">{yAxisLabel} vs. {xAxisLabel}</p>
        <p className="font-mono-label text-[10px] text-[var(--color-ink)]/50">
          r = {r.toFixed(2)}{n ? `, n = ${n}` : ''}
        </p>
      </div>

      <ChartScrollFrame minWidth={480}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block overflow-visible" role="img" aria-label={`${yAxisLabel} vs ${xAxisLabel} scatter plot`}>
          {/* gridlines */}
          {resolvedYTicks.map((t) => (
            <g key={t.label}>
              <line x1={PAD_L} y1={py(t.at)} x2={W - PAD_R} y2={py(t.at)} stroke="var(--color-line)" strokeWidth={1} />
              <text x={PAD_L - 8} y={py(t.at)} textAnchor="end" dominantBaseline="middle" className="font-mono" fontSize={10} fill="var(--color-ink)" opacity={0.6}>
                {t.label}
              </text>
            </g>
          ))}
          {xTicks.map((t) => (
            <text key={t.label} x={px(t.at)} y={H - PAD_B + 18} textAnchor="middle" className="font-mono" fontSize={10} fill="var(--color-ink)" opacity={0.6}>
              {t.label}
            </text>
          ))}

          <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={H - PAD_B} stroke="var(--color-line)" strokeWidth={1.5} />
          <line x1={PAD_L} y1={H - PAD_B} x2={W - PAD_R} y2={H - PAD_B} stroke="var(--color-line)" strokeWidth={1.5} />

          {/* axis labels */}
          <text x={(PAD_L + W - PAD_R) / 2} y={H - 4} textAnchor="middle" className="font-mono-label" fontSize={10} fill="var(--color-primary)">
            {xAxisLabel}
          </text>

          {/* trend line */}
          <line x1={trendX0} y1={trendY0} x2={trendX1} y2={trendY1} stroke="var(--color-ink)" strokeOpacity={0.45} strokeWidth={1.5} strokeDasharray="5 4" />

          {points.map((p, i) => {
            const predicted = slope * p.x + intercept
            const above = p.y >= predicted
            const isHover = hover === i
            return (
              <circle
                key={`${p.label}-${i}`}
                cx={px(p.x)}
                cy={py(p.y)}
                r={isHover ? 6.5 : 4.5}
                fill={above ? 'var(--color-primary)' : '#a5453c'}
                fillOpacity={hover === null || isHover ? 0.85 : 0.35}
                stroke={isHover ? 'var(--color-accent)' : 'white'}
                strokeWidth={isHover ? 2 : 1}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: 'pointer' }}
              />
            )
          })}
        </svg>

        {hover !== null && (
          <ChartTooltip xPct={(px(points[hover].x) / W) * 100} yPct={(py(points[hover].y) / H) * 100} visible>
            <p className="font-mono-label text-[10px] text-[var(--color-accent)] mb-0.5">{points[hover].label}</p>
            {points[hover].sub && <p className="text-[var(--color-ink)]/60">{points[hover].sub}</p>}
            <p>
              {xAxisLabel}: {xTooltipFormat(points[hover].x)}
            </p>
            <p>
              {yAxisLabel}: {yFormat(points[hover].y)}
            </p>
          </ChartTooltip>
        )}
      </ChartScrollFrame>
    </div>
  )
}

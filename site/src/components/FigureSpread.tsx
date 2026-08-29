import type { ReactNode } from 'react'

type FigureSpreadProps = {
  /** An interactive SVG chart component -- each chart is already fully
   *  styled (border, offset shadow, hover tooltip), so this slot doesn't
   *  wrap it in another card. */
  chart: ReactNode
  label?: string
  claim?: string
  benchmark?: string
  /** Short, scannable takeaways — replaces a paragraph caption nobody reads.
   *  Keep each point to one sentence; lead with the number. */
  points: string[]
  /** Put the chart on the right instead of the left (desktop only; always
   *  stacks chart-then-points on mobile so the point of the figure lands first). */
  reverse?: boolean
}

// Figure + key points laid out side by side -- the figure gets the larger
// share of the row (58/42, not an even split) since these are dense
// multi-series charts that read as cramped at half width. Stacks to a
// single column on mobile. Uses flex (not grid) so `reverse` can flip which
// side the chart sits on via flex-row-reverse without disturbing each
// child's own width -- a grid-column `order` swap would otherwise put the
// chart in whichever track is narrower.
export default function FigureSpread({ chart, label, claim, benchmark, points, reverse }: FigureSpreadProps) {
  return (
    <div className={`flex flex-col gap-6 md:gap-10 items-start ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="w-full md:w-[58%] shrink-0">{chart}</div>

      <div className="w-full md:w-[42%]">
        <div className="flex items-start justify-between gap-3 mb-2">
          {label && <p className="font-mono-label text-[11px] text-[var(--color-accent)]">{label}</p>}
          {benchmark && (
            <span className="shrink-0 font-mono-label text-[10px] border border-[var(--color-accent)] text-[var(--color-primary)] px-2 py-1">
              {benchmark}
            </span>
          )}
        </div>
        {claim && (
          <p className="font-serif-heading text-xl font-semibold text-[var(--color-primary-deep)] leading-snug mb-3">
            {claim}
          </p>
        )}
        <ul className="space-y-2.5">
          {points.map((point, i) => (
            <li key={i} className="flex gap-2.5 text-[15px] text-[var(--color-ink)]/90 leading-snug">
              <span className="shrink-0 text-[var(--color-accent)] font-semibold" aria-hidden="true">
                →
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

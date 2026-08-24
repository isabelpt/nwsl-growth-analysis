type FigureSpreadProps = {
  src: string
  alt: string
  label?: string
  claim?: string
  benchmark?: string
  /** Short, scannable takeaways — replaces a paragraph caption nobody reads.
   *  Keep each point to one sentence; lead with the number. */
  points: string[]
  /** Put the image on the right instead of the left (desktop only; always
   *  stacks image-then-points on mobile so the point of the figure lands first). */
  reverse?: boolean
}

// Figure + key points laid out side by side, each taking half the row on
// desktop, instead of a full-width image with a long grey caption underneath
// that nobody reads. Stacks to a single column on mobile.
export default function FigureSpread({ src, alt, label, claim, benchmark, points, reverse }: FigureSpreadProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
      <figure
        className={`bg-[var(--color-paper)] border border-[var(--color-line)] shadow-offset-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset ${reverse ? 'md:order-2' : ''}`}
      >
        <div className="bg-white">
          <img src={src} alt={alt} className="w-full h-auto block" />
        </div>
      </figure>

      <div>
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

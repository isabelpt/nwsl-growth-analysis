import { useState } from 'react'

type Tab = {
  tabLabel: string
  src: string
  alt: string
  /** Short, scannable takeaways for this tab specifically. */
  points: string[]
}

type FigureToggleProps = {
  label?: string
  claim?: string
  benchmark?: string
  tabs: Tab[]
  reverse?: boolean
}

// Two charts that don't fit side by side without shrinking illegibly — shown
// one at a time behind a tab toggle instead, each at full figure size, with
// its own takeaways swapping alongside it.
export default function FigureToggle({ label, claim, benchmark, tabs, reverse }: FigureToggleProps) {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
      <div className={reverse ? 'md:order-2' : ''}>
        <div
          className="flex border border-b-0 border-[var(--color-line)] w-fit"
          role="tablist"
        >
          {tabs.map((t, i) => (
            <button
              key={t.tabLabel}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`font-mono-label text-[11px] px-3 py-2 border-r border-[var(--color-line)] last:border-r-0 transition-colors ${
                i === active
                  ? 'bg-[var(--color-primary-deep)] text-white'
                  : 'bg-[var(--color-paper-alt)] text-[var(--color-primary)] hover:bg-[var(--color-paper)]'
              }`}
            >
              {t.tabLabel}
            </button>
          ))}
        </div>
        <figure className="bg-[var(--color-paper)] border border-[var(--color-line)] shadow-offset-sm">
          <div className="bg-white">
            <img src={tab.src} alt={tab.alt} className="w-full h-auto block" />
          </div>
        </figure>
      </div>

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
          {tab.points.map((point, i) => (
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

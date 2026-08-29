import { useState, type ReactNode } from 'react'

export type FeatureTab = {
  tabLabel: string
  effectNote: string
  significant: boolean
  /** An interactive SVG chart component -- already fully styled, so it
   *  isn't wrapped in another card here. */
  chart: ReactNode
  claim: string
  points: string[]
}

type FeatureExplorerProps = {
  tabs: FeatureTab[]
}

// The single entry point into every driver tested against attendance --
// one prominent, unmissable tab bar (not five separate figures) so a reader
// picks a driver and sees its own evidence, one at a time, right before the
// all-drivers-ranked bar chart that follows it. Deliberately louder than
// FigureToggle (which only ever toggled two related charts): a pulsing
// "click a driver" cue and big chunky tab buttons that carry their own
// effect size + significance badge so the choice itself previews the payoff.
// No "Figure N" label of its own -- the caller renders that above, same as
// every other figure on the page, so there's exactly one label per figure.
export default function FeatureExplorer({ tabs }: FeatureExplorerProps) {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <div>
      <p className="font-mono-label text-[11px] text-[var(--color-primary)] flex items-center gap-2 mb-4">
        <span
          aria-hidden="true"
          className="inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse"
        />
        Click a driver to see its evidence
      </p>

      {/* Prominent, full-width tab bar -- each button previews its own
          finding so the payoff of clicking is visible before you click. */}
      <div role="tablist" aria-label="Attendance drivers" className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {tabs.map((t, i) => {
          const isActive = i === active
          return (
            <button
              key={t.tabLabel}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`text-left border-2 px-3 py-3 transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'border-[var(--color-primary-deep)] bg-[var(--color-primary-deep)] text-white shadow-offset-sm -translate-y-0.5'
                  : 'border-[var(--color-line)] bg-[var(--color-paper-alt)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:-translate-y-0.5 hover:shadow-offset-sm'
              }`}
            >
              <p className="font-mono-label text-[11px] font-semibold mb-1.5 leading-snug">{t.tabLabel}</p>
              <p className={`font-mono text-[11px] mb-1.5 ${isActive ? 'text-white/85' : 'text-[var(--color-ink)]/70'}`}>
                {t.effectNote}
              </p>
              <span
                className={`inline-block font-mono-label text-[9px] px-1.5 py-0.5 ${
                  t.significant
                    ? isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                    : isActive
                      ? 'bg-white/10 text-white/70'
                      : 'bg-[var(--color-paper)] text-[var(--color-ink)]/50 border border-[var(--color-line)]'
                }`}
              >
                {t.significant ? 'p < .05' : 'n.s.'}
              </span>
            </button>
          )
        })}
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        <div className="w-full md:w-[58%] shrink-0">{tab.chart}</div>
        <div className="w-full md:w-[42%]">
          <p className="font-serif-heading text-xl font-semibold text-[var(--color-primary-deep)] leading-snug mb-3">
            {tab.claim}
          </p>
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
    </div>
  )
}

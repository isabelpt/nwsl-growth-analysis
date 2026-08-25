import SectionHeading from '../components/SectionHeading'

export default function TakeawaySection() {
  return (
    <section id="takeaway" className="border-t border-[var(--color-line)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="05" title="The Takeaway" eyebrow="So what" />

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div className="border border-[var(--color-primary-deep)] bg-[var(--color-primary-deep)] text-white p-8 shadow-offset flex flex-col justify-center">
            <p className="font-mono-label text-[11px] text-[var(--color-accent)] mb-3">The claim</p>
            <p className="font-serif-heading text-2xl md:text-3xl font-semibold leading-snug">
              NWSL growth is built on investments in stadiums and rivalries, not market luck or individual team success.
              These results suggest durable league growth and the development of a women's specific sports culture, 
              signalling that investments in women's sports are paying off.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border-l-2 border-[var(--color-accent)] pl-5 py-1">
              <p className="font-mono-label text-[11px] text-[var(--color-primary)] mb-2">But —</p>
              <ul className="space-y-2.5">
                {[
                  'The league as a whole is growing, but it is also stratifying.',
                  "Kansas City reliably sells out its purpose-built stadium; Seattle fills a fifth of a shared, oversized one.",
                  'A new venue is worth an estimated +28% in attendance, so the financial capacity to build one increasingly separates the top and bottom of the table.',
                ].map((point, i) => (
                  <li key={i} className="flex gap-2.5 text-[15px] text-[var(--color-ink)]/90 leading-snug">
                    <span className="shrink-0 text-[var(--color-accent)] font-semibold" aria-hidden="true">
                      →
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-[var(--color-accent)] pl-5 py-1">
              <p className="font-mono-label text-[11px] text-[var(--color-primary)] mb-2">Next steps —</p>
              <ul className="space-y-2.5">
                {[
                  "A more robust causal analysis is attempted in this project's second iteration to explore the significant correlations.",
                  'Tying the two halves together by testing whether media growth predicts next-season attendance gains.',
                  'The NWSL is still a young league, and COVID-19 disrupted the 2020 and 2021 seasons, so this analysisis somewhat limited by sample size.',
                ].map((point, i) => (
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
      </div>
    </section>
  )
}

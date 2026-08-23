import SectionHeading from '../components/SectionHeading'

export default function TakeawaySection() {
  return (
    <section id="takeaway" className="border-t border-[var(--color-line)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="05" title="The Takeaway" eyebrow="So what" />

        <div className="border border-[var(--color-primary-deep)] bg-[var(--color-primary-deep)] text-white p-8 shadow-offset max-w-3xl">
          <p className="font-mono-label text-[11px] text-[var(--color-accent)] mb-3">The claim</p>
          <p className="font-serif-heading text-2xl md:text-3xl font-semibold leading-snug">
            NWSL growth is durable because it's built on structural
            investment in stadiums and rivalries, not market luck or individual team success.
            The growth of women's sport specific media suggests a larger cultural shift, 
            and a real signal that investments in women's sport are paying off. 
          </p>
        </div>

        <div className="max-w-3xl mt-4 border-l-2 border-[var(--color-accent)] pl-5 py-1">
          <p className="font-mono-label text-[11px] text-[var(--color-primary)] mb-2">But —</p>
          <p className="leading-relaxed text-[var(--color-ink)]/85">
            the same results hint at a stratifying league. Kansas City is reliably selling
            out a purpose-built stadium, while Seattle fills a fifth of a shared,
            oversized one. If a new venue is worth 38% in attendance, the 
            financial capacity to build one increasingly separates the top and bottom of the
            table.
          </p>
        </div>

         <div className="max-w-3xl mt-4 border-l-2 border-[var(--color-accent)] pl-5 py-1">
          <p className="font-mono-label text-[11px] text-[var(--color-primary)] mb-2">Next Steps —</p>
          <p className="leading-relaxed text-[var(--color-ink)]/85">
            
          </p>
        </div>
      </div>
    </section>
  )
}

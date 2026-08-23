import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import stadiumsMap from '../assets/figures/stadiums-map.png'

const SOURCES = [
  {
    name: 'American Soccer Analysis API',
    detail: '7,283 NWSL and MLS games, 2013–2026, with attendance, scores, and rosters — pulled via the itscalledsoccer package, no auth required.',
    tags: ['Games', 'Teams', 'Players'],
  },
  {
    name: 'Wikipedia stadium tables',
    detail: '57 stadiums scraped and geocoded for capacity, location, and opening year, then hand-matched to primary and secondary tenants for every shared venue.',
    tags: ['Stadiums', 'Capacity'],
  },
  {
    name: 'MediaCloud API',
    detail: '8,328 NWSL-related articles, 2012–2026, across dozens of outlets — filtered and deduplicated for coverage-volume and peak-detection analysis.',
    tags: ['Media', 'Coverage'],
  },
  {
    name: 'YouTube Data API v3',
    detail: "Upload cadence and subscriber counts for the NWSL's official channel and five independent women's-soccer media channels, as a proxy for audience reach beyond the box score.",
    tags: ['YouTube', 'Audience'],
  },
]

export default function DataSection() {
  return (
    <section id="data" className="border-t border-[var(--color-line)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="02" title="The Data" eyebrow="Sources" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOURCES.map((s) => (
              <div
                key={s.name}
                className="border border-[var(--color-line)] bg-[var(--color-paper)] p-4 shadow-offset-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset"
              >
                <h3 className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-1">
                  {s.name}
                </h3>
                <p className="text-sm text-[var(--color-ink)]/75 leading-relaxed mb-3">{s.detail}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <figure className="border border-[var(--color-line)] bg-white shadow-offset-sm">
            <img src={stadiumsMap} alt="Map of NWSL and MLS stadiums by capacity" className="w-full h-auto block" />
            <figcaption className="p-4 border-t border-[var(--color-line)]">
              <p className="font-mono-label text-[11px] text-[var(--color-accent)] mb-1">Coverage</p>
              <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
                Every stadium hosting an NWSL or MLS match, sized by seating
                capacity. 14 current venues host both leagues — at 13 of
                those, MLS is the senior tenant.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

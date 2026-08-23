import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'
import stadiumsMap from '../assets/figures/stadiums-map.png'

const SOURCES = [
  {
    name: 'American Soccer Analysis API',
    detail: 'Match data, player rosters per season, team, and stadium data via the itscalledsoccer python wrapper. Aggregated match-level data to team-season and team-game datasets. NWSL data starts in 2026, so all data cropped to begin that year.',
    tags: ['Games', 'Teams', 'Players'],
  },
  {
    name: 'Wikipedia stadium tables',
    detail: 'Scraped current NWSL and MLS stadium information, including seating capacity and location data, to fill gaps in the ASA dataset. Used primarily to identify primary and secondary tenants of shared stadiums.',
    tags: ['Stadiums', 'Capacity'],
  },
  {
    name: 'MediaCloud API',
    detail: '8,328 NWSL-related articles, 2012-2026, across top US media outlets. Two layers of article filtering: keyword search for NWSL and women\'s soccer in initial MediaCloud query, followed by secondary title filtering for the same keywords, plus team names.',
    tags: ['Media', 'Coverage'],
  },
  {
    name: 'YouTube Data API v3',
    detail: "Video count, total views, and subscriber count from the official NWSL YouTube channel and five other women’s-sports-specific accounts. Used for annecdotal supporting analysis of the league's audience and reach beyond pure attendance and traditional media coverage.",
    tags: ['YouTube', 'Audience'],
  },
]

// export default function DataSection() {
//   return (
//     <section id="data" className="border-t border-[var(--color-line)] py-16">
//       <div className="max-w-5xl mx-auto px-6">
//         <SectionHeading index="02" title="The Data" eyebrow="Sources" />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {SOURCES.map((s) => (
//               <div
//                 key={s.name}
//                 className="border border-[var(--color-line)] bg-[var(--color-paper)] p-4 shadow-offset-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset"
//               >
//                 <h3 className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-1">
//                   {s.name}
//                 </h3>
//                 <p className="text-sm text-[var(--color-ink)]/75 leading-relaxed mb-3">{s.detail}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {s.tags.map((t) => (
//                     <Tag key={t}>{t}</Tag>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <figure className="border border-[var(--color-line)] bg-white shadow-offset-sm">
//             <img src={stadiumsMap} alt="Map of NWSL and MLS stadiums by capacity" className="w-full h-auto block" />
//             <figcaption className="p-4 border-t border-[var(--color-line)]">
//               <p className="font-mono-label text-[11px] text-[var(--color-accent)] mb-1">Team Locations</p>
//               <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
//                 Every current home NWSL and MLS stadium. 14 current venues host both leagues and at 13 of
//                 those, MLS is the senior tenant.
//               </p>
//             </figcaption>
//           </figure>
//         </div>
//       </div>
//     </section>
//   )
// }

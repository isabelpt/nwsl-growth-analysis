import SectionHeading from '../components/SectionHeading'
import Tag from '../components/Tag'

export default function QuestionSection() {
  return (
    <section id="question" className="border-t border-[var(--color-line)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="01" title="The Question" eyebrow="Motivation" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-[var(--color-ink)]/85 leading-relaxed">
            <p>
              The NWSL has grown quickly since its inaugural season in 2013,
              but the growth is uneven across the league. Most agree that the league's
              growth is durable, but the factors driving that growth have not been rigorously studied. 
              This project aims to fill that gap by analyzing the factors that drive attendance in the NWSL, 
              and comparing them to those in MLS. More specifically, we model the influence of stadium relocation, points per game, market size, and rivalries on
              attendance. We then compare these results to a secondary analysis of the growth of the League’s media footprint.
            </p>
            <p>
              Our results point to a durable growth story. The infrastructural and cultural factors a front office can build through sustained investment, 
              like a stadium move or a well-established rivalry have a much larger impact on attendance than factors that are out of a front office's control, like market size or on-field success.
              A stadium move is worth roughly 38% more attendance on
              average, and a Cascadia Rivalry game between Portland and Seattle
              draws over 4,000 more fans than either team's own season
              baseline. Meanwhile, market size and on-field success barely
              move the needle. The same pattern holds in MLS too, suggesting a soccer-wide story. 
            </p>
          </div>
          <div className="border border-[var(--color-line)] bg-[var(--color-paper-alt)] p-5 shadow-offset-accent">
            <p className="font-mono-label text-[11px] text-[var(--color-primary)] mb-3">
              Comparative frame
            </p>
            <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed mb-4">
              MLS is the closest available benchmark as it's the same sport and oftentimes the same
              stadiums, just with a longer history. By testing the same factors in the MLS, 
              we can see which factors are unique to the NWSL and which are true of soccer in general. 
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag>NWSL</Tag>
              <Tag>MLS</Tag>
              <Tag>Attendance</Tag>
              <Tag>Media growth</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

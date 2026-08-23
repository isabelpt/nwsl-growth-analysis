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
              The NWSL has grown fast — new expansion fees, new stadiums,
              record broadcast deals — but "growth" and "durable demand" are
              different claims. A league can also grow because a handful of
              markets happen to be hot right now. So this project asks a
              narrower, more testable question: when a team's attendance
              rises, what is actually driving it? Is it winning games,
              playing in a bigger media market, or something the league and
              its teams can deliberately build — a new stadium, a rivalry?
            </p>
            <p>
              The answer, across nine seasons of NWSL game data, is that the
              factors a front office can build outweigh the factors it can't
              control. A stadium move is worth roughly 38% more attendance on
              average; a Cascadia Rivalry game between Portland and Seattle
              draws over 4,000 more fans than either team's own season
              baseline. Meanwhile, market size and on-field success barely
              move the needle — and that pattern holds in MLS too, so it
              isn't a women's-sports-specific quirk. It's just what fills
              soccer stadiums.
            </p>
          </div>
          <div className="border border-[var(--color-line)] bg-[var(--color-paper-alt)] p-5 shadow-offset-accent">
            <p className="font-mono-label text-[11px] text-[var(--color-primary)] mb-3">
              Comparative frame
            </p>
            <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed mb-4">
              MLS is the closest available benchmark — same sport, same
              stadiums in several cities, three decades of a head start. Every
              claim about what predicts NWSL attendance gets tested against
              MLS too, so "true of women's soccer" and "true of soccer" don't
              get conflated.
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

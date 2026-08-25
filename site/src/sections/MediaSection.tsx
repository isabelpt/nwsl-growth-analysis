import SectionHeading from '../components/SectionHeading'
import FigureSpread from '../components/FigureSpread'
import youtubeRise from '../assets/figures/youtube-rise.png'
import topicMixByYear from '../assets/figures/topic-mix-by-year.png'

// The media/coverage half of the findings -- a separate dataset (8,328
// headlines + YouTube channel growth) and a separate claim (a broader
// cultural shift, not just an attendance number) from AttendanceSection
// above, so it gets its own section rather than living under one "Results"
// heading that had to cover both stories at once.
export default function MediaSection() {
  return (
    <section id="media" className="border-t border-[var(--color-line)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          index="05"
          title="The league is growing outside of the stadium, too, and a distinct women's sports culture is emerging"
          eyebrow="Findings — Media & Culture"
        />

        {/* Topic modeling: coverage volume + composition, plus the star-power finding */}
        <div className="mb-14">
          <FigureSpread
            src={topicMixByYear}
            alt="LDA topic modeling of NWSL headlines shows coverage volume rising since 2018, with a shift from 'how to watch' logistics toward coaching storylines and competitive coverage"
            label="Figure 3"
            claim="Coverage is growing up, not just growing."
            points={[
              'Coverage volume has nearly tripled since 2018, across 8,328 headlines (2012–2024, 4 LDA topics).',
              "The mix has shifted from 'how to watch' logistics toward coaching storylines and competitive coverage.",
              "Rapinoe and Morgan's names surfaced in the topic model equations, evidence that star power drives coverage.",
            ]}
          />
        </div>

        {/* Closing beat: broadens from stadium attendance to league-wide culture */}
        <div>
          <FigureSpread
            src={youtubeRise}
            alt="YouTube upload growth for women's soccer channels accelerates as independent channels launch and overtake the NWSL's own"
            label="Figure 4"
            claim="Demand for women's soccer content is bigger than the league's own channel."
            reverse
            points={[
              "Just Women's Sports now has 300K YouTube subscribers to the NWSL's own 250K.",
              "Four more independent, women's-sports-specific channels have launched since 2019.",
              "Retired players are building media careers, such as Christen Press and Tobin Heath with RE, and Sam Mewis with The Women's Game.",
              "Independents' combined upload volume overtook the NWSL's own channel in 2021 and has kept pulling away.",
              "Coverage spikes track events the league doesn't control, often relating to the USWNT.",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

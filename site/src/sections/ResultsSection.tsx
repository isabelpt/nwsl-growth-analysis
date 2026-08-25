import SectionHeading from '../components/SectionHeading'
import FigureSpread from '../components/FigureSpread'
import FigureToggle from '../components/FigureToggle'
import SummaryTable from '../components/SummaryTable'
import EffectSizeChart from '../components/EffectSizeChart'
import PullQuote from '../components/PullQuote'
import honeymoonEffect from '../assets/figures/honeymoon-effect.png'
import rivalryPremium from '../assets/figures/rivalry-premium.png'
import marketSize from '../assets/figures/market-size.png'
import olsRegression from '../assets/figures/ols-regression.png'
import youtubeRise from '../assets/figures/youtube-rise.png'
import topicMixByYear from '../assets/figures/topic-mix-by-year.png'
// import awayDrawLift from '../assets/figures/away-draw-lift.png'
// import capacityUtilization from '../assets/figures/capacity-utilization.png'

// Figures are ordered by narrative strength, not by pipeline order: the two
// surprising positive drivers first, then a one-figure summary tying every
// driver together, then the negative result (what doesn't matter), and the
// media-culture figure last as the closing broadening-out beat.
export default function ResultsSection() {
  return (
    <section id="results" className="border-t border-[var(--color-line)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="04" title="The Results" eyebrow="Findings" />

        {/* Summary table — at-a-glance overview before the argument unfolds */}
        <div className="mb-14">
          <p className="font-mono-label text-xs text-[var(--color-primary)] mb-3">
            Table 1 — attendance, away-draw lift &amp; capacity by team
          </p>
          {/* Slight breakout: the table needs a bit more room than the 5xl reading
              column gives it, so it escapes that constraint and re-centers at a
              width sized to its content — not full viewport, or the columns end
              up mostly empty padding. */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen flex justify-center">
            <div className="w-full max-w-[1000px] px-6">
              <SummaryTable />
            </div>
          </div>
          <p className="text-sm text-[var(--color-ink)]/70 leading-relaxed mt-3 max-w-2xl">
            All 16 active NWSL teams, ranked by share of 2025 league
            attendance. Away-draw lift is how much a team boosts road
            attendance above the host's own season baseline.
          </p>
          <ul className="mt-3 space-y-2 max-w-2xl">
            {[
              'Portland Thorns lead the league in raw attendance.',
              "Kansas City Current is sold out in its purpose-built stadium.",
              "Washington Spirit posted the largest 2025 gain (+26.6%) after its move to Audi Field.",
            ].map((point, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-[var(--color-ink)]/90 leading-snug">
                <span className="shrink-0 text-[var(--color-accent)] font-semibold" aria-hidden="true">
                  →
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Honeymoon effect: strongest, most surprising driver */}
        <div className="mb-14">
          <FigureSpread
            src={honeymoonEffect}
            alt="A new stadium buys a team several seasons of sharply elevated attendance"
            label="Figure 1"
            claim="A new stadium is worth more than winning."
            points={[
              'Five teams moved into a new venue since 2021 — every one of them saw an attendance jump.',
              'Gains ranged from +62% (Kansas City) to +136% (Gotham FC).',
              'In the full OLS regression, a new-stadium flag is worth an estimated +28% in attendance (p=0.08 — marginal, not quite p<.05).',
            ]}
          />
        </div>

        {/* Rivalry premium */}
        <div className="mb-14">
          <FigureSpread
            src={rivalryPremium}
            alt="Rivalry matchups carry a significant, positive attendance premium over a team's same-season baseline"
            label="Figure 2"
            claim="Rivalries sell tickets that standings don't."
            reverse
            points={[
              "Cascadia derby games hosted in Seattle draw +4,097 fans over the team's own season baseline.",
              'That premium holds across all 17 meetings between Portland and Seattle.',
              'In the full OLS regression, a rivalry flag is worth an estimated +33% in attendance (p=0.04) — the single most statistically robust driver tested.',
            ]}
          />
        </div>

        {/* Synthesizing figure: every driver, ranked, in one image */}
        <div className="mb-14">
          <p className="font-mono-label text-xs text-[var(--color-primary)] mb-1">Figure 3</p>
          <p className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-3">
            Every driver we tested, ranked by how much it actually moves attendance.
          </p>
          <EffectSizeChart />
          <div className="mt-4 border-l-2 border-[var(--color-accent)] pl-4 max-w-2xl">
            <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
              <span className="font-medium text-[var(--color-primary-deep)]">One literature check: </span>
              a study cited in the lit review found NWSL attendance falls ~6.6% per mile of distance from downtown.
              The full regression finds a real, statistically significant effect (p=0.005) — but a much smaller one,
              ~2% per mile, about a third the size the cited figure implies.
            </p>
          </div>
        </div>

        <PullQuote>
          The factors investment can build outweigh the
          factors it can't.
        </PullQuote>

        {/* Negative result: what doesn't predict attendance. Two charts that got
            unreadable side by side at half width — toggle between them instead. */}
        <div className="mb-14">
          <FigureToggle
            label="Figure 4"
            benchmark="vs. MLS"
            claim="Market size and on-field success don't meaningfully influence attendance."
            tabs={[
              {
                tabLabel: 'Market size',
                src: marketSize,
                alt: 'Market size is only weakly correlated with average attendance across teams',
                points: [
                  'Metro population barely correlates with attendance in either league (NWSL r=0.05, n=16; MLS r=-0.19, n=30).',
                  'NYC teams in both leagues draw fewer fans than teams in much smaller markets.',
                  "In the full OLS regression, market size isn't statistically distinguishable from zero either (p=0.16).",
                ],
              },
              {
                tabLabel: 'On-field success',
                src: olsRegression,
                alt: 'On-field success explains markedly less variance in attendance than stadium and rivalry effects do',
                points: [
                  'Points-per-game correlates weakly with same-season attendance too (NWSL r=0.23, n=95; MLS r=0.16, n=288).',
                  'In the full OLS regression, an extra point per game is worth an estimated +11% in attendance — but that estimate is not statistically distinguishable from zero (p=0.43).',
                ],
              },
            ]}
          />
        </div>

        {/* Topic modeling: coverage volume + composition, plus the star-power finding */}
        <div className="mb-14">
          <FigureSpread
            src={topicMixByYear}
            alt="LDA topic modeling of NWSL headlines shows coverage volume rising since 2018, with a shift from 'how to watch' logistics toward coaching storylines and competitive coverage"
            label="Figure 5"
            claim="Coverage is growing up, not just growing."
            points={[
              'Coverage volume has nearly tripled since 2018, across 8,328 headlines (2012–2024, 4 LDA topics).',
              "The mix has shifted from 'how to watch' logistics toward coaching storylines and competitive coverage.",
              "Rapinoe and Morgan's names surfaced in the model's own topic vocabulary — star power still drives coverage.",
            ]}
          />
        </div>

        {/* Closing beat: broadens from stadium attendance to league-wide culture */}
        <div className="mb-14">
          <FigureSpread
            src={youtubeRise}
            alt="YouTube upload growth for women's soccer channels accelerates as independent channels launch and overtake the NWSL's own"
            label="Figure 6"
            claim="Demand for women's soccer content is bigger than the league's own channel."
            reverse
            points={[
              "Just Women's Sports now has 300K YouTube subscribers to the NWSL's own 250K.",
              "Four more independent, women's-sports-specific channels have launched since 2019.",
              "Independents' combined upload volume overtook the NWSL's own channel in 2021 and has kept pulling away.",
              "Coverage spikes track events the league doesn't control — the Nov. 2024 peak was USWNT-England buzz, not a game result.",
            ]}
          />
        </div>

        {/* Supporting figures
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FigureCard
            src={awayDrawLift}
            alt="Attendance lift when a popular away team visits"
            label="Supporting"
            caption="Bay FC draws the biggest road crowds relative to the host's own baseline (+1,096/game), followed by San Diego Wave (+789) and Washington Spirit (+713) — all recent, highly-anticipated expansion or relocation stories. Racing Louisville (-1,265) and Utah Royals (-971) draw the smallest road crowds."
          />
          <FigureCard
            src={capacityUtilization}
            alt="Capacity utilization by team"
            label="Supporting"
            caption="Kansas City Current sold out CPKC Stadium — the first venue purpose-built for a women's pro sports team — at 100% capacity in 2025. Seattle Reign, by contrast, fills just 19% of the 38,500-seat Lumen Field it shares as the secondary tenant. Purpose-built, right-sized venues consistently outperform oversized shared ones."
          />
        </div> */}
      </div>
    </section>
  )
}

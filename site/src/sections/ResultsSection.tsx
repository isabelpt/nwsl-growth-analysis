import SectionHeading from '../components/SectionHeading'
import FigureCard from '../components/FigureCard'
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
          <SummaryTable />
          <p className="text-sm text-[var(--color-ink)]/70 leading-relaxed mt-3 max-w-2xl">
            All 16 active NWSL teams, ranked by share of 2025 league
            attendance: career average home attendance (2020 excluded), most
            recent year-over-year change, 2025 capacity utilization, away-draw
            lift (how much a team boosts road attendance above the host's own
            season baseline), and average season finish by points-per-game. 
            Highlights: Portland Thorns lead the league in raw attendance, 
            Kansas City Current is sold out in its purpose-built stadium, 
            and Washington Spirit posted the largest 2025 gain (+26.6%) after its move to Audi Field.
          </p>
        </div>

        {/* Honeymoon effect: strongest, most surprising driver */}
        <div className="mb-14">
          <FigureCard
            src={honeymoonEffect}
            alt="A new stadium buys a team several seasons of sharply elevated attendance"
            label="Figure 1"
            caption="Five teams moved into a new venue since 2021. In response, every team saw a jump, from +62% (Kansas City) to +136% (Gotham FC). In the regression, a new-stadium flag is worth an estimated +38% in attendance."
          />
        </div>

        {/* Rivalry premium */}
        <div className="mb-14">
          <FigureCard
            src={rivalryPremium}
            alt="Rivalry matchups carry a significant, positive attendance premium over a team's same-season baseline"
            label="Figure 2"
            // claim="Rivalries sell tickets that standings don't."
            caption="Games in the Cascadia Rivalry (Seattle vs. Portland) hosted in Seattle, a team with low attendance overall, draw an average of 4,097 more fans than the team's own season baselines, across 17 meetings. In the regression, a rivalry flag is worth an estimated +19% in attendance."
          />
        </div>

        {/* Synthesizing figure: every driver, ranked, in one image */}
        <div className="mb-14">
          <p className="font-mono-label text-xs text-[var(--color-primary)] mb-1">Figure 3</p>
          <p className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-3">
            Every driver we tested, ranked by how much it actually moves attendance.
          </p>
          <EffectSizeChart />
        </div>

        <PullQuote>
          The factors investment can build outweigh the
          factors it can't.
        </PullQuote>

        {/* Two-panel negative result: what doesn't predict attendance */}
        <div className="mb-14">
          <p className="font-mono-label text-xs text-[var(--color-primary)] mb-1">Figure 4</p>
          <p className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-3">
            Market size and on-field success don't meaningfully influence attendance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FigureCard
              src={marketSize}
              alt="Market size is only weakly correlated with average attendance across teams"
              //benchmark="vs. MLS"
              caption="Metro population barely correlates with attendance in either league (NWSL r=0.05, n=16; MLS r=-0.19, n=30). New York City teams across the NWSL and MLS draw few fans than teams in much smaller markets."
            />
            <FigureCard
              src={olsRegression}
              alt="On-field success explains markedly less variance in attendance than stadium and rivalry effects do"
              caption="Points-per-game correlates weakly with same-season attendance in both leagues (NWSL r=0.23, n=95; MLS r=0.16, n=288). In the full regression, an extra point per game is worth an estimated +6.5% in attendance, a small but real effect."
            />
          </div>
        </div>

        {/* Topic modeling: coverage volume + composition, plus the star-power finding */}
        <div className="mb-14">
          <FigureCard
            src={topicMixByYear}
            alt="LDA topic modeling of NWSL headlines shows coverage volume rising since 2018, with a shift from 'how to watch' logistics toward coaching storylines and competitive coverage"
            label="Figure 5"
            caption="LDA topic tagging on 8,328 headlines (2012-2024, 4 topics) shows coverage nearly tripling since 2018, with the mix shifting from 'how to watch' logistics toward coaching storylines and competitive coverage. Notably, the model — with no notion of 'players' — surfaced Megan Rapinoe and Alex Morgan's names among its own topic-defining vocabulary, a sign of how much individual star power still drives NWSL coverage."
          />
        </div>

        {/* Closing beat: broadens from stadium attendance to league-wide culture */}
        <div className="mb-14">
          <p className="font-mono-label text-xs text-[var(--color-primary)] mb-1">Figure 6</p>
          <p className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-3">
            Demand is growing for women's soccer content, a sign of a broader cultural shift that will continue to lift attendance.
          </p>
          <FigureCard
            src={youtubeRise}
            alt="YouTube upload growth for women's soccer channels accelerates as independent channels launch and overtake the NWSL's own"
            caption="Independent women's-soccer media now outdraws the league's own channel: Just Women's Sports has 300K YouTube subscribers to the NWSL's official 250K, with four more dedicated channels behind them, launched between 2019 and 2024. Independents' combined upload volume overtook the NWSL's own channel in 2021 and has kept pulling away since. Article coverage itself spikes around events the league doesn't control — the November 2024 peak (291 articles) was driven by USWNT-England buzz and expansion-city announcements, not a game result."
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

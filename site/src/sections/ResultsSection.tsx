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
import awayDrawLift from '../assets/figures/away-draw-lift.png'
import capacityUtilization from '../assets/figures/capacity-utilization.png'

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
            The top eight teams by career average home attendance (2020
            excluded), each team's most recent year-over-year change, and its
            share of total 2025 league attendance. Portland leads on raw
            attendance; Washington Spirit posted the largest 2025 gain
            (+26.6%) after its move to Audi Field.
          </p>
        </div>

        {/* Honeymoon effect — strongest, most surprising driver */}
        <div className="mb-14">
          <FigureCard
            src={honeymoonEffect}
            alt="A new stadium buys a team several seasons of sharply elevated attendance before it decays back toward baseline"
            label="Figure 1"
            claim="A new stadium is worth more than a winning season."
            benchmark="vs. MLS"
            caption="Five active teams moved into a bigger or purpose-built venue since 2021 — Gotham FC, Washington Spirit, Seattle Reign, San Diego Wave, and Kansas City Current. Every one saw a jump, from +62% (Kansas City) to +136% (Gotham FC). In the regression, a new-stadium flag is worth an estimated +38% in attendance net of everything else — the single largest driver tested."
          />
        </div>

        {/* Rivalry premium */}
        <div className="mb-14">
          <FigureCard
            src={rivalryPremium}
            alt="Rivalry matchups carry a significant, positive attendance premium over a team's same-season baseline"
            label="Figure 2"
            claim="Rivalries sell tickets that standings don't."
            caption="Seattle's home games against Portland — the Cascadia Rivalry — draw an average of 4,097 more fans than Seattle's own season baseline, across 17 meetings, the largest lift of any of the 73 matchups with at least 8 meetings. In the regression, a rivalry flag is worth an estimated +19% in attendance net of team quality and market controls."
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
          The factors a league can build — stadiums, rivalries — outweigh the
          factors it can't: market size, and even winning.
        </PullQuote>

        {/* Two-panel negative result: what doesn't predict attendance */}
        <div className="mb-14">
          <p className="font-mono-label text-xs text-[var(--color-primary)] mb-1">Figure 4</p>
          <p className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-3">
            What doesn't move the needle: market size and on-field success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FigureCard
              src={marketSize}
              alt="Market size is only weakly correlated with average attendance across teams"
              benchmark="vs. MLS"
              caption="Metro population barely correlates with attendance in either league (NWSL r=0.05, n=16; MLS r=-0.19, n=30). NYCFC and the Red Bulls sit in the largest metro in either league and draw fewer fans than Nashville, Charlotte, or Cincinnati — this isn't an NWSL quirk, it's true of MLS too."
            />
            <FigureCard
              src={olsRegression}
              alt="On-field success explains markedly less variance in attendance than stadium and rivalry effects do"
              caption="Points-per-game correlates weakly with same-season attendance in both leagues (NWSL r=0.23, n=95; MLS r=0.16, n=288) — if anything, slightly more weakly in MLS. In the full regression, an extra point per game is worth an estimated +6.5% in attendance — real, but a fraction of the new-stadium or rivalry effect."
            />
          </div>
        </div>

        {/* Closing beat: broadens from stadium attendance to league-wide culture */}
        <div className="mb-14">
          <p className="font-mono-label text-xs text-[var(--color-primary)] mb-1">Figure 5</p>
          <p className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-3">
            The demand isn't confined to the stadium — it shows up in media, too.
          </p>
          <FigureCard
            src={youtubeRise}
            alt="YouTube subscriber and view growth for women's soccer channels accelerates around major women's soccer milestones"
            caption="Independent women's-soccer media now outdraws the league's own channel: Just Women's Sports has 300K YouTube subscribers to the NWSL's official 250K, with four more dedicated channels behind them. Article coverage itself spikes around events the league doesn't control — the November 2024 peak (291 articles) was driven by USWNT-England buzz and expansion-city announcements, not a game result."
          />
        </div>

        {/* Supporting figures */}
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
        </div>
      </div>
    </section>
  )
}

import SectionHeading from '../components/SectionHeading'
import FeatureExplorer from '../components/FeatureExplorer'
import SummaryTable from '../components/SummaryTable'
import EffectSizeChart from '../components/EffectSizeChart'
import RivalryPremiumChart from '../components/charts/RivalryPremiumChart'
import HoneymoonChart from '../components/charts/HoneymoonChart'
import DistanceChart from '../components/charts/DistanceChart'
import MarketSizeChart from '../components/charts/MarketSizeChart'
import OnFieldSuccessChart from '../components/charts/OnFieldSuccessChart'

// Same order as EffectSizeChart (ranked by |coefficient|, largest first) so
// the mega toggle right above the bar chart previews the exact order the
// chart itself will show.
const FEATURE_TABS = [
  {
    tabLabel: 'Rivalry',
    effectNote: '+57% attendance',
    significant: true,
    chart: <RivalryPremiumChart />,
    claim: "Rivalries sell tickets that standings don't.",
    points: [
      "Cascadia rivalry games hosted in Seattle draw +3,356 fans over the team's own season baseline.",
      'In the full OLS regression, a rivalry flag is the strongest tested feature, leading to a +57% in attendance (p=0.007).',
    ],
  },
  {
    tabLabel: 'New Stadium',
    effectNote: '+6% attendance, not significant',
    significant: false,
    chart: <HoneymoonChart />,
    claim: "Every relocated team got a honeymoon bump, but the regression can't confirm the stadium caused it.",
    points: [
      'Five teams moved into a new venue since 2021 and all saw an attendance jump.',
      'Gains ranged from +31% (Kansas City) to +166% (Gotham FC).',
      "In the full OLS regression, a new-stadium flag is worth an estimated +6% in attendance, not statistically distinguishable from zero (p=0.83).",
    ],
  },
  {
    tabLabel: 'Distance',
    effectNote: '−2% per mile, not significant',
    significant: false,
    chart: <DistanceChart />,
    claim: 'Distance from downtown might matter, but less than the literature says, and less certainly too.',
    points: [
      'A study cited in our paper found NWSL attendance falls ~6.6% per mile of distance from downtown.',
      "In the full OLS regression, this project's own estimate is much smaller and just misses statistical significance (~2% per mile, p=0.09).",
      'Once rivalry, market size, and the rest of the model are accounted for, the Cascadia rivalry flag is the only factor that clears the p<.05 bar.',
    ],
  },
  {
    tabLabel: 'Market Size',
    effectNote: '−12%, not significant',
    significant: false,
    chart: <MarketSizeChart />,
    claim: "Market size barely moves the needle.",
    points: [
      'Metro population barely correlates with attendance in either league (NWSL r=0.05, n=16; MLS r=-0.19, n=30).',
      'NYC teams in both leagues draw fewer fans than teams in much smaller markets.',
      "In the full OLS regression, market size isn't statistically distinguishable from zero either (p=0.70).",
    ],
  },
  {
    tabLabel: 'On-Field Success',
    effectNote: '+22%, not significant',
    significant: false,
    chart: <OnFieldSuccessChart />,
    claim: "Winning doesn't reliably fill the stands.",
    points: [
      'Points-per-game correlates weakly with same-season attendance too (NWSL r=0.24, n=85; MLS r=0.17, n=261).',
      'In the full OLS regression, an extra point per game is worth an estimated +22% in attendance, but not statistically significant (p=0.11).',
    ],
  },
]

// The attendance/regression half of the findings -- everything the OLS model
// says about what moves ticket sales. Media/coverage growth is its own
// section (MediaSection) since it's a genuinely different dataset and story,
// not just a continuation of this one.
export default function AttendanceSection() {
  return (
    <section id="results" className="border-t border-[var(--color-line)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          index="04"
          title="Attendance is growing for the teams willing to invest"
          eyebrow="Findings: Attendance"
        />

        {/* Summary table — at-a-glance overview before the argument unfolds */}
        <div className="mb-14">
          <p className="font-mono-label text-xs text-[var(--color-primary)] mb-3">
            Table 1: attendance, away-draw lift &amp; capacity by team
          </p>
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen flex justify-center">
            <div className="w-full max-w-[1000px] px-6">
              <SummaryTable />
            </div>
          </div>
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

        {/* Synthesizing figure: every driver, ranked, in one image. Label +
            description follow the same purple-label / serif-description
            pattern as every FigureSpread below, so every figure on the page
            reads consistently regardless of whether it's wrapped in a
            component or laid out inline here. */}
        <div className="mb-14">
          <p className="font-mono-label text-[11px] text-[var(--color-accent)] mb-2">Figure 1</p>
          <p className="font-serif-heading text-xl font-semibold text-[var(--color-primary-deep)] leading-snug mb-3">
            OLS-Regression features ranked by how much they move attendance.
          </p>
          <EffectSizeChart />
        </div>

        {/* Mega toggle: every driver tested, one at a time, each with its own
            figure + evidence — the single entry point into Figures 1-5's worth
            of material that used to be five separate charts. Sits directly
            above the ranked bar chart it previews. */}
        <div>
          <p className="font-mono-label text-[11px] text-[var(--color-accent)] mb-2">Figure 2</p>
          <p className="font-serif-heading text-xl font-semibold text-[var(--color-primary-deep)] leading-snug mb-3">
            A deeper look at the model's features.
          </p>
          <FeatureExplorer tabs={FEATURE_TABS} />
        </div>
      </div>
    </section>
  )
}

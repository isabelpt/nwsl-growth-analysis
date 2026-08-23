import PitchMotif from '../components/PitchMotif'
import StatTile from '../components/StatTile'
import Tag from '../components/Tag'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-0 min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[var(--color-paper-alt)]"
    >
      <PitchMotif className="absolute inset-0 w-full h-full pointer-events-none -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="bg-[var(--color-paper)]/70 backdrop-blur-[1px] border border-[var(--color-line)] shadow-offset p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center">
            <p className="font-mono-label text-xs text-[var(--color-accent)] mb-4">
              Research project · attendance economics
            </p>
            <h1 className="font-serif-heading text-4xl md:text-5xl font-semibold leading-tight text-[var(--color-primary-deep)]">
              What Drives NWSL Attendance?
            </h1>
            <p className="font-mono-label text-xs text-[var(--color-primary)] mt-4">
              By Isabel Prado-Tucker
            </p>
            <p className="mt-5 text-base text-[var(--color-ink)]/80 leading-relaxed max-w-md">
              League-average home attendance nearly doubled in a decade — from
              5,711 in 2016 to 10,243 in 2025. A stadium-by-stadium look at
              what's actually filling those seats — and, benchmarked against
              MLS, what it says about a durable, women's-specific sports
              culture rather than a passing novelty.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#results"
                className="font-mono-label text-xs bg-[var(--color-primary)] text-white border border-[var(--color-primary-deep)] px-5 py-3 shadow-offset-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset"
              >
                See the results
              </a>
              <a
                href="#question"
                className="font-mono-label text-xs border border-[var(--color-primary)] text-[var(--color-primary)] px-5 py-3 transition-colors duration-150 hover:bg-[var(--color-primary)] hover:text-white"
              >
                Read the story
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <StatTile value="10,243" label="Avg. attendance, 2025" />
              <StatTile value="+1,096" label="Away-draw lift, Bay FC" />
              <StatTile value="100%" label="Capacity, KC Current" />
              <StatTile value="+4,097" label="Rivalry premium, Cascadia" />
            </div>
            <div className="border border-[var(--color-line)] bg-[var(--color-paper-alt)] p-5 shadow-offset-accent">
              <p className="font-mono-label text-[11px] text-[var(--color-primary)] mb-3">
                Methods used
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag>OLS regression</Tag>
                <Tag>Event-study design</Tag>
                <Tag>Topic modeling</Tag>
                <Tag>Peak detection</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

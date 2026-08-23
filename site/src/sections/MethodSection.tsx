import SectionHeading from '../components/SectionHeading'

const STEPS = [
  {
    step: '01',
    title: 'Clean & merge',
    text: 'Games, teams, and stadium tables from ASA and Wikipedia joined, with primary/secondary tenants identified for every shared venue.',
  },
  {
    step: '02',
    title: 'Feature engineering',
    text: "Points-per-game by team-season, a rivalry flag (Portland–Seattle), a new-stadium flag per relocation, distance from downtown, and each team's metro log-population.",
  },
  {
    step: '03',
    title: 'Linear & logistic regression',
    text: 'Log(attendance) regressed on team success, market size, rivalry, stadium age, and distance from downtown.',
  },
  {
    step: '04',
    title: 'Peak detection & topic modeling',
    text: 'Scipy peak-detection flags statistically significant coverage spikes; LDA topic tagging on 8,328 headlines shows which topics drive those spikes.',
  },
]

export default function MethodSection() {
  return (
    <section id="method" className="border-t border-[var(--color-line)] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="03" title="The Method" eyebrow="Approach" />
        <p className="max-w-2xl text-[var(--color-ink)]/85 leading-relaxed mb-10">
          Two independent pipelines: game-level attendance
          data (2016–2026, 2020 and 2021 excluded for COVID) feeds into the regression
          analysis, while 8,328 media headlines (2012–2026) feeds the
          coverage and topic analysis. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.step} className="border-l-2 border-[var(--color-accent)] pl-4">
              <p className="font-mono-label text-xs text-[var(--color-primary)] mb-2">{s.step}</p>
              <h3 className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)] mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-[var(--color-ink)]/75 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

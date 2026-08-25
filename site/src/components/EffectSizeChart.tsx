import { effectSizes } from '../data/effectSizes'

// A single ranked-bar chart that summarizes every driver tested against
// attendance in one image — the "whole story in one figure" for skimmers.
// Built with plain markup (not an exported PNG) so the underlying numbers
// in src/data/effectSizes.ts are easy to swap for the final model output.
//
// Bars are full-opacity + solid-bordered when the OLS coefficient is
// statistically significant (p < .05) and faded + hatched when it isn't —
// the model (see 03_stadiums_analyze.ipynb, cell 43) is fit for inference,
// so a driver's p-value matters as much as the size of its bar.
export default function EffectSizeChart() {
  const max = Math.max(...effectSizes.map((r) => Math.abs(r.effect)))

  return (
    <div className="bg-[var(--color-paper)] border border-[var(--color-line)] shadow-offset-sm p-6">
      <div className="space-y-4">
        {effectSizes.map((row) => {
          const widthPct = (Math.abs(row.effect) / max) * 100
          const positive = row.effect >= 0
          return (
            <div key={row.factor} className={row.significant ? undefined : 'opacity-60'}>
              <div className="flex items-baseline justify-between mb-1.5">
                <p className="text-sm font-medium text-[var(--color-ink)]">
                  {row.factor}
                  {row.note && (
                    <span className="font-mono-label text-[10px] text-[var(--color-accent)] ml-2">
                      {row.note}
                    </span>
                  )}
                </p>
                <p className="font-mono text-xs text-[var(--color-ink)]/70">
                  {positive ? '+' : ''}
                  {row.effect.toFixed(2)}
                  <span className="ml-1.5 text-[var(--color-ink)]/50">
                    {row.significant ? '(p < .05)' : `(p = ${row.pValue.toFixed(2)}, n.s.)`}
                  </span>
                </p>
              </div>
              <div className="h-3 bg-[var(--color-paper-alt)] border border-[var(--color-line)]">
                <div
                  className="h-full"
                  style={{
                    width: `${widthPct}%`,
                    backgroundColor: positive ? 'var(--color-primary)' : '#a5453c',
                    backgroundImage: row.significant
                      ? undefined
                      : 'repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 6px)',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
      <p className="font-mono-label text-[10px] text-[var(--color-ink)]/50 mt-5">
        OLS coefficients on log(attendance), full sample (n=94), ranked largest to smallest. Faded/hatched bars are not
        statistically distinguishable from zero.
      </p>
    </div>
  )
}

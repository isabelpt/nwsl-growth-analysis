import { effectSizes } from '../data/effectSizes'

// A single ranked-bar chart that summarizes every driver tested against
// attendance in one image — the "whole story in one figure" for skimmers.
// Built with plain markup (not an exported PNG) so the underlying numbers
// in src/data/effectSizes.ts are easy to swap for the final model output.
export default function EffectSizeChart() {
  const max = Math.max(...effectSizes.map((r) => Math.abs(r.effect)))

  return (
    <div className="bg-[var(--color-paper)] border border-[var(--color-line)] shadow-offset-sm p-6">
      <div className="space-y-4">
        {effectSizes.map((row) => {
          const widthPct = (Math.abs(row.effect) / max) * 100
          const positive = row.effect >= 0
          return (
            <div key={row.factor}>
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
                </p>
              </div>
              <div className="h-3 bg-[var(--color-paper-alt)] border border-[var(--color-line)]">
                <div
                  className="h-full"
                  style={{
                    width: `${widthPct}%`,
                    backgroundColor: positive ? 'var(--color-primary)' : '#a5453c',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
      <p className="font-mono-label text-[10px] text-[var(--color-ink)]/50 mt-5">
        Standardized effect on home attendance, ranked largest to smallest
      </p>
    </div>
  )
}

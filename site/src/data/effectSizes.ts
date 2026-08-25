// Coefficients from the log(attendance) OLS regression in
// 03_stadiums_analyze.ipynb (cell 43), fit with statsmodels on the full
// n=94 team-season sample (not a train/test split — this model is used for
// inference on each coefficient, not for predicting held-out attendance, so
// statsmodels.OLS replaces sklearn.LinearRegression here specifically
// because it reports the standard errors/p-values that back the
// `significant` flag below). Not standardized in the strict statistical
// sense — these are the model's raw coefficients on the log-attendance
// scale, which the `note` field converts to an approximate %-change in
// attendance for readability. Signs are meaningful: positive = raises
// attendance, negative = lowers it.
export type EffectSizeRow = {
  factor: string
  effect: number // coefficient, log-attendance scale
  pValue: number
  significant: boolean // p < .05, two-tailed
  note?: string
}

export const effectSizes: EffectSizeRow[] = [
  {
    factor: 'Rivalry matchup (Cascadia)',
    effect: 0.28,
    pValue: 0.044,
    significant: true,
    note: '~+33% attendance',
  },
  {
    factor: 'New stadium (post-relocation)',
    effect: 0.25,
    pValue: 0.079,
    significant: false,
    note: '~+28% attendance — marginal, p=0.08',
  },
  {
    factor: 'Market size (log metro population)',
    effect: -0.24,
    pValue: 0.157,
    significant: false,
    note: '~-21%, not significant',
  },
  {
    factor: 'On-field success (points/game)',
    effect: 0.11,
    pValue: 0.429,
    significant: false,
    note: '~+11%, not significant',
  },
  {
    factor: 'Distance from downtown',
    effect: -0.02,
    pValue: 0.005,
    significant: true,
    note: '~-2% per mile — far below the ~6.6%/mile cited in the lit. review',
  },
]

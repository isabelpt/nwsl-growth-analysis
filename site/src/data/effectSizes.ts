// Coefficients from the log(attendance) OLS regression in
// 03_stadiums_analyze.ipynb (cell 43), fit with statsmodels on the full
// n=1,005 team-game sample (not a train/test split, this model is used for
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
    effect: 0.45,
    pValue: 0.007,
    significant: true,
    note: '~+57% attendance',
  },
  {
    factor: 'On-field success (points/game)',
    effect: 0.2,
    pValue: 0.114,
    significant: false,
    note: '~+22%, not significant',
  },
  {
    factor: 'Market size (log metro population)',
    effect: -0.13,
    pValue: 0.699,
    significant: false,
    note: '~-12%, not significant',
  },
  {
    factor: 'New stadium (post-relocation)',
    effect: 0.06,
    pValue: 0.827,
    significant: false,
    note: '~+6%, not significant',
  },
  {
    factor: 'Distance from downtown',
    effect: -0.02,
    pValue: 0.093,
    significant: false,
    note: '~-2% per mile, not significant, though still below the ~6.6%/mile cited in the lit. review',
  },
]

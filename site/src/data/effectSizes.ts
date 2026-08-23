// Coefficients from the log(attendance) linear regression in
// 03_stadiums_analyze.ipynb (cell 41). Not standardized in the strict
// statistical sense — these are the model's raw coefficients on the
// log-attendance scale, which the `note` field converts to an
// approximate %-change in attendance for readability. Signs are
// meaningful: positive = raises attendance, negative = lowers it.
export type EffectSizeRow = {
  factor: string
  effect: number // coefficient, log-attendance scale
  note?: string
}

export const effectSizes: EffectSizeRow[] = [
  { factor: 'New stadium (post-relocation)', effect: 0.32, note: '~+38% attendance — honeymoon effect' },
  { factor: 'Rivalry matchup (Cascadia)', effect: 0.18, note: '~+19% attendance' },
  { factor: 'On-field success (points/game)', effect: 0.06, note: '~+6.5% per extra point/game' },
  { factor: 'Distance from downtown', effect: -0.02, note: '~-2% per mile' },
  { factor: 'Market size (log metro population)', effect: -0.17, note: '~-16%, and not significant — see below' },
]

// Points-per-game vs. average home attendance, one dot per NWSL team-season
// (2016-2025, 2020/2021 excluded, regular season only). `slope`/`intercept`
// are the bivariate OLS trend (fit_trend in the notebook); `r` is the
// Pearson correlation quoted in the site copy (r=0.24, n=85).
// Recomputed from data/processed/games_clean.csv, see
// code/03_stadiums_analyze.ipynb ("Does winning fill the stands?").
export type SuccessPoint = { team: string; season: number; ppg: number; attendance: number }
export type OnFieldSuccess = { slope: number; intercept: number; r: number; points: SuccessPoint[] }

export const onFieldSuccess: OnFieldSuccess = {
  "slope": 2646.1177991921386,
  "intercept": 4632.626525266664,
  "r": 0.24036689216667534,
  "points": [
    {
      "team": "Houston Dash",
      "season": 2016,
      "ppg": 1.1,
      "attendance": 5726
    },
    {
      "team": "Seattle Reign FC",
      "season": 2016,
      "ppg": 1.5,
      "attendance": 4602
    },
    {
      "team": "Chicago Stars FC",
      "season": 2016,
      "ppg": 1.65,
      "attendance": 3004
    },
    {
      "team": "Portland Thorns FC",
      "season": 2016,
      "ppg": 2.05,
      "attendance": 17230
    },
    {
      "team": "Orlando Pride",
      "season": 2016,
      "ppg": 0.95,
      "attendance": 8785
    },
    {
      "team": "Washington Spirit",
      "season": 2016,
      "ppg": 1.95,
      "attendance": 4193
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2016,
      "ppg": 1.3,
      "attendance": 2162
    },
    {
      "team": "Houston Dash",
      "season": 2017,
      "ppg": 1.0,
      "attendance": 4578
    },
    {
      "team": "Seattle Reign FC",
      "season": 2017,
      "ppg": 1.42,
      "attendance": 4037
    },
    {
      "team": "Chicago Stars FC",
      "season": 2017,
      "ppg": 1.62,
      "attendance": 3198
    },
    {
      "team": "Portland Thorns FC",
      "season": 2017,
      "ppg": 1.96,
      "attendance": 17694
    },
    {
      "team": "Orlando Pride",
      "season": 2017,
      "ppg": 1.67,
      "attendance": 6186
    },
    {
      "team": "Washington Spirit",
      "season": 2017,
      "ppg": 0.79,
      "attendance": 3491
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2017,
      "ppg": 1.38,
      "attendance": 2613
    },
    {
      "team": "North Carolina Courage",
      "season": 2017,
      "ppg": 2.04,
      "attendance": 5058
    },
    {
      "team": "Houston Dash",
      "season": 2018,
      "ppg": 1.33,
      "attendance": 3572
    },
    {
      "team": "Seattle Reign FC",
      "season": 2018,
      "ppg": 1.71,
      "attendance": 3824
    },
    {
      "team": "Chicago Stars FC",
      "season": 2018,
      "ppg": 1.54,
      "attendance": 4004
    },
    {
      "team": "Portland Thorns FC",
      "season": 2018,
      "ppg": 1.75,
      "attendance": 16745
    },
    {
      "team": "Orlando Pride",
      "season": 2018,
      "ppg": 1.25,
      "attendance": 4837
    },
    {
      "team": "Washington Spirit",
      "season": 2018,
      "ppg": 0.46,
      "attendance": 3892
    },
    {
      "team": "Utah Royals FC",
      "season": 2018,
      "ppg": 1.46,
      "attendance": 9466
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2018,
      "ppg": 0.38,
      "attendance": 2531
    },
    {
      "team": "North Carolina Courage",
      "season": 2018,
      "ppg": 2.38,
      "attendance": 6238
    },
    {
      "team": "Houston Dash",
      "season": 2019,
      "ppg": 1.08,
      "attendance": 4053
    },
    {
      "team": "Seattle Reign FC",
      "season": 2019,
      "ppg": 1.58,
      "attendance": 5213
    },
    {
      "team": "Chicago Stars FC",
      "season": 2019,
      "ppg": 1.83,
      "attendance": 5740
    },
    {
      "team": "Portland Thorns FC",
      "season": 2019,
      "ppg": 1.67,
      "attendance": 20098
    },
    {
      "team": "Orlando Pride",
      "season": 2019,
      "ppg": 0.67,
      "attendance": 5565
    },
    {
      "team": "Washington Spirit",
      "season": 2019,
      "ppg": 1.42,
      "attendance": 6105
    },
    {
      "team": "Utah Royals FC",
      "season": 2019,
      "ppg": 1.42,
      "attendance": 10774
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2019,
      "ppg": 0.83,
      "attendance": 3338
    },
    {
      "team": "North Carolina Courage",
      "season": 2019,
      "ppg": 2.04,
      "attendance": 6296
    },
    {
      "team": "Houston Dash",
      "season": 2022,
      "ppg": 1.5,
      "attendance": 6184
    },
    {
      "team": "Kansas City Current",
      "season": 2022,
      "ppg": 1.75,
      "attendance": 6984
    },
    {
      "team": "San Diego Wave FC",
      "season": 2022,
      "ppg": 1.46,
      "attendance": 8959
    },
    {
      "team": "Seattle Reign FC",
      "season": 2022,
      "ppg": 1.93,
      "attendance": 7350
    },
    {
      "team": "Chicago Stars FC",
      "season": 2022,
      "ppg": 1.46,
      "attendance": 4922
    },
    {
      "team": "Portland Thorns FC",
      "season": 2022,
      "ppg": 1.75,
      "attendance": 14212
    },
    {
      "team": "Orlando Pride",
      "season": 2022,
      "ppg": 0.86,
      "attendance": 3698
    },
    {
      "team": "Washington Spirit",
      "season": 2022,
      "ppg": 1.04,
      "attendance": 5134
    },
    {
      "team": "Racing Louisville FC",
      "season": 2022,
      "ppg": 1.04,
      "attendance": 5343
    },
    {
      "team": "Angel City FC",
      "season": 2022,
      "ppg": 1.18,
      "attendance": 14508
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2022,
      "ppg": 0.68,
      "attendance": 3912
    },
    {
      "team": "North Carolina Courage",
      "season": 2022,
      "ppg": 1.57,
      "attendance": 3984
    },
    {
      "team": "Houston Dash",
      "season": 2023,
      "ppg": 1.14,
      "attendance": 4742
    },
    {
      "team": "Kansas City Current",
      "season": 2023,
      "ppg": 1.39,
      "attendance": 10535
    },
    {
      "team": "San Diego Wave FC",
      "season": 2023,
      "ppg": 1.46,
      "attendance": 19589
    },
    {
      "team": "Seattle Reign FC",
      "season": 2023,
      "ppg": 1.64,
      "attendance": 12698
    },
    {
      "team": "Chicago Stars FC",
      "season": 2023,
      "ppg": 1.0,
      "attendance": 4371
    },
    {
      "team": "Portland Thorns FC",
      "season": 2023,
      "ppg": 1.5,
      "attendance": 18826
    },
    {
      "team": "Orlando Pride",
      "season": 2023,
      "ppg": 1.18,
      "attendance": 5493
    },
    {
      "team": "Washington Spirit",
      "season": 2023,
      "ppg": 1.39,
      "attendance": 9661
    },
    {
      "team": "Racing Louisville FC",
      "season": 2023,
      "ppg": 1.39,
      "attendance": 5770
    },
    {
      "team": "Angel City FC",
      "season": 2023,
      "ppg": 1.39,
      "attendance": 18153
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2023,
      "ppg": 1.5,
      "attendance": 5415
    },
    {
      "team": "North Carolina Courage",
      "season": 2023,
      "ppg": 1.57,
      "attendance": 4388
    },
    {
      "team": "Bay FC",
      "season": 2024,
      "ppg": 1.31,
      "attendance": 12619
    },
    {
      "team": "Houston Dash",
      "season": 2024,
      "ppg": 0.77,
      "attendance": 6194
    },
    {
      "team": "Kansas City Current",
      "season": 2024,
      "ppg": 2.12,
      "attendance": 11500
    },
    {
      "team": "San Diego Wave FC",
      "season": 2024,
      "ppg": 0.96,
      "attendance": 15460
    },
    {
      "team": "Seattle Reign FC",
      "season": 2024,
      "ppg": 0.88,
      "attendance": 7852
    },
    {
      "team": "Chicago Stars FC",
      "season": 2024,
      "ppg": 1.23,
      "attendance": 6618
    },
    {
      "team": "Portland Thorns FC",
      "season": 2024,
      "ppg": 1.31,
      "attendance": 16087
    },
    {
      "team": "Orlando Pride",
      "season": 2024,
      "ppg": 2.31,
      "attendance": 8403
    },
    {
      "team": "Washington Spirit",
      "season": 2024,
      "ppg": 2.15,
      "attendance": 12587
    },
    {
      "team": "Utah Royals FC",
      "season": 2024,
      "ppg": 0.96,
      "attendance": 9674
    },
    {
      "team": "Racing Louisville FC",
      "season": 2024,
      "ppg": 1.08,
      "attendance": 6521
    },
    {
      "team": "Angel City FC",
      "season": 2024,
      "ppg": 1.04,
      "attendance": 16571
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2024,
      "ppg": 2.15,
      "attendance": 10048
    },
    {
      "team": "North Carolina Courage",
      "season": 2024,
      "ppg": 1.5,
      "attendance": 6362
    },
    {
      "team": "Bay FC",
      "season": 2025,
      "ppg": 0.77,
      "attendance": 14823
    },
    {
      "team": "Houston Dash",
      "season": 2025,
      "ppg": 1.15,
      "attendance": 5451
    },
    {
      "team": "Kansas City Current",
      "season": 2025,
      "ppg": 2.5,
      "attendance": 11500
    },
    {
      "team": "San Diego Wave FC",
      "season": 2025,
      "ppg": 1.42,
      "attendance": 13427
    },
    {
      "team": "Seattle Reign FC",
      "season": 2025,
      "ppg": 1.5,
      "attendance": 7248
    },
    {
      "team": "Chicago Stars FC",
      "season": 2025,
      "ppg": 0.77,
      "attendance": 5401
    },
    {
      "team": "Portland Thorns FC",
      "season": 2025,
      "ppg": 1.54,
      "attendance": 15914
    },
    {
      "team": "Orlando Pride",
      "season": 2025,
      "ppg": 1.54,
      "attendance": 8985
    },
    {
      "team": "Washington Spirit",
      "season": 2025,
      "ppg": 1.69,
      "attendance": 15934
    },
    {
      "team": "Utah Royals FC",
      "season": 2025,
      "ppg": 0.96,
      "attendance": 8727
    },
    {
      "team": "Racing Louisville FC",
      "season": 2025,
      "ppg": 1.42,
      "attendance": 5521
    },
    {
      "team": "Angel City FC",
      "season": 2025,
      "ppg": 1.04,
      "attendance": 12344
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2025,
      "ppg": 1.38,
      "attendance": 8892
    },
    {
      "team": "North Carolina Courage",
      "season": 2025,
      "ppg": 1.35,
      "attendance": 7684
    }
  ]
}

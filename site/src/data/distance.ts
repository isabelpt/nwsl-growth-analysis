// Distance from each team's stadium to its metro's downtown (haversine miles)
// vs. average home attendance, one dot per NWSL team-season. The literature
// this tests against (cited in the paper) found ~6.6% attendance loss per
// mile; this raw bivariate view is the sense check the multivariate
// regression coefficient is built on. See code/03_stadiums_analyze.ipynb
// ("Testing the literature claim directly").
export type DistancePoint = { team: string; season: number; distMiles: number; attendance: number }
export type Distance = { slope: number; intercept: number; r: number; points: DistancePoint[] }

export const distance: Distance = {
  "slope": -252.86906680841741,
  "intercept": 10025.793813072136,
  "r": -0.40384080599557404,
  "points": [
    {
      "team": "Houston Dash",
      "season": 2016,
      "distMiles": 1.19,
      "attendance": 5726
    },
    {
      "team": "Seattle Reign FC",
      "season": 2016,
      "distMiles": 1.0,
      "attendance": 4602
    },
    {
      "team": "Chicago Stars FC",
      "season": 2016,
      "distMiles": 11.99,
      "attendance": 3004
    },
    {
      "team": "Portland Thorns FC",
      "season": 2016,
      "distMiles": 0.77,
      "attendance": 17230
    },
    {
      "team": "Orlando Pride",
      "season": 2016,
      "distMiles": 1.45,
      "attendance": 8785
    },
    {
      "team": "Washington Spirit",
      "season": 2016,
      "distMiles": 22.55,
      "attendance": 4193
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2016,
      "distMiles": 27.5,
      "attendance": 2162
    },
    {
      "team": "Houston Dash",
      "season": 2017,
      "distMiles": 1.19,
      "attendance": 4578
    },
    {
      "team": "Seattle Reign FC",
      "season": 2017,
      "distMiles": 1.0,
      "attendance": 4037
    },
    {
      "team": "Chicago Stars FC",
      "season": 2017,
      "distMiles": 11.99,
      "attendance": 3198
    },
    {
      "team": "Portland Thorns FC",
      "season": 2017,
      "distMiles": 0.77,
      "attendance": 17694
    },
    {
      "team": "Orlando Pride",
      "season": 2017,
      "distMiles": 0.66,
      "attendance": 6186
    },
    {
      "team": "Washington Spirit",
      "season": 2017,
      "distMiles": 22.55,
      "attendance": 3491
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2017,
      "distMiles": 27.5,
      "attendance": 2613
    },
    {
      "team": "North Carolina Courage",
      "season": 2017,
      "distMiles": 6.57,
      "attendance": 5058
    },
    {
      "team": "Houston Dash",
      "season": 2018,
      "distMiles": 1.19,
      "attendance": 3572
    },
    {
      "team": "Seattle Reign FC",
      "season": 2018,
      "distMiles": 1.0,
      "attendance": 3824
    },
    {
      "team": "Chicago Stars FC",
      "season": 2018,
      "distMiles": 11.99,
      "attendance": 4004
    },
    {
      "team": "Portland Thorns FC",
      "season": 2018,
      "distMiles": 0.77,
      "attendance": 16745
    },
    {
      "team": "Orlando Pride",
      "season": 2018,
      "distMiles": 0.66,
      "attendance": 4837
    },
    {
      "team": "Washington Spirit",
      "season": 2018,
      "distMiles": 22.55,
      "attendance": 3892
    },
    {
      "team": "Utah Royals FC",
      "season": 2018,
      "distMiles": 12.29,
      "attendance": 9466
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2018,
      "distMiles": 27.5,
      "attendance": 2531
    },
    {
      "team": "North Carolina Courage",
      "season": 2018,
      "distMiles": 6.57,
      "attendance": 6238
    },
    {
      "team": "Houston Dash",
      "season": 2019,
      "distMiles": 1.19,
      "attendance": 4053
    },
    {
      "team": "Seattle Reign FC",
      "season": 2019,
      "distMiles": 26.57,
      "attendance": 5213
    },
    {
      "team": "Chicago Stars FC",
      "season": 2019,
      "distMiles": 11.99,
      "attendance": 5740
    },
    {
      "team": "Portland Thorns FC",
      "season": 2019,
      "distMiles": 0.77,
      "attendance": 20098
    },
    {
      "team": "Orlando Pride",
      "season": 2019,
      "distMiles": 0.66,
      "attendance": 5565
    },
    {
      "team": "Washington Spirit",
      "season": 2019,
      "distMiles": 22.55,
      "attendance": 6105
    },
    {
      "team": "Utah Royals FC",
      "season": 2019,
      "distMiles": 12.29,
      "attendance": 10774
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2019,
      "distMiles": 27.5,
      "attendance": 3338
    },
    {
      "team": "North Carolina Courage",
      "season": 2019,
      "distMiles": 6.57,
      "attendance": 6296
    },
    {
      "team": "Houston Dash",
      "season": 2022,
      "distMiles": 1.19,
      "attendance": 6184
    },
    {
      "team": "Kansas City Current",
      "season": 2022,
      "distMiles": 13.08,
      "attendance": 6984
    },
    {
      "team": "San Diego Wave FC",
      "season": 2022,
      "distMiles": 5.66,
      "attendance": 8959
    },
    {
      "team": "Seattle Reign FC",
      "season": 2022,
      "distMiles": 0.76,
      "attendance": 7350
    },
    {
      "team": "Chicago Stars FC",
      "season": 2022,
      "distMiles": 11.99,
      "attendance": 4922
    },
    {
      "team": "Portland Thorns FC",
      "season": 2022,
      "distMiles": 0.77,
      "attendance": 14212
    },
    {
      "team": "Orlando Pride",
      "season": 2022,
      "distMiles": 0.66,
      "attendance": 3698
    },
    {
      "team": "Washington Spirit",
      "season": 2022,
      "distMiles": 3.0,
      "attendance": 5134
    },
    {
      "team": "Racing Louisville FC",
      "season": 2022,
      "distMiles": 2.99,
      "attendance": 5343
    },
    {
      "team": "Angel City FC",
      "season": 2022,
      "distMiles": 3.6,
      "attendance": 14508
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2022,
      "distMiles": 7.73,
      "attendance": 3912
    },
    {
      "team": "North Carolina Courage",
      "season": 2022,
      "distMiles": 6.57,
      "attendance": 3984
    },
    {
      "team": "Houston Dash",
      "season": 2023,
      "distMiles": 1.19,
      "attendance": 4742
    },
    {
      "team": "Kansas City Current",
      "season": 2023,
      "distMiles": 13.08,
      "attendance": 10535
    },
    {
      "team": "San Diego Wave FC",
      "season": 2023,
      "distMiles": 5.24,
      "attendance": 19589
    },
    {
      "team": "Seattle Reign FC",
      "season": 2023,
      "distMiles": 0.76,
      "attendance": 12698
    },
    {
      "team": "Chicago Stars FC",
      "season": 2023,
      "distMiles": 11.99,
      "attendance": 4371
    },
    {
      "team": "Portland Thorns FC",
      "season": 2023,
      "distMiles": 0.77,
      "attendance": 18826
    },
    {
      "team": "Orlando Pride",
      "season": 2023,
      "distMiles": 0.66,
      "attendance": 5493
    },
    {
      "team": "Washington Spirit",
      "season": 2023,
      "distMiles": 3.0,
      "attendance": 9661
    },
    {
      "team": "Racing Louisville FC",
      "season": 2023,
      "distMiles": 2.99,
      "attendance": 5770
    },
    {
      "team": "Angel City FC",
      "season": 2023,
      "distMiles": 3.6,
      "attendance": 18153
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2023,
      "distMiles": 7.73,
      "attendance": 5415
    },
    {
      "team": "North Carolina Courage",
      "season": 2023,
      "distMiles": 6.57,
      "attendance": 4388
    },
    {
      "team": "Bay FC",
      "season": 2024,
      "distMiles": 2.31,
      "attendance": 12619
    },
    {
      "team": "Houston Dash",
      "season": 2024,
      "distMiles": 1.19,
      "attendance": 6194
    },
    {
      "team": "Kansas City Current",
      "season": 2024,
      "distMiles": 1.51,
      "attendance": 11500
    },
    {
      "team": "San Diego Wave FC",
      "season": 2024,
      "distMiles": 5.24,
      "attendance": 15460
    },
    {
      "team": "Seattle Reign FC",
      "season": 2024,
      "distMiles": 0.76,
      "attendance": 7852
    },
    {
      "team": "Chicago Stars FC",
      "season": 2024,
      "distMiles": 11.99,
      "attendance": 6618
    },
    {
      "team": "Portland Thorns FC",
      "season": 2024,
      "distMiles": 0.77,
      "attendance": 16087
    },
    {
      "team": "Orlando Pride",
      "season": 2024,
      "distMiles": 0.66,
      "attendance": 8403
    },
    {
      "team": "Washington Spirit",
      "season": 2024,
      "distMiles": 3.0,
      "attendance": 12587
    },
    {
      "team": "Utah Royals FC",
      "season": 2024,
      "distMiles": 12.29,
      "attendance": 9674
    },
    {
      "team": "Racing Louisville FC",
      "season": 2024,
      "distMiles": 2.99,
      "attendance": 6521
    },
    {
      "team": "Angel City FC",
      "season": 2024,
      "distMiles": 3.6,
      "attendance": 16571
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2024,
      "distMiles": 7.73,
      "attendance": 10048
    },
    {
      "team": "North Carolina Courage",
      "season": 2024,
      "distMiles": 6.57,
      "attendance": 6362
    },
    {
      "team": "Bay FC",
      "season": 2025,
      "distMiles": 2.31,
      "attendance": 14823
    },
    {
      "team": "Houston Dash",
      "season": 2025,
      "distMiles": 1.19,
      "attendance": 5451
    },
    {
      "team": "Kansas City Current",
      "season": 2025,
      "distMiles": 1.51,
      "attendance": 11500
    },
    {
      "team": "San Diego Wave FC",
      "season": 2025,
      "distMiles": 5.24,
      "attendance": 13427
    },
    {
      "team": "Seattle Reign FC",
      "season": 2025,
      "distMiles": 0.76,
      "attendance": 7248
    },
    {
      "team": "Chicago Stars FC",
      "season": 2025,
      "distMiles": 11.99,
      "attendance": 5401
    },
    {
      "team": "Portland Thorns FC",
      "season": 2025,
      "distMiles": 0.77,
      "attendance": 15914
    },
    {
      "team": "Orlando Pride",
      "season": 2025,
      "distMiles": 0.66,
      "attendance": 8985
    },
    {
      "team": "Washington Spirit",
      "season": 2025,
      "distMiles": 3.0,
      "attendance": 15934
    },
    {
      "team": "Utah Royals FC",
      "season": 2025,
      "distMiles": 12.29,
      "attendance": 8727
    },
    {
      "team": "Racing Louisville FC",
      "season": 2025,
      "distMiles": 2.99,
      "attendance": 5521
    },
    {
      "team": "Angel City FC",
      "season": 2025,
      "distMiles": 3.6,
      "attendance": 12344
    },
    {
      "team": "NJ/NY Gotham FC",
      "season": 2025,
      "distMiles": 7.73,
      "attendance": 8892
    },
    {
      "team": "North Carolina Courage",
      "season": 2025,
      "distMiles": 6.57,
      "attendance": 7684
    }
  ]
}

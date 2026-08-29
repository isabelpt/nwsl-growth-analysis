// Metro population (hand-built lookup, ~2023 Census MSA estimates, log10-
// scaled) vs. 2025 avg. home attendance (2026 partial for the two brand-new
// expansion teams). `r` matches the site copy (NWSL r=0.05, n=16).
// See code/03_stadiums_analyze.ipynb ("Market size vs. attendance").
export type MarketPoint = {
  team: string
  metroPopulationMillions: number
  logPop: number
  avgAttendance: number
  dataBasis: string
}
export type MarketSize = { slope: number; intercept: number; r: number; points: MarketPoint[] }

export const marketSize: MarketSize = {
  "slope": 559.5360962453913,
  "intercept": 10415.261390120748,
  "r": 0.046793751335890504,
  "points": [
    {
      "team": "Orlando Pride",
      "metroPopulationMillions": 2.7,
      "logPop": 0.43136376415898736,
      "avgAttendance": 8985,
      "dataBasis": "2025"
    },
    {
      "team": "NJ/NY Gotham FC",
      "metroPopulationMillions": 19.5,
      "logPop": 1.290034611362518,
      "avgAttendance": 8892,
      "dataBasis": "2025"
    },
    {
      "team": "Houston Dash",
      "metroPopulationMillions": 7.3,
      "logPop": 0.8633228601204559,
      "avgAttendance": 5451,
      "dataBasis": "2025"
    },
    {
      "team": "Washington Spirit",
      "metroPopulationMillions": 6.3,
      "logPop": 0.7993405494535817,
      "avgAttendance": 15934,
      "dataBasis": "2025"
    },
    {
      "team": "Seattle Reign FC",
      "metroPopulationMillions": 4.0,
      "logPop": 0.6020599913279624,
      "avgAttendance": 7248,
      "dataBasis": "2025"
    },
    {
      "team": "Chicago Stars FC",
      "metroPopulationMillions": 9.4,
      "logPop": 0.9731278535996987,
      "avgAttendance": 5401,
      "dataBasis": "2025"
    },
    {
      "team": "Portland Thorns FC",
      "metroPopulationMillions": 2.5,
      "logPop": 0.3979400086720376,
      "avgAttendance": 15914,
      "dataBasis": "2025"
    },
    {
      "team": "North Carolina Courage",
      "metroPopulationMillions": 1.5,
      "logPop": 0.17609125905568124,
      "avgAttendance": 7684,
      "dataBasis": "2025"
    },
    {
      "team": "Utah Royals FC",
      "metroPopulationMillions": 1.26,
      "logPop": 0.10037054511756291,
      "avgAttendance": 8727,
      "dataBasis": "2025"
    },
    {
      "team": "Kansas City Current",
      "metroPopulationMillions": 2.19,
      "logPop": 0.34044411484011833,
      "avgAttendance": 11500,
      "dataBasis": "2025"
    },
    {
      "team": "Racing Louisville FC",
      "metroPopulationMillions": 1.37,
      "logPop": 0.1367205671564068,
      "avgAttendance": 5521,
      "dataBasis": "2025"
    },
    {
      "team": "San Diego Wave FC",
      "metroPopulationMillions": 3.3,
      "logPop": 0.5185139398778874,
      "avgAttendance": 13427,
      "dataBasis": "2025"
    },
    {
      "team": "Angel City FC",
      "metroPopulationMillions": 13.0,
      "logPop": 1.1139433523068367,
      "avgAttendance": 12344,
      "dataBasis": "2025"
    },
    {
      "team": "Bay FC",
      "metroPopulationMillions": 9.0,
      "logPop": 0.9542425094393249,
      "avgAttendance": 14823,
      "dataBasis": "2025"
    },
    {
      "team": "Boston Legacy FC",
      "metroPopulationMillions": 4.9,
      "logPop": 0.6901960800285137,
      "avgAttendance": 10735,
      "dataBasis": "2026 (partial)"
    },
    {
      "team": "Denver Summit FC",
      "metroPopulationMillions": 2.98,
      "logPop": 0.4742162640762552,
      "avgAttendance": 19577,
      "dataBasis": "2026 (partial)"
    }
  ]
}

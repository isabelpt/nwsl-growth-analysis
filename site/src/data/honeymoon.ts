// Season-by-season home attendance for the 5 NWSL teams that moved into a
// new venue, split on the move year (2020/2021 dropped; see
// code/03_stadiums_analyze.ipynb, "The new-stadium honeymoon effect").
// Recomputed from data/processed/games_clean.csv.
export type HoneymoonSeason = { season: number; attendance: number; afterMove: boolean }
export type HoneymoonTeam = {
  team: string
  venue: string
  moveYear: number
  beforeAvg: number
  afterAvg: number
  pctChange: number
  seasons: HoneymoonSeason[]
}

export const honeymoon: HoneymoonTeam[] = [
  {
    "team": "Kansas City Current",
    "venue": "CPKC Stadium",
    "moveYear": 2024,
    "beforeAvg": 8759,
    "afterAvg": 11500,
    "pctChange": 31.3,
    "seasons": [
      {
        "season": 2022,
        "attendance": 6984,
        "afterMove": false
      },
      {
        "season": 2023,
        "attendance": 10535,
        "afterMove": false
      },
      {
        "season": 2024,
        "attendance": 11500,
        "afterMove": true
      },
      {
        "season": 2025,
        "attendance": 11500,
        "afterMove": true
      }
    ]
  },
  {
    "team": "San Diego Wave FC",
    "venue": "Snapdragon Stadium",
    "moveYear": 2023,
    "beforeAvg": 8959,
    "afterAvg": 16159,
    "pctChange": 80.4,
    "seasons": [
      {
        "season": 2022,
        "attendance": 8959,
        "afterMove": false
      },
      {
        "season": 2023,
        "attendance": 19589,
        "afterMove": true
      },
      {
        "season": 2024,
        "attendance": 15460,
        "afterMove": true
      },
      {
        "season": 2025,
        "attendance": 13427,
        "afterMove": true
      }
    ]
  },
  {
    "team": "Seattle Reign FC",
    "venue": "Lumen Field",
    "moveYear": 2022,
    "beforeAvg": 4419,
    "afterAvg": 8787,
    "pctChange": 98.8,
    "seasons": [
      {
        "season": 2016,
        "attendance": 4602,
        "afterMove": false
      },
      {
        "season": 2017,
        "attendance": 4037,
        "afterMove": false
      },
      {
        "season": 2018,
        "attendance": 3824,
        "afterMove": false
      },
      {
        "season": 2019,
        "attendance": 5213,
        "afterMove": false
      },
      {
        "season": 2022,
        "attendance": 7350,
        "afterMove": true
      },
      {
        "season": 2023,
        "attendance": 12698,
        "afterMove": true
      },
      {
        "season": 2024,
        "attendance": 7852,
        "afterMove": true
      },
      {
        "season": 2025,
        "attendance": 7248,
        "afterMove": true
      }
    ]
  },
  {
    "team": "Washington Spirit",
    "venue": "Audi Field",
    "moveYear": 2021,
    "beforeAvg": 4420,
    "afterAvg": 10829,
    "pctChange": 145.0,
    "seasons": [
      {
        "season": 2016,
        "attendance": 4193,
        "afterMove": false
      },
      {
        "season": 2017,
        "attendance": 3491,
        "afterMove": false
      },
      {
        "season": 2018,
        "attendance": 3892,
        "afterMove": false
      },
      {
        "season": 2019,
        "attendance": 6105,
        "afterMove": false
      },
      {
        "season": 2022,
        "attendance": 5134,
        "afterMove": true
      },
      {
        "season": 2023,
        "attendance": 9661,
        "afterMove": true
      },
      {
        "season": 2024,
        "attendance": 12587,
        "afterMove": true
      },
      {
        "season": 2025,
        "attendance": 15934,
        "afterMove": true
      }
    ]
  },
  {
    "team": "NJ/NY Gotham FC",
    "venue": "Red Bull Arena",
    "moveYear": 2021,
    "beforeAvg": 2661,
    "afterAvg": 7067,
    "pctChange": 165.6,
    "seasons": [
      {
        "season": 2016,
        "attendance": 2162,
        "afterMove": false
      },
      {
        "season": 2017,
        "attendance": 2613,
        "afterMove": false
      },
      {
        "season": 2018,
        "attendance": 2531,
        "afterMove": false
      },
      {
        "season": 2019,
        "attendance": 3338,
        "afterMove": false
      },
      {
        "season": 2022,
        "attendance": 3912,
        "afterMove": true
      },
      {
        "season": 2023,
        "attendance": 5415,
        "afterMove": true
      },
      {
        "season": 2024,
        "attendance": 10048,
        "afterMove": true
      },
      {
        "season": 2025,
        "attendance": 8892,
        "afterMove": true
      }
    ]
  }
]

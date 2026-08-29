// Matchup-level "away lift": avg. attendance lift a visiting team gives a host,
// vs. that host's own same-season baseline, restricted to matchups with >=8
// meetings (60 of 219 possible pairings clear that bar). Top/bottom 10 by
// lift. Recomputed from data/processed/games_clean.csv -- see
// code/03_stadiums_analyze.ipynb ("Rivalry premium" section) for the source
// methodology this mirrors exactly.
export type RivalryMatchup = {
  matchup: string
  home: string
  away: string
  lift: number
  meetings: number
}

export const rivalryPremium: RivalryMatchup[] = [
  {
    "matchup": "Houston Dash @ Seattle Reign FC",
    "home": "Seattle Reign FC",
    "away": "Houston Dash",
    "lift": -2183,
    "meetings": 9
  },
  {
    "matchup": "NJ/NY Gotham FC @ Chicago Stars FC",
    "home": "Chicago Stars FC",
    "away": "NJ/NY Gotham FC",
    "lift": -1804,
    "meetings": 10
  },
  {
    "matchup": "Angel City FC @ Seattle Reign FC",
    "home": "Seattle Reign FC",
    "away": "Angel City FC",
    "lift": -1702,
    "meetings": 8
  },
  {
    "matchup": "Orlando Pride @ Portland Thorns FC",
    "home": "Portland Thorns FC",
    "away": "Orlando Pride",
    "lift": -1667,
    "meetings": 11
  },
  {
    "matchup": "Washington Spirit @ Chicago Stars FC",
    "home": "Chicago Stars FC",
    "away": "Washington Spirit",
    "lift": -1530,
    "meetings": 9
  },
  {
    "matchup": "North Carolina Courage @ NJ/NY Gotham FC",
    "home": "NJ/NY Gotham FC",
    "away": "North Carolina Courage",
    "lift": -1354,
    "meetings": 11
  },
  {
    "matchup": "Washington Spirit @ Orlando Pride",
    "home": "Orlando Pride",
    "away": "Washington Spirit",
    "lift": -1352,
    "meetings": 15
  },
  {
    "matchup": "Houston Dash @ NJ/NY Gotham FC",
    "home": "NJ/NY Gotham FC",
    "away": "Houston Dash",
    "lift": -1324,
    "meetings": 10
  },
  {
    "matchup": "Houston Dash @ Chicago Stars FC",
    "home": "Chicago Stars FC",
    "away": "Houston Dash",
    "lift": -1279,
    "meetings": 11
  },
  {
    "matchup": "North Carolina Courage @ Houston Dash",
    "home": "Houston Dash",
    "away": "North Carolina Courage",
    "lift": -1198,
    "meetings": 9
  },
  {
    "matchup": "NJ/NY Gotham FC @ Portland Thorns FC",
    "home": "Portland Thorns FC",
    "away": "NJ/NY Gotham FC",
    "lift": 1307,
    "meetings": 11
  },
  {
    "matchup": "North Carolina Courage @ Portland Thorns FC",
    "home": "Portland Thorns FC",
    "away": "North Carolina Courage",
    "lift": 1384,
    "meetings": 8
  },
  {
    "matchup": "Seattle Reign FC @ Chicago Stars FC",
    "home": "Chicago Stars FC",
    "away": "Seattle Reign FC",
    "lift": 1393,
    "meetings": 10
  },
  {
    "matchup": "Portland Thorns FC @ North Carolina Courage",
    "home": "North Carolina Courage",
    "away": "Portland Thorns FC",
    "lift": 1403,
    "meetings": 11
  },
  {
    "matchup": "Kansas City Current @ Houston Dash",
    "home": "Houston Dash",
    "away": "Kansas City Current",
    "lift": 1414,
    "meetings": 8
  },
  {
    "matchup": "Portland Thorns FC @ Chicago Stars FC",
    "home": "Chicago Stars FC",
    "away": "Portland Thorns FC",
    "lift": 1415,
    "meetings": 11
  },
  {
    "matchup": "Houston Dash @ Orlando Pride",
    "home": "Orlando Pride",
    "away": "Houston Dash",
    "lift": 1958,
    "meetings": 10
  },
  {
    "matchup": "San Diego Wave FC @ Portland Thorns FC",
    "home": "Portland Thorns FC",
    "away": "San Diego Wave FC",
    "lift": 1969,
    "meetings": 9
  },
  {
    "matchup": "Washington Spirit @ NJ/NY Gotham FC",
    "home": "NJ/NY Gotham FC",
    "away": "Washington Spirit",
    "lift": 2572,
    "meetings": 14
  },
  {
    "matchup": "Portland Thorns FC @ Seattle Reign FC",
    "home": "Seattle Reign FC",
    "away": "Portland Thorns FC",
    "lift": 3356,
    "meetings": 14
  }
]

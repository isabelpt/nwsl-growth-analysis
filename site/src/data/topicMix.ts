// LDA topic mix (4 topics) by publication year, 2012-2024, from 8,328 NWSL
// headlines. `counts` = raw article volume; `proportions` = share of that
// year's coverage. See data/processed/nwsl_topic_counts_by_year.csv,
// nwsl_topic_proportions_by_year.csv, and code/07_media_topic_modeling.ipynb.
export type TopicYear = {
  year: number
  total: number
  counts: Record<string, number>
  proportions: Record<string, number>
}
export type TopicMix = { topics: string[]; years: TopicYear[] }

export const topicMix: TopicMix = {
  "topics": [
    "Team/League Updates",
    "Coaching Updates & Controversies",
    "Schedules & Power Rankings",
    "How to Watch"
  ],
  "years": [
    {
      "year": 2012,
      "total": 20,
      "counts": {
        "Team/League Updates": 0,
        "Coaching Updates & Controversies": 6,
        "Schedules & Power Rankings": 4,
        "How to Watch": 10
      },
      "proportions": {
        "Team/League Updates": 0.0,
        "Coaching Updates & Controversies": 0.3,
        "Schedules & Power Rankings": 0.2,
        "How to Watch": 0.5
      }
    },
    {
      "year": 2013,
      "total": 308,
      "counts": {
        "Team/League Updates": 11,
        "Coaching Updates & Controversies": 78,
        "Schedules & Power Rankings": 68,
        "How to Watch": 151
      },
      "proportions": {
        "Team/League Updates": 0.0357142857142857,
        "Coaching Updates & Controversies": 0.2532467532467532,
        "Schedules & Power Rankings": 0.2207792207792207,
        "How to Watch": 0.4902597402597403
      }
    },
    {
      "year": 2014,
      "total": 343,
      "counts": {
        "Team/League Updates": 20,
        "Coaching Updates & Controversies": 92,
        "Schedules & Power Rankings": 64,
        "How to Watch": 167
      },
      "proportions": {
        "Team/League Updates": 0.0583090379008746,
        "Coaching Updates & Controversies": 0.2682215743440233,
        "Schedules & Power Rankings": 0.1865889212827988,
        "How to Watch": 0.4868804664723032
      }
    },
    {
      "year": 2015,
      "total": 509,
      "counts": {
        "Team/League Updates": 31,
        "Coaching Updates & Controversies": 162,
        "Schedules & Power Rankings": 104,
        "How to Watch": 212
      },
      "proportions": {
        "Team/League Updates": 0.0609037328094302,
        "Coaching Updates & Controversies": 0.3182711198428291,
        "Schedules & Power Rankings": 0.2043222003929273,
        "How to Watch": 0.4165029469548134
      }
    },
    {
      "year": 2016,
      "total": 604,
      "counts": {
        "Team/League Updates": 48,
        "Coaching Updates & Controversies": 179,
        "Schedules & Power Rankings": 100,
        "How to Watch": 277
      },
      "proportions": {
        "Team/League Updates": 0.0794701986754966,
        "Coaching Updates & Controversies": 0.2963576158940397,
        "Schedules & Power Rankings": 0.1655629139072847,
        "How to Watch": 0.4586092715231788
      }
    },
    {
      "year": 2017,
      "total": 469,
      "counts": {
        "Team/League Updates": 51,
        "Coaching Updates & Controversies": 108,
        "Schedules & Power Rankings": 92,
        "How to Watch": 218
      },
      "proportions": {
        "Team/League Updates": 0.1087420042643923,
        "Coaching Updates & Controversies": 0.2302771855010661,
        "Schedules & Power Rankings": 0.1961620469083155,
        "How to Watch": 0.464818763326226
      }
    },
    {
      "year": 2018,
      "total": 294,
      "counts": {
        "Team/League Updates": 23,
        "Coaching Updates & Controversies": 70,
        "Schedules & Power Rankings": 67,
        "How to Watch": 134
      },
      "proportions": {
        "Team/League Updates": 0.0782312925170068,
        "Coaching Updates & Controversies": 0.238095238095238,
        "Schedules & Power Rankings": 0.227891156462585,
        "How to Watch": 0.4557823129251701
      }
    },
    {
      "year": 2019,
      "total": 631,
      "counts": {
        "Team/League Updates": 86,
        "Coaching Updates & Controversies": 146,
        "Schedules & Power Rankings": 144,
        "How to Watch": 255
      },
      "proportions": {
        "Team/League Updates": 0.1362916006339144,
        "Coaching Updates & Controversies": 0.2313787638668779,
        "Schedules & Power Rankings": 0.2282091917591125,
        "How to Watch": 0.4041204437400951
      }
    },
    {
      "year": 2020,
      "total": 739,
      "counts": {
        "Team/League Updates": 99,
        "Coaching Updates & Controversies": 159,
        "Schedules & Power Rankings": 225,
        "How to Watch": 256
      },
      "proportions": {
        "Team/League Updates": 0.1339648173207036,
        "Coaching Updates & Controversies": 0.2151556156968876,
        "Schedules & Power Rankings": 0.3044654939106901,
        "How to Watch": 0.3464140730717185
      }
    },
    {
      "year": 2021,
      "total": 929,
      "counts": {
        "Team/League Updates": 91,
        "Coaching Updates & Controversies": 276,
        "Schedules & Power Rankings": 217,
        "How to Watch": 345
      },
      "proportions": {
        "Team/League Updates": 0.0979547900968783,
        "Coaching Updates & Controversies": 0.2970936490850376,
        "Schedules & Power Rankings": 0.2335844994617868,
        "How to Watch": 0.3713670613562971
      }
    },
    {
      "year": 2022,
      "total": 763,
      "counts": {
        "Team/League Updates": 75,
        "Coaching Updates & Controversies": 202,
        "Schedules & Power Rankings": 158,
        "How to Watch": 328
      },
      "proportions": {
        "Team/League Updates": 0.0982961992136304,
        "Coaching Updates & Controversies": 0.2647444298820445,
        "Schedules & Power Rankings": 0.2070773263433813,
        "How to Watch": 0.4298820445609436
      }
    },
    {
      "year": 2023,
      "total": 1232,
      "counts": {
        "Team/League Updates": 125,
        "Coaching Updates & Controversies": 222,
        "Schedules & Power Rankings": 429,
        "How to Watch": 456
      },
      "proportions": {
        "Team/League Updates": 0.1014610389610389,
        "Coaching Updates & Controversies": 0.1801948051948051,
        "Schedules & Power Rankings": 0.3482142857142857,
        "How to Watch": 0.3701298701298701
      }
    },
    {
      "year": 2024,
      "total": 1477,
      "counts": {
        "Team/League Updates": 134,
        "Coaching Updates & Controversies": 296,
        "Schedules & Power Rankings": 385,
        "How to Watch": 662
      },
      "proportions": {
        "Team/League Updates": 0.0907244414353419,
        "Coaching Updates & Controversies": 0.2004062288422478,
        "Schedules & Power Rankings": 0.2606635071090047,
        "How to Watch": 0.4482058226134055
      }
    }
  ]
}

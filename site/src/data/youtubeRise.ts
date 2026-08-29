// Yearly video-upload counts, NWSL's own channel vs. every independent
// women's-soccer channel combined (CBS Sports W Golazo, Just Women's
// Sports, No White Shorts, RE, The Women's Game), 2015-2025. `byChannel`
// backs the hover breakdown. `channelSnapshot` is each channel's current
// subscriber count (JWS 300K vs. NWSL 250K, matching the site copy).
// See data/processed/youtube_videos.csv, youtube_channels.csv.
export type YoutubeYear = { year: number; official: number; independentTotal: number; byChannel: Record<string, number> }
export type ChannelSnapshot = { channel: string; subscribers: number; created: string }
export type YoutubeRise = { officialChannel: string; years: YoutubeYear[]; channelSnapshot: ChannelSnapshot[] }

export const youtubeRise: YoutubeRise = {
  "officialChannel": "National Women's Soccer League",
  "years": [
    {
      "year": 2015,
      "official": 184,
      "independentTotal": 0,
      "byChannel": {
        "CBS Sports W Golazo": 0,
        "Just Women's Sports": 0,
        "No White Shorts": 0,
        "RE": 0,
        "The Women's Game": 0
      }
    },
    {
      "year": 2016,
      "official": 452,
      "independentTotal": 0,
      "byChannel": {
        "CBS Sports W Golazo": 0,
        "Just Women's Sports": 0,
        "No White Shorts": 0,
        "RE": 0,
        "The Women's Game": 0
      }
    },
    {
      "year": 2017,
      "official": 356,
      "independentTotal": 0,
      "byChannel": {
        "CBS Sports W Golazo": 0,
        "Just Women's Sports": 0,
        "No White Shorts": 0,
        "RE": 0,
        "The Women's Game": 0
      }
    },
    {
      "year": 2018,
      "official": 541,
      "independentTotal": 0,
      "byChannel": {
        "CBS Sports W Golazo": 0,
        "Just Women's Sports": 0,
        "No White Shorts": 0,
        "RE": 0,
        "The Women's Game": 0
      }
    },
    {
      "year": 2019,
      "official": 355,
      "independentTotal": 5,
      "byChannel": {
        "CBS Sports W Golazo": 0,
        "Just Women's Sports": 5,
        "No White Shorts": 0,
        "RE": 0,
        "The Women's Game": 0
      }
    },
    {
      "year": 2020,
      "official": 185,
      "independentTotal": 31,
      "byChannel": {
        "CBS Sports W Golazo": 0,
        "Just Women's Sports": 21,
        "No White Shorts": 0,
        "RE": 10,
        "The Women's Game": 0
      }
    },
    {
      "year": 2021,
      "official": 257,
      "independentTotal": 377,
      "byChannel": {
        "CBS Sports W Golazo": 271,
        "Just Women's Sports": 105,
        "No White Shorts": 0,
        "RE": 1,
        "The Women's Game": 0
      }
    },
    {
      "year": 2022,
      "official": 529,
      "independentTotal": 1412,
      "byChannel": {
        "CBS Sports W Golazo": 1186,
        "Just Women's Sports": 226,
        "No White Shorts": 0,
        "RE": 0,
        "The Women's Game": 0
      }
    },
    {
      "year": 2023,
      "official": 257,
      "independentTotal": 1722,
      "byChannel": {
        "CBS Sports W Golazo": 1261,
        "Just Women's Sports": 415,
        "No White Shorts": 0,
        "RE": 46,
        "The Women's Game": 0
      }
    },
    {
      "year": 2024,
      "official": 955,
      "independentTotal": 1733,
      "byChannel": {
        "CBS Sports W Golazo": 922,
        "Just Women's Sports": 332,
        "No White Shorts": 45,
        "RE": 155,
        "The Women's Game": 279
      }
    },
    {
      "year": 2025,
      "official": 748,
      "independentTotal": 2376,
      "byChannel": {
        "CBS Sports W Golazo": 889,
        "Just Women's Sports": 439,
        "No White Shorts": 88,
        "RE": 310,
        "The Women's Game": 650
      }
    }
  ],
  "channelSnapshot": [
    {
      "channel": "The Women's Game",
      "subscribers": 96000,
      "created": "2024-01-11"
    },
    {
      "channel": "National Women's Soccer League",
      "subscribers": 250000,
      "created": "2013-04-04"
    },
    {
      "channel": "RE",
      "subscribers": 56100,
      "created": "2020-03-27"
    },
    {
      "channel": "CBS Sports W Golazo",
      "subscribers": 80900,
      "created": "2021-06-25"
    },
    {
      "channel": "No White Shorts",
      "subscribers": 81700,
      "created": "2020-07-16"
    },
    {
      "channel": "Just Women's Sports",
      "subscribers": 300000,
      "created": "2019-05-05"
    }
  ]
}

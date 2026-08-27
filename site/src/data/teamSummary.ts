// Generated from output/nwsl_team_summary_table_full.csv, produced by the
// "Full team table: every active team, every dimension" section of 03_stadiums_analyze.ipynb.
// Re-run that notebook cell and copy its CSV output here to refresh these numbers.
// "Avg. season rank" = mean within-season finish by points-per-game (regular season, 2020
// excluded), ranked against every team that played that season (folded teams included).
export type TeamSummaryRow = {
  team: string
  yearsInLeague: number
  avgAttendance: number
  yoyPct: number | null
  shareOfLeaguePct: number | null
  capacityUtilizationPct: number | null
  awayDrawLift: number
  avgSeasonRank: number
  /** 2026 expansion team: first season in progress, no completed prior season. */
  partialSeason?: boolean
  /** <= 3 completed seasons: CAGR/YoY-style numbers rest on a small sample. */
  smallSample?: boolean
}

export const teamSummary: TeamSummaryRow[] = [
  { team: 'Washington Spirit', yearsInLeague: 11, avgAttendance: 7625, yoyPct: 26.6, shareOfLeaguePct: 13.1, capacityUtilizationPct: 79.7, awayDrawLift: 831, avgSeasonRank: 5.0 },
  { team: 'Portland Thorns FC', yearsInLeague: 11, avgAttendance: 17101, yoyPct: -1.1, shareOfLeaguePct: 11.4, capacityUtilizationPct: 63.1, awayDrawLift: 342, avgSeasonRank: 2.9 },
  { team: 'Bay FC', yearsInLeague: 3, avgAttendance: 13721, yoyPct: 17.5, shareOfLeaguePct: 9.9, capacityUtilizationPct: 82.3, awayDrawLift: 1096, avgSeasonRank: 11.0, smallSample: true },
  { team: 'San Diego Wave FC', yearsInLeague: 5, avgAttendance: 14359, yoyPct: -13.2, shareOfLeaguePct: 9.0, capacityUtilizationPct: 38.4, awayDrawLift: 789, avgSeasonRank: 6.6 },
  { team: 'Kansas City Current', yearsInLeague: 6, avgAttendance: 10130, yoyPct: 0.0, shareOfLeaguePct: 8.3, capacityUtilizationPct: 100.0, awayDrawLift: -737, avgSeasonRank: 4.0 },
  { team: 'Angel City FC', yearsInLeague: 5, avgAttendance: 15394, yoyPct: -25.5, shareOfLeaguePct: 8.2, capacityUtilizationPct: 56.1, awayDrawLift: 286, avgSeasonRank: 8.8 },
  { team: 'Orlando Pride', yearsInLeague: 11, avgAttendance: 6494, yoyPct: 6.9, shareOfLeaguePct: 7.4, capacityUtilizationPct: 35.2, awayDrawLift: -377, avgSeasonRank: 7.2 },
  { team: 'NJ/NY Gotham FC', yearsInLeague: 11, avgAttendance: 4864, yoyPct: -11.5, shareOfLeaguePct: 5.9, capacityUtilizationPct: 35.6, awayDrawLift: -152, avgSeasonRank: 6.1 },
  { team: 'Utah Royals FC', yearsInLeague: 9, avgAttendance: 9660, yoyPct: -9.8, shareOfLeaguePct: 5.8, capacityUtilizationPct: 43.2, awayDrawLift: -1048, avgSeasonRank: 7.2 },
  { team: 'North Carolina Courage', yearsInLeague: 10, avgAttendance: 5716, yoyPct: 20.8, shareOfLeaguePct: 5.1, capacityUtilizationPct: 76.8, awayDrawLift: -149, avgSeasonRank: 3.6 },
  { team: 'Seattle Reign FC', yearsInLeague: 11, avgAttendance: 6603, yoyPct: -7.7, shareOfLeaguePct: 4.8, capacityUtilizationPct: 18.8, awayDrawLift: 286, avgSeasonRank: 4.9 },
  { team: 'Racing Louisville FC', yearsInLeague: 6, avgAttendance: 5789, yoyPct: -15.3, shareOfLeaguePct: 3.7, capacityUtilizationPct: 36.1, awayDrawLift: -1378, avgSeasonRank: 8.6 },
  { team: 'Houston Dash', yearsInLeague: 11, avgAttendance: 5062, yoyPct: -12.0, shareOfLeaguePct: 3.6, capacityUtilizationPct: 24.7, awayDrawLift: -637, avgSeasonRank: 8.9 },
  { team: 'Chicago Stars FC', yearsInLeague: 11, avgAttendance: 4657, yoyPct: -18.4, shareOfLeaguePct: 3.6, capacityUtilizationPct: 45.0, awayDrawLift: 636, avgSeasonRank: 7.6 },
  { team: 'Denver Summit FC', yearsInLeague: 1, avgAttendance: 19577, yoyPct: null, shareOfLeaguePct: null, capacityUtilizationPct: null, awayDrawLift: 447, avgSeasonRank: 10.0, partialSeason: true },
  { team: 'Boston Legacy FC', yearsInLeague: 1, avgAttendance: 10735, yoyPct: null, shareOfLeaguePct: null, capacityUtilizationPct: null, awayDrawLift: -404, avgSeasonRank: 14.0, partialSeason: true },
]

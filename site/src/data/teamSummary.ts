// Sourced from output/nwsl_team_summary_table.csv (03_stadiums_analyze.ipynb).
// Trim / edit freely — this feeds the summary table in the Results section.
export type TeamSummaryRow = {
  team: string
  avgAttendance: number
  yoyPct: number
  shareOfLeaguePct: number
}

export const teamSummary: TeamSummaryRow[] = [
  { team: 'Washington Spirit', avgAttendance: 7625, yoyPct: 26.6, shareOfLeaguePct: 13.1 },
  { team: 'Portland Thorns FC', avgAttendance: 17101, yoyPct: -1.1, shareOfLeaguePct: 11.4 },
  { team: 'Bay FC', avgAttendance: 13721, yoyPct: 17.5, shareOfLeaguePct: 9.9 },
  { team: 'San Diego Wave FC', avgAttendance: 14359, yoyPct: -13.2, shareOfLeaguePct: 9.0 },
  { team: 'Kansas City Current', avgAttendance: 10130, yoyPct: 0.0, shareOfLeaguePct: 8.3 },
  { team: 'Angel City FC', avgAttendance: 15394, yoyPct: -25.5, shareOfLeaguePct: 8.2 },
  { team: 'Orlando Pride', avgAttendance: 6494, yoyPct: 6.9, shareOfLeaguePct: 7.4 },
  { team: 'NJ/NY Gotham FC', avgAttendance: 4864, yoyPct: -11.5, shareOfLeaguePct: 5.9 },
]

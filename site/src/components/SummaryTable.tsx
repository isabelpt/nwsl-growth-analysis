import { useMemo, useState } from 'react'
import { teamSummary, type TeamSummaryRow } from '../data/teamSummary'

type SortKey = keyof Pick<
  TeamSummaryRow,
  | 'team'
  | 'yearsInLeague'
  | 'avgAttendance'
  | 'yoyPct'
  | 'shareOfLeaguePct'
  | 'capacityUtilizationPct'
  | 'awayDrawLift'
  | 'avgSeasonRank'
>

type Column = {
  key: SortKey
  label: string
  align: 'left' | 'right'
  /** Lower-is-better metrics (like rank) should default to ascending on first click. */
  defaultAsc?: boolean
}

const columns: Column[] = [
  { key: 'team', label: 'Team', align: 'left', defaultAsc: true },
  { key: 'yearsInLeague', label: 'Years in league', align: 'right' },
  { key: 'avgAttendance', label: 'Avg. attendance', align: 'right' },
  { key: 'yoyPct', label: '2025 YoY %', align: 'right' },
  { key: 'shareOfLeaguePct', label: 'Share of league, 2025', align: 'right' },
  { key: 'capacityUtilizationPct', label: 'Capacity utilization, 2025', align: 'right' },
  { key: 'awayDrawLift', label: 'Away draw lift', align: 'right' },
  { key: 'avgSeasonRank', label: 'Avg. season rank', align: 'right', defaultAsc: true },
]

const th = 'font-mono-label text-[11px] font-medium text-[var(--color-primary)] px-4 py-3 whitespace-nowrap'
const td = 'px-4 py-3 text-right font-mono whitespace-nowrap'

function fmtPct(v: number | null, digits = 1) {
  if (v === null) return '—'
  return `${v >= 0 ? '+' : ''}${v.toFixed(digits)}%`
}

function pctColor(v: number | null) {
  if (v === null) return 'var(--color-primary)'
  return v >= 0 ? 'var(--color-primary)' : '#a5453c'
}

// Nulls always sort to the bottom, regardless of direction — an expansion team's missing
// YoY/share isn't "low", it's not-yet-meaningful.
function compare(a: TeamSummaryRow, b: TeamSummaryRow, key: SortKey, asc: boolean): number {
  const av = a[key]
  const bv = b[key]
  if (av === null && bv === null) return 0
  if (av === null) return 1
  if (bv === null) return -1
  if (typeof av === 'string' && typeof bv === 'string') {
    return asc ? av.localeCompare(bv) : bv.localeCompare(av)
  }
  const diff = (av as number) - (bv as number)
  return asc ? diff : -diff
}

export default function SummaryTable() {
  const [sortKey, setSortKey] = useState<SortKey>('shareOfLeaguePct')
  const [sortAsc, setSortAsc] = useState(false)

  const sorted = useMemo(
    () => [...teamSummary].sort((a, b) => compare(a, b, sortKey, sortAsc)),
    [sortKey, sortAsc],
  )

  function handleSort(col: Column) {
    if (col.key === sortKey) {
      setSortAsc((prev) => !prev)
    } else {
      setSortKey(col.key)
      setSortAsc(!!col.defaultAsc)
    }
  }

  return (
    <div className="border border-[var(--color-line)] bg-[var(--color-paper)] shadow-offset-sm overflow-x-auto">
      <table className="w-full text-sm border-collapse min-w-[980px]">
        <thead>
          <tr className="border-b border-[var(--color-line)] bg-[var(--color-paper-alt)]">
            {columns.map((col) => {
              const active = col.key === sortKey
              return (
                <th
                  key={col.key}
                  className={`${th} ${col.align === 'left' ? 'text-left' : 'text-right'} cursor-pointer select-none hover:text-[var(--color-primary-deep)]`}
                  onClick={() => handleSort(col)}
                  aria-sort={active ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                >
                  <span className={col.align === 'right' ? 'inline-flex items-center justify-end gap-1' : 'inline-flex items-center gap-1'}>
                    {col.label}
                    <span className={`text-[9px] ${active ? 'opacity-100' : 'opacity-25'}`}>
                      {active ? (sortAsc ? '▲' : '▼') : '▲▼'}
                    </span>
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr
              key={row.team}
              className={i !== sorted.length - 1 ? 'border-b border-[var(--color-line)]' : ''}
            >
              <td className="px-4 py-3 font-serif-heading text-[var(--color-primary-deep)] whitespace-nowrap">
                {row.team}
                {row.partialSeason || row.smallSample ? ' ★' : ''}
              </td>
              <td className={td}>{row.yearsInLeague}</td>
              <td className={td}>{row.avgAttendance.toLocaleString()}</td>
              <td className={td} style={{ color: pctColor(row.yoyPct) }}>
                {fmtPct(row.yoyPct)}
              </td>
              <td className={td}>{row.shareOfLeaguePct === null ? '—' : `${row.shareOfLeaguePct.toFixed(1)}%`}</td>
              <td className={td}>
                {row.capacityUtilizationPct === null ? '—' : `${row.capacityUtilizationPct.toFixed(0)}%`}
              </td>
              <td className={td} style={{ color: pctColor(row.awayDrawLift) }}>
                {row.awayDrawLift >= 0 ? '+' : ''}
                {row.awayDrawLift.toLocaleString()}
              </td>
              <td className={td}>{row.avgSeasonRank.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-4 py-2 text-xs text-[var(--color-primary)]/70 border-t border-[var(--color-line)]">
        Click a column header to sort. ★ small sample — either a 2026 expansion team in its
        first, partial season, or a team with ≤ 3 completed seasons — so YoY / share-of-league /
        capacity utilization (which need a completed prior season) may be blank or noisy.
      </p>
    </div>
  )
}

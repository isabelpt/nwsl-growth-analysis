import { teamSummary } from '../data/teamSummary'

export default function SummaryTable() {
  return (
    <div className="border border-[var(--color-line)] bg-[var(--color-paper)] shadow-offset-sm overflow-x-auto">
      <table className="w-full text-sm border-collapse min-w-[560px]">
        <thead>
          <tr className="border-b border-[var(--color-line)] bg-[var(--color-paper-alt)]">
            <th className="text-left font-mono-label text-[11px] font-medium text-[var(--color-primary)] px-4 py-3">
              Team
            </th>
            <th className="text-right font-mono-label text-[11px] font-medium text-[var(--color-primary)] px-4 py-3">
              Avg. attendance
            </th>
            <th className="text-right font-mono-label text-[11px] font-medium text-[var(--color-primary)] px-4 py-3">
              2025 YoY %
            </th>
            <th className="text-right font-mono-label text-[11px] font-medium text-[var(--color-primary)] px-4 py-3">
              Share of league %
            </th>
          </tr>
        </thead>
        <tbody>
          {teamSummary.map((row, i) => (
            <tr
              key={row.team}
              className={i !== teamSummary.length - 1 ? 'border-b border-[var(--color-line)]' : ''}
            >
              <td className="px-4 py-3 font-serif-heading text-[var(--color-primary-deep)]">{row.team}</td>
              <td className="px-4 py-3 text-right font-mono">{row.avgAttendance.toLocaleString()}</td>
              <td
                className="px-4 py-3 text-right font-mono"
                style={{ color: row.yoyPct >= 0 ? 'var(--color-primary)' : '#a5453c' }}
              >
                {row.yoyPct >= 0 ? '+' : ''}
                {row.yoyPct.toFixed(1)}%
              </td>
              <td className="px-4 py-3 text-right font-mono">{row.shareOfLeaguePct.toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

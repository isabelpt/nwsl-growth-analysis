import { marketSize } from '../../data/marketSize'
import ScatterTrendChart from './ScatterTrendChart'

const POP_TICKS_M = [1, 2, 5, 10, 20]

// Metro population (log10-scaled) vs. 2025 avg. home attendance.
export default function MarketSizeChart() {
  const { points, slope, intercept, r } = marketSize

  return (
    <ScatterTrendChart
      points={points.map((p) => ({
        x: p.logPop,
        y: p.avgAttendance,
        label: p.team,
        sub: `${p.metroPopulationMillions}M metro${p.dataBasis !== '2025' ? ` · ${p.dataBasis} attendance` : ''}`,
      }))}
      slope={slope}
      intercept={intercept}
      r={r}
      n={points.length}
      xDomain={[0, 1.35]}
      xTicks={POP_TICKS_M.map((m) => ({ at: Math.log10(m), label: `${m}M` }))}
      xAxisLabel="Metro population (log scale)"
      yAxisLabel="Avg. home attendance"
      xTooltipFormat={(x) => `${(10 ** x).toFixed(1)}M`}
    />
  )
}

import { onFieldSuccess } from '../../data/onFieldSuccess'
import ScatterTrendChart from './ScatterTrendChart'

// Points per game vs. average home attendance, one dot per NWSL team-season.
export default function OnFieldSuccessChart() {
  const { points, slope, intercept, r } = onFieldSuccess
  const maxPpg = Math.max(...points.map((p) => p.ppg))

  return (
    <ScatterTrendChart
      points={points.map((p) => ({ x: p.ppg, y: p.attendance, label: p.team, sub: `${p.season} season` }))}
      slope={slope}
      intercept={intercept}
      r={r}
      n={points.length}
      xDomain={[0, Math.ceil(maxPpg)]}
      xTicks={[0, 0.5, 1, 1.5, 2, 2.5].map((v) => ({ at: v, label: v.toFixed(1) }))}
      xAxisLabel="Points per game"
      yAxisLabel="Avg. home attendance"
      xTooltipFormat={(x) => x.toFixed(2)}
    />
  )
}

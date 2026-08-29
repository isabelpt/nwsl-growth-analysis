import { distance } from '../../data/distance'
import ScatterTrendChart from './ScatterTrendChart'

// Distance from downtown (miles) vs. average home attendance, one dot per
// NWSL team-season -- the raw bivariate check behind the regression's
// dist_miles coefficient.
export default function DistanceChart() {
  const { points, slope, intercept, r } = distance
  const maxDist = Math.max(...points.map((p) => p.distMiles))

  return (
    <ScatterTrendChart
      points={points.map((p) => ({ x: p.distMiles, y: p.attendance, label: p.team, sub: `${p.season} season` }))}
      slope={slope}
      intercept={intercept}
      r={r}
      n={points.length}
      xDomain={[0, Math.ceil(maxDist)]}
      xTicks={Array.from({ length: 5 }, (_, i) => {
        const v = (Math.ceil(maxDist) / 4) * i
        return { at: v, label: v.toFixed(0) }
      })}
      xAxisLabel="Distance from downtown (mi)"
      yAxisLabel="Avg. home attendance"
      xTooltipFormat={(x) => `${x.toFixed(1)} mi`}
    />
  )
}

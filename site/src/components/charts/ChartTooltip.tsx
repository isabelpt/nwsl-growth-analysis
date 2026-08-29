type ChartTooltipProps = {
  /** Position as a % of the chart's own wrapper, e.g. from an SVG viewBox coordinate. */
  xPct: number
  yPct: number
  visible: boolean
  children: React.ReactNode
}

// Shared hover tooltip for every SVG chart on the site. Positioned as a %
// of the nearest `relative` ancestor (each chart wraps its <svg> in one),
// so it tracks correctly regardless of how the SVG's viewBox scales to its
// rendered size. Flips toward the chart's interior near an edge so it never
// clips off the card.
export default function ChartTooltip({ xPct, yPct, visible, children }: ChartTooltipProps) {
  if (!visible) return null
  const flipX = xPct > 62
  const flipY = yPct < 18

  return (
    <div
      className="pointer-events-none absolute z-20 border border-[var(--color-primary-deep)] bg-[var(--color-paper)] shadow-offset-sm px-3 py-2 text-xs leading-snug font-sans text-[var(--color-ink)] max-w-[220px]"
      style={{
        left: `${xPct}%`,
        top: `${yPct}%`,
        transform: `translate(${flipX ? 'calc(-100% - 10px)' : '10px'}, ${flipY ? '10px' : 'calc(-100% - 10px)'})`,
      }}
    >
      {children}
    </div>
  )
}

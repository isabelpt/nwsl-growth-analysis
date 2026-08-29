import type { ReactNode } from 'react'

type ChartScrollFrameProps = {
  /** The chart's natural viewBox width in px -- the floor it won't shrink past. */
  minWidth: number
  children: ReactNode
  /** Rendered outside the horizontal-scroll clipping box (e.g. a hover
   *  tooltip). A tooltip placed in `children` instead can get its top edge
   *  sliced off: setting `overflow-x: auto` on a box forces its
   *  `overflow-y` to `auto` too (a box can't scroll one axis and stay
   *  `visible` on the other), so anything inside that overflows upward --
   *  a tooltip flipped above a data point near the top of a short chart --
   *  gets clipped instead of showing. `overlay` sits one level up, so it's
   *  never subject to that clipping. */
  overlay?: ReactNode
}

// Wraps a fixed-viewBox SVG chart so it scales down to fill any container
// wide enough (the desktop-width figure cards), but never shrinks its text
// past a legible floor. On a narrow mobile column, the chart renders at its
// natural size and scrolls horizontally instead of shrinking into
// unreadably tiny type -- viewBox-scaled SVG text has no minimum size of
// its own, so without this a 640-unit-wide chart squeezed into a 300px
// phone column renders ~9px labels at ~5px.
export default function ChartScrollFrame({ minWidth, children, overlay }: ChartScrollFrameProps) {
  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <div className="relative" style={{ minWidth }}>
          {children}
        </div>
      </div>
      {overlay}
    </div>
  )
}

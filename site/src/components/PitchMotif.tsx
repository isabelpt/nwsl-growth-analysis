// Decorative motif: a full soccer pitch outline (touchlines, halfway line,
// center circle, both penalty/six-yard boxes) filling the landing screen
// behind the hero content.
//
// Built from plain CSS-positioned shapes rather than one scaled SVG
// graphic. A single SVG drawn at a real pitch's aspect ratio (105:68) and
// scaled to "cover" a much taller/narrower container ends up center-cropped
// so hard that both touchlines and both penalty boxes fall outside the
// visible window — only the center circle survives. Percentage-based CSS
// boxes have no aspect ratio to preserve (a rectangle inset by a
// percentage is still a rectangle border at any container shape) and the
// circle uses aspect-ratio:1 so it can't be squashed into an ellipse
// either. Rendered faint, and the hero content sits on an opaque panel on
// top of it, so it never competes with the text.
export default function PitchMotif({ className = '' }: { className?: string }) {
  const line = 'var(--color-accent)'
  return (
    <div className={className} aria-hidden="true" style={{ opacity: 0.3 }}>
      {/* outer touchlines */}
      <div style={{ position: 'absolute', inset: '3% 2%', border: `3px solid ${line}` }} />
      {/* halfway line */}
      <div
        style={{
          position: 'absolute',
          top: '3%',
          bottom: '3%',
          left: '50%',
          width: 0,
          borderLeft: `3px solid ${line}`,
        }}
      />
      {/* center circle + spot */}
      <div
        className="pitch-circle"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(26vw, 32vh)',
          aspectRatio: '1 / 1',
          border: `3px solid ${line}`,
        }}
      />
      <div
        className="pitch-circle"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          backgroundColor: line,
        }}
      />
      {/* left penalty area + six-yard box */}
      <div style={{ position: 'absolute', top: '24%', bottom: '24%', left: '2%', width: '16%', border: `3px solid ${line}` }} />
      <div style={{ position: 'absolute', top: '38%', bottom: '38%', left: '2%', width: '6%', border: `3px solid ${line}` }} />
      {/* right penalty area + six-yard box */}
      <div style={{ position: 'absolute', top: '24%', bottom: '24%', right: '2%', width: '16%', border: `3px solid ${line}` }} />
      <div style={{ position: 'absolute', top: '38%', bottom: '38%', right: '2%', width: '6%', border: `3px solid ${line}` }} />
    </div>
  )
}

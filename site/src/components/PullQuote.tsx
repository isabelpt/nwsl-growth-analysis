// A mid-section break -- marks a shift in subject (e.g. attendance findings
// giving way to media-coverage findings) the way a chapter title would, not
// a quoted aside. A top rule (the same divider every <section> already uses)
// instead of a blockquote's left border, and set at title size/weight so it
// reads as a heading you'd skim for, not a pull-quote you'd skip past.
export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-16 pt-10 border-t border-[var(--color-line)]">
      <h3 className="font-serif-heading text-3xl md:text-4xl font-semibold leading-snug text-[var(--color-primary-deep)]">
        {children}
      </h3>
    </div>
  )
}

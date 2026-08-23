export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-[var(--color-accent)] pl-6 py-2 my-14">
      <p className="font-serif-heading text-2xl md:text-3xl font-semibold leading-snug text-[var(--color-primary-deep)]">
        {children}
      </p>
    </blockquote>
  )
}

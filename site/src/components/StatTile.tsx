export default function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-[var(--color-line)] bg-[var(--color-paper-alt)] p-4">
      <p className="font-serif-heading text-2xl md:text-3xl font-semibold text-[var(--color-primary-deep)]">
        {value}
      </p>
      <p className="font-mono-label text-[11px] text-[var(--color-primary)] mt-1">{label}</p>
    </div>
  )
}

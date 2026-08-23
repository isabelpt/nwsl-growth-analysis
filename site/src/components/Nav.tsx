import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#question', label: 'Question' },
  { href: '#data', label: 'Data' },
  { href: '#method', label: 'Method' },
  { href: '#results', label: 'Results' },
  { href: '#takeaway', label: 'Takeaway' },
]

export default function Nav() {
  const [active, setActive] = useState<string>('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
          setActive(`#${topMost.target.id}`)
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))

    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      setProgress(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif-heading text-lg font-semibold text-[var(--color-primary-deep)]">
          NWSL Attendance
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono-label text-xs transition-colors"
                style={{
                  color: active === link.href ? 'var(--color-primary)' : 'var(--color-ink)',
                  borderBottom: active === link.href ? '2px solid var(--color-accent)' : '2px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-[2px] bg-[var(--color-line)]">
        <div
          className="h-full bg-[var(--color-accent)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  )
}

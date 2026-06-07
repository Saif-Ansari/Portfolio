import { useState, useEffect } from 'react'
import './Navbar.css'

// ─── Paste your Google Drive / Dropbox share URL here ────────────────────────
const RESUME_URL = 'https://drive.google.com/file/d/1nOFZRbTUAbdFNefIUhQHoBrZ8lEB_iOY/view?usp=sharing'
// ─────────────────────────────────────────────────────────────────────────────

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const el = document.documentElement
      const scrollHeight = el.scrollHeight - el.clientHeight
      setProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionEls = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sectionEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">Saif Ansari</div>

      <ul className="navbar__links">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className={activeSection === l.href ? 'active' : ''}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__resume"
        aria-label="View resume"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Resume
      </a>

      <button
        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={handleNavClick}
              className={activeSection === l.href ? 'active' : ''}
            >
              {l.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="navbar__mobile-resume"
          >
            Download Resume
          </a>
        </div>
      )}

      <div
        className="navbar__progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </nav>
  )
}

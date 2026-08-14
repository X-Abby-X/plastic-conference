import { useEffect, useState } from 'react'
import conferenceLogo from './problem-statement/conf_logo_text.png'

function NavArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function ConferenceNav({ current = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`conference-nav ${menuOpen ? 'conference-nav-menu-open' : ''}`}>
      <a className="conference-brand" href="#top" aria-label="UofT Microplastics Conference home" onClick={closeMenu}>
        <img className="conference-brand-logo" src={conferenceLogo} alt="UofT Microplastics Conference 2026" />
      </a>

      <nav className={`conference-nav-menu ${menuOpen ? 'is-open' : ''}`} id="conference-navigation" aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#/problem" onClick={closeMenu} aria-current={current === 'problem' ? 'page' : undefined}>The Problem</a>
        <a href="#program" onClick={closeMenu}>Program</a>
        <a href="#call-for-abstracts" onClick={closeMenu}>Call for Abstracts</a>
        <a href="#partners" onClick={closeMenu}>Partners</a>
        <a href="#tickets" onClick={closeMenu}>Tickets</a>
        <a className="conference-mobile-register" href="https://forms.gle/rAeggWcDE7nuEp6QA" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          Register <NavArrow />
        </a>
      </nav>

      <a
        className="conference-nav-cta"
        href="https://forms.gle/rAeggWcDE7nuEp6QA"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register <NavArrow />
      </a>

      <button
        className="conference-menu-toggle"
        type="button"
        aria-controls="conference-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

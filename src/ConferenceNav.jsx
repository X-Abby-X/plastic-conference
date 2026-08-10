import conferenceLogo from './problem-statement/conf_logo_text.png'

function NavArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function ConferenceNav({ current = 'home' }) {
  return (
    <header className="conference-nav">
      <a className="conference-brand" href="#top" aria-label="UofT Microplastics Conference home">
        <img className="conference-brand-logo" src={conferenceLogo} alt="UofT Microplastics Conference 2026" />
      </a>

      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#/problem" aria-current={current === 'problem' ? 'page' : undefined}>The Problem</a>
        <a href="#program">Program</a>
        <a href="#partners">Partners</a>
        <a href="#tickets">Tickets</a>
      </nav>

      <a
        className="conference-nav-cta"
        href="https://forms.gle/rAeggWcDE7nuEp6QA"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register <NavArrow />
      </a>
    </header>
  )
}

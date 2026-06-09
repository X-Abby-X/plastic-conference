const sessions = [
  {
    time: '09:30',
    title: 'Designing waste out of the system',
    type: 'Keynote',
  },
  {
    time: '11:00',
    title: 'Materials that can make a second life',
    type: 'Panel',
  },
  {
    time: '14:00',
    title: 'Building local loops at global scale',
    type: 'Workshop',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Plastic Conference home">
          <span className="brand-mark">P/C</span>
          <span>Plastic Conference</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#program">Program</a>
          <a href="#tickets">Tickets</a>
        </nav>
        <a className="nav-cta" href="#tickets">
          Get a pass
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Toronto · September 18–19, 2026</p>
            <h1>
              Rethink
              <span>plastic.</span>
            </h1>
            <p className="hero-intro">
              Two days for the people transforming how plastic is designed,
              used, recovered, and reimagined.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#tickets">
                Reserve your seat <ArrowIcon />
              </a>
              <a className="text-link" href="#program">
                Explore the program
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="orb orb-three" />
            <p>NEW<br />MATERIAL<br />FUTURES</p>
          </div>
        </section>

        <section className="statement" id="about">
          <p className="section-label">Why we gather</p>
          <div>
            <h2>From a linear problem to a circular possibility.</h2>
            <p>
              Meet designers, scientists, policy makers, and founders moving
              beyond small fixes toward systems that work.
            </p>
          </div>
        </section>

        <section className="program" id="program">
          <div className="section-heading">
            <div>
              <p className="section-label">Day one preview</p>
              <h2>Ideas in motion</h2>
            </div>
            <a className="text-link" href="#tickets">
              View full schedule
            </a>
          </div>

          <div className="session-list">
            {sessions.map((session) => (
              <article className="session" key={session.time}>
                <span className="session-time">{session.time}</span>
                <h3>{session.title}</h3>
                <span className="session-type">{session.type}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="ticket-block" id="tickets">
          <p className="section-label">Join the conversation</p>
          <h2>Build what comes next.</h2>
          <p>Early passes are available now. Space is intentionally limited.</p>
          <a className="button button-light" href="mailto:hello@plasticconference.com">
            Request a pass <ArrowIcon />
          </a>
        </section>
      </main>

      <footer>
        <span>© 2026 Plastic Conference</span>
        <span>Toronto, Canada</span>
      </footer>
    </div>
  )
}

export default App

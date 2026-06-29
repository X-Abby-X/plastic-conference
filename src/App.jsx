import { useEffect, useState } from 'react'
import ProblemStatement from './ProblemStatement'
import trashTeamLogo from './assets/Logo-final-trash-team_dark_background.webp'
import schoolOfEnvLogo from './assets/uoft school of the env.DyREpoyV.png'
import torontoClimateWeekLogo from './assets/toronto-climate-week.png'

// Minimal hash-based "router" (no dependency), and it coexists with the existing
// in-page anchor links (#about, #program, …) because it only matches the #/problem path.
function useHashRoute() {
  const [hash, setHash] = useState(() =>
    typeof window === 'undefined' ? '' : window.location.hash,
  )

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

const sessions = [
  {
    time: '09:00',
    title: 'Opening Remarks',
    type: 'opening',
  },
  {
    time: '10:00',
    title: 'Speaker: Dr Kara Lavender Law',
    type: 'Keynote',
  },
  {
    time: '11:15',
    title: 'Environment: Name',
    type: 'Seminar',
  },
  {
    time: '11:45',
    title: 'Health: Name',
    type: 'Seminar',
  },
  {
    time: '12:15',
    title: 'Lunch',
    type: 'Break',
  },
  {
    time: '13:15',
    title: 'Scientific solution: Name',
    type: 'Seminar',
  },
  {
    time: '13:35',
    title: 'Community solution: Name',
    type: 'Seminar',
  },
  {
    time: '14:00',
    title: 'Industry State: Name',
    type: 'Panel',
  },
  {
    time: '14:45',
    title: 'Coffee',
    type: 'Break',
  },
  {
    time: '15:00',
    title: 'Regulatory State: Name',
    type: 'Panel',
  },
  {
    time: '15:45',
    title: 'Coffee',
    type: 'Break',
  },
  {
    time: '14:00',
    title: 'Name',
    type: 'Seminar',
  },
  

]

const partners = [
  {
    name: 'U of T Trash Team',
    description:
      'The U of T Trash Team is a science-based community outreach group of students, researchers and volunteers working to increase waste literacy and reduce plastic pollution in our ecosystems.',
    image: trashTeamLogo,
    accent: 'blue',
    url: 'https://uofttrashteam.ca/',
  },
  {
    name: 'U of T School of the Environment',
    description:
      'The School of the Environment is a hub for students and researchers across the social sciences, natural sciences, and humanities, bringing together diverse perspectives on today\'s pressing environmental challenges.',
    image: schoolOfEnvLogo,
    accent: 'orange',
    url: 'https://www.environment.utoronto.ca/',
  },
  {
    name: 'Toronto Climate Week',
    description:
      'Born from a bold grassroots vision, Toronto Climate Week is a Canadian platform uniting climate action with culture, innovation, and community positioning Toronto and Canada as a globally recognized climate hub.',
    image: torontoClimateWeekLogo,
    accent: 'acid',
    url: 'https://www.tocw.ca/',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
    </svg>
  )
}

function App() {
  const [copied, setCopied] = useState(false)
  const route = useHashRoute()

  // Dedicated problem-statement page lives at #/problem (shareable URL).
  if (route.startsWith('#/problem')) {
    return <ProblemStatement />
  }

  const handleShare = async () => {
    // The link to the conference info is simply this page.
    const shareUrl = window.location.href

    try {
      await navigator.clipboard.writeText(shareUrl)
    } catch {
      // Fallback for browsers/contexts without the async Clipboard API (e.g. non-HTTPS).
      const field = document.createElement('textarea')
      field.value = shareUrl
      field.setAttribute('readonly', '')
      field.style.position = 'absolute'
      field.style.left = '-9999px'
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      document.body.removeChild(field)
    }

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Microplastic Conference home">
          <span className="brand-mark">UofT</span>
          <span>Microplastic Conference home</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#/problem">The Problem</a>
          <a href="#program">Program</a>
          <a href="#partners">Partners</a>
          <a href="#tickets">Tickets</a>
        </nav>
        <a className="nav-cta" href="#tickets">
          Get a pass
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Toronto · September XX–XX, 2026</p>
            <h1>
              Rethink
              <span>plastic.</span>
            </h1>
            <p className="hero-intro">
              Two days bridging the gap between research, public awareness, and action. 
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href="https://forms.gle/XJAg5c3tc1gP4Xzp9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interested in Registering? <ArrowIcon />
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
              Meet students, researchers, and community members moving
              beyond small fixes toward a grand solution.
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

        <section className="partners" id="partners">
          <div className="section-heading">
            <div>
              <p className="section-label">More in our community</p>
              <h2>Our Partners</h2>
            </div>
            <p className="partner-intro">
              Three collaborators helping turn research, awareness, and action
              into something people can actually build on.
            </p>
          </div>

          <div className="partner-grid" aria-label="Conference partners">
            {partners.map((partner, index) => (
              <a
                className={`partner-card partner-card-${partner.accent}`}
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit the ${partner.name} website (opens in a new tab)`}
              >
                <div className="partner-media">
                  {partner.image ? (
                    <img src={partner.image} alt={`${partner.name} logo or portrait`} />
                  ) : (
                    <span aria-hidden="true">{index + 1}</span>
                  )}
                </div>
                <div className="partner-content">
                  <p className="partner-kicker">Partner {index + 1}</p>
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                  <span className="partner-link-label">
                    Visit website <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="ticket-block" id="tickets">
          <p className="section-label">Join the conversation</p>
          <h2>Build what comes next.</h2>
          <p>Let us know your interest in the event</p>
          <a
            className="button button-light"
            href="https://forms.gle/XJAg5c3tc1gP4Xzp9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interested in Registering? <ArrowIcon />
          </a>
          <button
            type="button"
            className="button button-share"
            onClick={handleShare}
            aria-live="polite"
          >
            {copied ? 'Link copied!' : 'Share with your friends'} <ShareIcon />
          </button>
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

import { useEffect, useState } from 'react'
import ProblemStatement from './ProblemStatement'
import ConferenceNav from './ConferenceNav'
import trashTeamLogo from './assets/Logo-final-trash-team_dark_background.webp'
import assuLogo from './assets/NewAssuLogo.JPG'
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
    time: '8:30–9:00',
    title: 'Registration · Refreshments',
    type: 'Registration',
  },
  {
    time: '9:00–9:30',
    title: 'Opening Remarks',
    type: 'Opening',
  },
  {
    time: '9:30–10:30',
    title: 'Keynote: Microplastic Pollution',
    type: 'Keynote',
    participants: ['Dr. Kara Lavender Law'],
  },
  {
    time: '10:30–10:45',
    title: 'Coffee Break',
    type: 'Break',
  },
  {
    time: '10:45–11:30',
    title: 'Microplastic in the Environment',
    type: 'Speaker',
    participants: ['Dr. Miriam Diamond'],
  },
  {
    time: '11:30–12:15',
    title: 'Microplastic in Health',
    type: 'Speaker',
    participants: ['[TBC]'],
  },
  {
    time: '12:15–1:45',
    title: 'Lunch + Poster Presentation',
    type: 'Break + Exhibition',
  },
  {
    time: '1:45–2:30',
    title: 'Scientific solutions',
    type: 'Speaker',
    participants: ['iGEM Toronto [Petabite]'],
  },
  {
    time: '2:30–3:15',
    title: 'Community solutions',
    type: 'Speaker',
    participants: ['U of T Trash Team'],
  },
  {
    time: '3:15–3:30',
    title: 'Coffee Break',
    type: 'Break',
  },
  {
    time: '3:00–3:45',
    title: 'The Current Regulatory State of Mitigating Microplastics in the Environment',
    type: 'Panel',
    participants: ['Chelsea M. Rochman', 'Karen Wirsig'],
  },
  {
    time: '4:00–5:00',
    title: 'Closing Remarks',
    type: 'Closing',
  },
]

const partners = [
  {
    name: 'U of T Trash Team',
    description:
      'The U of T Trash Team is a science-based community outreach organization made up of students, postdocs, researchers, local volunteers and staff working to increase waste literacy in our community and reduce plastic pollution in our ecosystems.',
    image: trashTeamLogo,
    accent: 'blue',
    url: 'https://uofttrashteam.ca/',
  },
  {
    name: 'Arts & Science Students’ Union',
    description:
      'ASSU is the academic student union for over 27,000 full-time undergraduate students in the Faculty of Arts & Science at the University of Toronto, organizing through more than 60 course unions to hold events, change policies, and support students.',
    image: assuLogo,
    accent: 'orange',
    url: 'https://assu.ca/wp/',
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

// Anchor-friendly slug so a session participant can deep-link to its partner card.
const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Map partner names to their in-page card anchors, so participants that ARE
// partners (e.g. "U of T Trash Team") render as links to their card.
const partnerAnchors = new Map(
  partners.map((partner) => [partner.name, `#partner-${slugify(partner.name)}`]),
)

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

  // When leaving the hash-routed Problem page for a homepage anchor, the
  // browser sees the hash before the homepage sections have mounted. Wait for
  // React to render them, then perform the intended anchor scroll.
  useEffect(() => {
    if (!route || route.startsWith('#/')) return

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(route.slice(1))
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [route])

  // Dedicated problem-statement page lives at #/problem (shareable URL).
  if (route.startsWith('#/problem')) {
    return <ProblemStatement />
  }

  const handleShare = async () => {
    // The link to the conference info is simply this page.
    const shareUrl = 'https://igem.skule.ca/plastic-conference/'

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
      <ConferenceNav />

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Toronto · September 19, 2026</p>
            <h1>
              Rethink
              <span>plastic.</span>
            </h1>
            <p className="hero-intro">
              Bridging the gap between research, public awareness, and action. 
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href="https://forms.gle/rAeggWcDE7nuEp6QA"
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
              <p className="section-label">Preview</p>
              <h2>Ideas in motion</h2>
            </div>
          </div>

          <div className="session-list">
            {sessions.map((session) => (
              <article className="session" key={session.time}>
                <span className="session-time">{session.time}</span>
                <div className="session-details">
                  <h3>{session.title}</h3>
                  {session.participants && (
                    <ul className="session-participants" aria-label={`${session.title} participants`}>
                      {session.participants.map((participant) => {
                        const partnerHref = partnerAnchors.get(participant)
                        return (
                          <li key={participant}>
                            {partnerHref ? (
                              <a href={partnerHref}>{participant}</a>
                            ) : (
                              participant
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
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
                id={`partner-${slugify(partner.name)}`}
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
            href="https://forms.gle/rAeggWcDE7nuEp6QA"
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

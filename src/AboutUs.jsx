import { useEffect } from 'react'
import ConferenceNav from './ConferenceNav'
import igemLogo from './assets/igem-logo-light.svg'
import igemToronto from './assets/igem-toronto.png'

// Outbound links for the "Get involved" block. Each entry only renders if its
// `url` is set, so an unknown destination is simply absent rather than broken.
// TO ADD A LINK: fill in the url below. Nothing else needs to change.
const CONNECT = [
  {
    label: 'igem.skule.ca',
    description: 'Our team site: projects, past seasons, and who we are.',
    url: 'https://igem.skule.ca/',
  },
  {
    label: 'The Waterfront',
    description: 'Our newsletter, for following the project between seasons.',
    url: '',
  },
  {
    label: 'Instagram',
    description: 'Day-to-day from the lab, and when recruitment opens.',
    url: '',
  },
  {
    label: 'Email us',
    description: 'Collaborations, questions about the conference, or a conversation about the work.',
    url: '',
  },
]

// A team photo or lab shot for the page header. Import one into src/assets/about/
// and assign it here. While it is null the header is a single column of type with
// the logo beside the title; setting it adds a second column for the image.
const TEAM_PHOTO = null

// Six subteams in two groups. Each group collapses to its `summary` line, so
// the page reads as an overview until someone opens a group for the roster.
const subteams = [
  {
    group: 'Technical',
    summary: 'Designs the enzyme, tests it at the bench, and builds the hardware it runs in.',
    teams: [
      ['Dry lab', 'Mines the PETadex database and trains machine learning models to design condition-specific, room-temperature PETases.'],
      ['Wet lab', 'Develops high-throughput assays to recombine enzyme fragments and test plastic degradation activity.'],
      ['Hardware', 'Builds an array of low-cost, open-source bioreactors to measure enzyme activity under varying environmental conditions.'],
    ],
  },
  {
    group: 'Non-technical',
    summary: 'Handles regulation and stakeholders, commercial strategy, and public communication.',
    teams: [
      ['Human practices', 'Maps regulatory pathways and engages stakeholders to translate real-world constraints into technical project decisions.'],
      ['Venture', 'Validates market verticals, builds commercial strategies, and secures fundraising for real-world deployment.'],
      ['Outreach', 'Drives public communication, external branding, and internal team culture.'],
    ],
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const connect = CONNECT.filter((item) => item.url)

  return (
    <div className="site-shell about-page">
      <ConferenceNav current="about" />

      <main>
        <header
          className={`about-hero${TEAM_PHOTO ? '' : ' about-hero-solo'}`}
          aria-label="Who we are"
        >
          <div className="about-hero-copy">
            <p className="section-label">The organization behind the conference</p>
            {/* The artwork is the title, so its alt carries the h1's text. */}
            <h1 className="about-hero-title">
              <img className="about-hero-mark" src={igemToronto} alt="iGEM Toronto" />
            </h1>
            <p className="about-hero-lead">
              We are a synthetic-biology student research team, studying plastic-degrading enzymes.
            </p>

            <div className="about-body about-body-on-dark">
              <div className="about-body-copy">
                <p>
                  We are students at the University of Toronto,
                  around sixty of us in a given year, drawn from life sciences,
                  engineering, computer science, among other disciplines.
                </p>
                <p>
                  iGEM itself is an annual international competition: Student teams spend a
                  year designing a synthetic biology solution to a real-world problem, then present
                  it to a global community of researchers each fall.
                </p>
                <p>
                  We've built six subteams, working on one project, working together to tackle the problem of
                  microplastics along six distinct dimensions.
                </p>
              </div>

              <div className="about-body-groups">
                <h2 className="about-groups-title">Our subteams</h2>
                {subteams.map(({ group, summary, teams }) => (
                  <details className="about-subteam-group" key={group}>
                    <summary>
                      <span className="about-subteam-label">{group}</span>
                      <span className="about-subteam-overview">{summary}</span>
                      <span className="about-subteam-toggle">
                        <span>{`${teams.length} subteams`}</span>
                        <ChevronIcon />
                      </span>
                    </summary>
                    <ul className="about-subteams">
                      {teams.map(([name, text]) => (
                        <li key={name}>
                          <h3>{name}</h3>
                          <p>{text}</p>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {TEAM_PHOTO && (
            <figure className="about-hero-figure">
              <img src={TEAM_PHOTO} alt="The iGEM Toronto team" />
            </figure>
          )}
        </header>

        <section className="about-section about-why" aria-labelledby="about-why-title">
          <div className="about-heading">
            <p className="section-label">Why we hosted</p>
            <h2 id="about-why-title">We work upstream. We needed the people downstream.</h2>
          </div>

          <div className="about-body">
            <p>
              Our work sits upstream of the microplastics problem. We think about plastic at
              the scale of a polymer chain and an active site. That is a useful place to
              stand, but it is a narrow one. The questions that decide whether any of it
              matters belong to other people: what microplastics are doing in the Great
              Lakes, how they move through air and water and bodies, what is being
              monitored, what policy is possible, and what communities are already living
              with.
            </p>
            <p>
              Those people are here. U of T has ecologists, earth scientists, engineers,
              public health researchers, and community organizations all working on
              plastics, and no regular forum that pulls that work into one room. The
              conversations happen in departments, in parallel, and mostly stay there.
            </p>
            <p>
              So we made the room. The poster session takes open abstracts on purpose: a
              student presenting a first project stands alongside established
              researchers, and both get read. We hope people leave with a more complete
              picture of the problem than the one they walked in with, and with a few names
              they did not have before.
            </p>
          </div>
        </section>

        <section className="about-connect" aria-labelledby="about-connect-title">
          <p className="section-label">Get involved</p>
          <h2 id="about-connect-title">Come work on it with us.</h2>
          <p className="about-connect-lead">
            We are always recruiting students, and you do not need a biology
            background to be useful to us. If you would rather just follow along, that
            works too. And if you want to talk about the work, we would like that.
          </p>

          {connect.length > 0 && (
            <ul className="about-connect-list">
              {connect.map((item) => (
                <li key={item.label}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <strong>
                      {item.label} <ArrowIcon />
                    </strong>
                    <span>{item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <a className="about-back" href="#top">
            Back to conference home
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

// Logo lockup used on the homepage block and as the page header's stand-in until
// a team photo exists. The artwork already contains the "iGEM" wordmark, so the
// text beside it reads "Toronto" only; together they say "iGEM Toronto".
//
// The asset is the light variant: a green mark plus a WHITE wordmark. It only
// reads on a dark ground, so `onLight` puts it on an ink tile for use against
// the paper background. Swap in a dark variant and that tile can go away.
export function IgemLockup({ className = '', onLight = false }) {
  return (
    <div className={`igem-lockup ${onLight ? 'igem-lockup-on-light' : ''} ${className}`.trim()}>
      <span className="igem-lockup-mark">
        <img src={igemLogo} alt="iGEM" />
      </span>
      <span className="igem-lockup-words">
        <strong>Toronto</strong>
        <small>University of Toronto · Synthetic Biology</small>
      </span>
    </div>
  )
}

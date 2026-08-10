import { useEffect, useState } from 'react'
import ConferenceNav from './ConferenceNav'
import lakeMap from './problem-statement/great-lakes-map.png'
import turtlePlastic from './problem-statement/turtle_plastics.png'
import whalePlastic from './problem-statement/whale_plastics.png'
import toronto from './problem-statement/toronto.png'
import exposurePathways from './problem-statement/exposure-pathways.png'
import glwqaArchive from './problem-statement/glwqa-archive.png'
import conferenceLogo from './problem-statement/conf_logo_text.png'

const REGISTRATION_URL = 'https://forms.gle/rAeggWcDE7nuEp6QA'

const pathways = [
  {
    id: 'water',
    label: 'From water',
    eyebrow: 'Visible pathways',
    title: 'Rivers, drains and visible litter carry plastic into waterways.',
    text: 'This is the pathway most people recognize: plastic enters freshwater, fragments into smaller particles and moves through aquatic ecosystems.',
    visual: 'water',
  },
  {
    id: 'air',
    label: 'From air',
    eyebrow: 'Invisible pathways',
    title: 'Plastic pollution is also falling from the air.',
    text: 'Microplastic pollution is not only a waterway issue. Airborne particles create another route into environments—and another potential route of human exposure.',
    visual: 'air',
  },
  {
    id: 'chemistry',
    label: 'Carrying chemicals',
    eyebrow: 'Complex pathways',
    title: 'Microplastics can carry contaminants and chemicals.',
    text: 'Colourants, plasticizers and flame retardants can be associated with plastic debris, creating a persistent and chemically complex form of contamination.',
    visual: 'chemistry',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function SectionHeading({ number, label, title, intro }) {
  return (
    <div className="story-heading story-reveal">
      <p className="story-chapter"><span>{number}</span>{label}</p>
      <h2>{title}</h2>
      {intro && <p className="story-heading-intro">{intro}</p>}
    </div>
  )
}

export default function ProblemStatement() {
  const [activePathway, setActivePathway] = useState(pathways[0])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)

    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0)
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      }),
      { threshold: 0.12 },
    )

    document.querySelectorAll('.story-reveal').forEach((element) => observer.observe(element))
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="story-page">
      <div className="story-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>

      <ConferenceNav current="problem" />

      <main id="top">
        <section className="story-hero">
          <div className="story-hero-copy story-reveal">
            <p className="story-kicker">The problem that brings us together</p>
            <h1>Why<br /><em>microplastics?</em></h1>
            <p className="story-hero-lead">Freshwater microplastics are an urgent, under-monitored problem. UofT Microplastics Conference 2026 brings research, awareness and action together to face it.</p>

          </div>
          <div className="story-hero-visual story-reveal" aria-hidden="true">
            <div className="story-water-ring">
              <div className="story-water-stat story-water-stat-north-america">
                <span>84%</span>
                <small>of North America’s surface freshwater<br />is held by the Great Lakes.</small>
              </div>
              <div className="story-water-stat story-water-stat-world">
                <span>20%</span>
                <small>of the world’s surface freshwater<br />is held by the Great Lakes.</small>
              </div>
            </div>
            {Array.from({ length: 18 }, (_, index) => <i key={index} style={{ '--i': index }} />)}
            <p>One connected system.<br />A problem too large for silos.</p>
          </div>
        </section>

        <aside className="story-summary" aria-label="The problem in one sentence">
          <span>Why this conference?</span>
          <p>The evidence is mounting faster than our shared response. Progress needs research, public understanding and coordinated action in the same room.</p>
        </aside>

        <section className="story-section story-freshwater" id="freshwater">
          <SectionHeading number="01" label="Freshwater at stake" title="The Great Lakes are vast—not invulnerable." intro="They are a globally significant freshwater system. Yet now every single one of them is contaminated with microplastics." />

          <div className="story-stat-layout">
            <article className="story-stat story-stat-primary story-reveal">
              <strong>84<span>%</span></strong>
              <p>of the surface freshwater in North America is held by the Great Lakes.</p>
            </article>
            <figure className="story-map story-reveal">
              <img src={lakeMap} alt="Map showing Lake Superior, Michigan, Huron, Erie and Ontario" />
            </figure>
            <article className="story-stat story-stat-secondary story-reveal">
              <strong>20<span>%</span></strong>
              <p>of the world’s surface freshwater is held here.</p>
            </article>
          </div>
        </section>

        <section className="story-section story-health" id="health">
          <SectionHeading number="02" label="Human exposure" title="The environment does not end at the body." intro="Research has detected microplastics in human samples, sharpening questions about how exposure occurs and what it may mean." />
          <div className="story-health-grid">
            <div className="story-health-copy story-reveal">
              <p>Microplastics have been detected in</p>
              <ul>
                <li>human blood</li>
                <li>placental tissue</li>
                <li>gastrointestinal samples</li>
              </ul>
              <p>Evidence suggests exposure may occur through <strong>ingestion and inhalation.</strong></p>
            </div>
            <figure className="story-exposure story-reveal"><img src={exposurePathways} alt="Illustration showing ingestion and inhalation pathways into the human body" /></figure>
          </div>
        </section>

        <section className="story-section story-gap" id="gap">
          <SectionHeading number="03" label="The response gap" title="Mounting evidence. Fragmented monitoring." intro="The science is moving, but policy and coordinated monitoring have not yet caught up." />
          <div className="story-gap-grid">
            <figure className="story-agreement story-reveal">
              <img src={glwqaArchive} alt="Archival image of the Great Lakes Water Quality Agreement" />
            </figure>
            <div className="story-gap-copy story-reveal">
              <p className="story-kicker">Where things stand</p>
              <h3>Microplastics are still not systematically monitored in Canada.</h3>
              <p>They are also not designated as a Chemical of Mutual Concern under the Great Lakes Water Quality Agreement.</p>
              <blockquote>That gap is exactly why shared language, shared evidence and shared priorities matter.</blockquote>
            </div>
          </div>
        </section>

        <section className="story-section story-conference" id="conference">
          <div className="story-conference-visual story-reveal">
            <img src={toronto} alt="Toronto skyline across Lake Ontario" />
            <img className="story-conference-logo" src={conferenceLogo} alt="UofT Microplastics Conference 2026" />
          </div>
          <div className="story-conference-copy story-reveal">
            <p className="story-kicker">From evidence to momentum</p>
            <h2>This is where the conference begins.</h2>
            <p>UofT Microplastics Conference 2026 aims to bridge the gap between research, public awareness and action.</p>
          </div>
          <div className="story-audiences">
            {[
              ['Students', 'Meet the field, ask better questions and find where your work can contribute.'],
              ['Researchers', 'Connect findings across disciplines and build a more complete picture of the problem.'],
              ['Community', 'Bring lived experience, public priorities and action into the research conversation.'],
            ].map(([title, text], index) => (
              <article className="story-audience story-reveal" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="story-cta">
          <p className="story-kicker">Students, researchers and community members are welcome</p>
          <h2>Complex problem.<br /><em>One shared room.</em></h2>
          <p>Join us to learn how we can work together toward solutions.</p>
          <div className="story-actions">
            <a className="story-button story-button-primary" href={REGISTRATION_URL} target="_blank" rel="noreferrer">I’m interested <ArrowIcon /></a>
            <a className="story-button story-button-ghost" href="#top">Back to conference home</a>
          </div>
        </section>
      </main>
    </div>
  )
}

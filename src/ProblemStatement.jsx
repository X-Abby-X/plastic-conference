import { useEffect } from 'react'
import lakeMap from './problem-statement/great-lakes-map.png'
import aquaticLife from './problem-statement/5.jpg'
import airbornePlastic from './problem-statement/6.jpg'
import contaminants from './problem-statement/7.jpg'
import humanExposure from './problem-statement/8.jpg'
import agreement from './problem-statement/9.jpg'
import toronto from './problem-statement/12.jpg'
import exposurePathways from './problem-statement/exposure-pathways.png'

const REGISTRATION_URL = 'https://forms.gle/XJAg5c3tc1gP4Xzp9'

function InfoCard({ children, className = '' }) {
  return <div className={`problem-card ${className}`}>{children}</div>
}

function CroppedSlide({ src, alt, position = 'top', className = '' }) {
  return (
    <figure className={`problem-image ${className}`}>
      <img src={src} alt={alt} style={{ objectPosition: position }} loading="lazy" />
    </figure>
  )
}

export default function ProblemStatement() {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className="problem-page">
      <div className="problem-background" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <header className="problem-nav">
        <a href="#top" aria-label="Back to conference home">UofT Microplastics Conference</a>
        <a className="problem-nav-button" href={REGISTRATION_URL} target="_blank" rel="noreferrer">Register interest</a>
      </header>

      <main>
        <section className="problem-hero">
          <div className="problem-blob problem-blob-one" aria-hidden="true" />
          <InfoCard className="problem-intro">
            <p className="problem-serif">WHY</p>
            <h1>MICROPLASTICS?</h1>
            <p>The visual story behind UofT Microplastics Conference 2026: why freshwater microplastics are an urgent, under-monitored problem, and why we are bringing research, awareness, and action together to face it.</p>
          </InfoCard>
          <h2 className="problem-outline-title">The Problem...</h2>
        </section>

        <section className="problem-section problem-lakes">
          <div className="problem-stat-grid">
            <InfoCard><p className="problem-serif">The Great Lakes hold</p><strong>84%</strong><p>of the surface freshwater in North America</p></InfoCard>
            <InfoCard><p className="problem-serif">AND...</p><strong>20%</strong><p>of the surface freshwater in the world</p></InfoCard>
          </div>
          <div className="problem-two-col problem-map-row">
            <CroppedSlide src={lakeMap} alt="Map of the Great Lakes" className="crop-map" />
            <InfoCard><p>Yet they are now amongst</p><h3><span>THE MOST</span><p> microplastic contaminated freshwater bodies on earth</p></h3></InfoCard>
          </div>
          <div className="problem-two-col">
            <CroppedSlide src={airbornePlastic} alt="Plastic pollution found near water" className="crop-photo" />
            <CroppedSlide src={contaminants} alt="Diagram showing chemicals carried by plastic debris" className="crop-diagram" />
          </div>

          <div className="problem-two-col problem-wildlife">
            <InfoCard><p className="problem-serif">At least</p><strong>90%</strong><p>of water samples surpass at least one threshold for risk to aquatic life</p></InfoCard>
          </div>
        </section>

        <section className="problem-section problem-air">
          <InfoCard className="problem-wide-card"><h3 className="problem-serif">Plastic pollution</h3><h4>Is not only entering waterways through rivers, drains, or visible litter.</h4><p>It is also falling from the air.</p></InfoCard>
          <div className="problem-two-col">
            <CroppedSlide src={airbornePlastic} alt="Plastic pollution found near water" className="crop-photo" />
          </div>
          <InfoCard className="problem-wide-card"><h3 className="problem-serif">In the environment</h3><h4>microplastics can carry contaminants and chemicals</h4><p>including colourants, plasticizers, and flame retardants:</p><p className="problem-orange">a persistent and chemically complex form of contamination</p></InfoCard>
        </section>

        <section className="problem-section problem-health">
          <div className="problem-two-col problem-health-row">
            <InfoCard><h3 className="problem-serif">Microplastics have been detected in</h3><h4>human blood, placental tissue, and gastrointestinal samples</h4><p>suggesting exposure may occur through</p><p className="problem-orange">ingestion and inhalation</p></InfoCard>
          </div>
        </section>

        <figure className="problem-full-width-image">
          <img src={exposurePathways} alt="Illustration showing inhalation and ingestion pathways into the human body" loading="lazy" />
        </figure>

        <section className="problem-section problem-policy">
          <div className="problem-two-col">
            <CroppedSlide src={agreement} alt="Great Lakes Water Quality Agreement" className="crop-agreement" />
            <InfoCard><p className="problem-serif">Despite mounting evidence,</p><h4>microplastics are still not systematically monitored in Canada,</h4><p>nor designated as a Chemical of Mutual Concern under the GLWQA</p></InfoCard>
          </div>
        </section>

        <section className="problem-section problem-action">
          <h2 className="problem-outline-title">CALL TO ACTION!</h2>
          <InfoCard className="problem-wide-card"><h3 className="problem-serif">Students, researchers, and community members</h3><h4>are ALL welcome to join us</h4><p>and learn how we can work together toward solutions!</p></InfoCard>
          <div className="problem-two-col problem-toronto-row">
            <CroppedSlide src={toronto} alt="Toronto skyline across Lake Ontario" className="crop-toronto" />
            <InfoCard><h3 className="problem-serif">UofT Microplastics Conference 2026</h3><h4>aims to bridge the gap</h4><p>between research, public awareness, and action</p></InfoCard>
          </div>
        </section>

        <section className="problem-cta">
          <h2 className="problem-outline-title">Want in?</h2>
          <h3>Learn more and <span>let us know you’re interested!</span></h3>
          <div><a href="#top">Back to the home page</a><a href={REGISTRATION_URL} target="_blank" rel="noreferrer">Interested in registering? →</a></div>
        </section>
      </main>
    </div>
  )
}

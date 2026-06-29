import { useEffect } from 'react'

// The 13 source slides from the Instagram "Why / The Problem" carousel.
// They live in src/problem-statement so Vite bundles + hashes them on build.
import slide1 from './problem-statement/1.png'
import slide2 from './problem-statement/2.png'
import slide3 from './problem-statement/3.png'
import slide4 from './problem-statement/4.png'
import slide5 from './problem-statement/5.png'
import slide6 from './problem-statement/6.png'
import slide7 from './problem-statement/7.png'
import slide8 from './problem-statement/8.png'
import slide9 from './problem-statement/9.png'
import slide10 from './problem-statement/10.png'
import slide11 from './problem-statement/11.png'
import slide12 from './problem-statement/12.png'
import slide13 from './problem-statement/13.png'

const REGISTRATION_URL = 'https://forms.gle/XJAg5c3tc1gP4Xzp9'

// Original carousel slides paired with a short description of what each one says.
// This doubles as the "explain the content" gallery further down the page.
const originalSlides = [
  { src: slide1, alt: 'Title slide reading “Why?” over the UofT Microplastics Conference 2026 lockup', caption: 'Title card: “Why?” introduces the conference and its partners.' },
  { src: slide2, alt: 'Divider slide reading “The Problem…” with a forward arrow', caption: 'Section divider: “The Problem…”' },
  { src: slide3, alt: 'Statistic slide about Great Lakes freshwater', caption: 'The Great Lakes hold 84% of North America’s and 20% of the world’s surface freshwater.' },
  { src: slide4, alt: 'Map of the Great Lakes in a dark-red frame', caption: '…yet they are among the most microplastic-contaminated freshwater bodies on Earth.' },
  { src: slide5, alt: 'A seal entangled in fishing net on a beach', caption: '~90% of water samples surpass at least one threshold for risk to aquatic life.' },
  { src: slide6, alt: 'Litter washed up on a Toronto shoreline', caption: 'Plastic pollution enters not only via waterways; it is also falling from the air.' },
  { src: slide7, alt: 'Microscopic view of microplastics carrying chemicals', caption: 'Microplastics carry contaminants and chemicals: a persistent, chemically complex pollution.' },
  { src: slide8, alt: 'Microplastic particles on a fingertip', caption: 'Detected in human blood, placental tissue and GI samples, via ingestion and inhalation.' },
  { src: slide9, alt: 'Great Lakes Water Quality Agreement poster', caption: 'Still not coordinately monitored by Canada, nor a Chemical of Mutual Concern under the GLWQA.' },
  { src: slide10, alt: 'Divider slide reading “Call to Action!” with a forward arrow', caption: 'Section divider: “Call to Action!”' },
  { src: slide11, alt: 'Slide about bridging research, awareness and action', caption: 'The conference aims to bridge the gap between research, public awareness, and action.' },
  { src: slide12, alt: 'Toronto skyline across the water', caption: 'Students, researchers and community members are all welcome to work toward solutions.' },
  { src: slide13, alt: 'Closing slide reading “Link in Bio to learn more”', caption: 'Closing card: “Link in Bio to learn more.”' },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ProblemStatement() {
  // Land at the top whenever this page is opened, since it replaces the scroll view.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="ps-page">
      <header className="ps-topbar">
        <a className="ps-back" href="#top" aria-label="Back to the conference home page">
          <span aria-hidden="true">←</span> Home
        </a>
        <span className="ps-topbar-tag">UofT Microplastics Conference · 2026</span>
      </header>

      <main className="ps-main">
        {/* ── Title: "Why?" ───────────────────────────────────────────── */}
        <section className="ps-hero">
          <p className="ps-kicker">The problem statement</p>
          <h1 className="ps-display">
            <span className="ps-pop ps-underline">Why</span> microplastics?
          </h1>
          <p className="ps-lead">
            The visual story behind <strong>UofT Microplastics Conference 2026</strong>: why
            freshwater microplastics are an urgent, under-monitored problem, and why we are
            bringing research, awareness, and action together to face it.
          </p>
        </section>

        {/* ── The Problem divider ─────────────────────────────────────── */}
        <section className="ps-divider" aria-label="Section: The Problem">
          <h2 className="ps-pop ps-underline ps-divider-title">The Problem…</h2>
          <ArrowIcon />
        </section>

        {/* ── Great Lakes freshwater stats ────────────────────────────── */}
        <section className="ps-block">
          <p className="ps-body">
            <span className="ps-pop ps-strong">The Great Lakes</span> hold
          </p>
          <p className="ps-stat-line">
            <span className="ps-stat ps-stat-red">84%</span>
            <span className="ps-stat-note">
              of the <strong>surface freshwater</strong> in <span className="ps-mark">North America</span>
            </span>
          </p>
          <p className="ps-body">and</p>
          <p className="ps-stat-line">
            <span className="ps-stat ps-stat-red">20%</span>
            <span className="ps-stat-note">
              of the <strong>surface freshwater</strong> in <span className="ps-mark">the world…</span>
            </span>
          </p>
        </section>

        {/* ── Most contaminated (map) ─────────────────────────────────── */}
        <section className="ps-block ps-block-media">
          <figure className="ps-frame">
            <img src={slide4} alt="Map of the Great Lakes spanning Canada and the United States" loading="lazy" />
          </figure>
          <p className="ps-body ps-body-lg">
            …yet they are now among the{' '}
            <span className="ps-mark">most microplastic-contaminated</span> freshwater bodies on
            Earth.
          </p>
        </section>

        {/* ── ~90% risk (seal) ────────────────────────────────────────── */}
        <section className="ps-block">
          <p className="ps-stat-line">
            <span className="ps-stat ps-stat-red ps-stat-xl">~90%</span>
          </p>
          <p className="ps-body ps-body-lg">
            of <strong>water samples</strong> surpass <strong>at least</strong> one threshold for{' '}
            <span className="ps-pop ps-strong">risk to aquatic life.</span>
          </p>
          <figure className="ps-frame ps-frame-sm">
            <img src={slide5} alt="A seal entangled in green fishing net on a beach" loading="lazy" />
          </figure>
        </section>

        {/* ── Falling from the air ────────────────────────────────────── */}
        <section className="ps-block ps-block-media">
          <figure className="ps-frame ps-frame-sm">
            <img src={slide6} alt="Plastic litter washed up along a Toronto shoreline" loading="lazy" />
          </figure>
          <p className="ps-body ps-body-lg">
            <span className="ps-pop ps-strong">Plastic pollution</span> is{' '}
            <span className="ps-mark">not only</span> entering waterways through{' '}
            <span className="ps-mark">rivers, drains,</span> or <span className="ps-mark">visible litter</span>.
            It is also <span className="ps-hand">falling from the air.</span>
          </p>
        </section>

        {/* ── Carry contaminants & chemicals ──────────────────────────── */}
        <section className="ps-block">
          <p className="ps-body">In the environment,</p>
          <p className="ps-body ps-body-lg ps-framed-text">
            <strong>microplastics</strong> can <strong>carry</strong>{' '}
            <span className="ps-pop">contaminants</span> and <span className="ps-pop">chemicals</span>
          </p>
          <p className="ps-body">
            including colourants, plasticizers, and flame retardants:{' '}
            <span className="ps-mark">a persistent and chemically complex</span> form of
            contamination.
          </p>
        </section>

        {/* ── Detected in the body ────────────────────────────────────── */}
        <section className="ps-block ps-block-media">
          <figure className="ps-frame ps-frame-sm">
            <img src={slide8} alt="Microplastic particles resting on a fingertip" loading="lazy" />
          </figure>
          <p className="ps-body ps-body-lg">
            Microplastics have been detected in{' '}
            <span className="ps-mark">human blood, placental tissue, and gastrointestinal samples</span>,
            suggesting exposure may occur through{' '}
            <span className="ps-pop ps-strong">ingestion</span> and{' '}
            <span className="ps-hand">inhalation.</span>
          </p>
        </section>

        {/* ── Not monitored ───────────────────────────────────────────── */}
        <section className="ps-block ps-block-media">
          <figure className="ps-frame ps-frame-sm">
            <img src={slide9} alt="Great Lakes Water Quality Agreement “Protecting Shared Waters” poster" loading="lazy" />
          </figure>
          <p className="ps-body ps-body-lg">
            <strong>Despite it all,</strong> microplastics are{' '}
            <span className="ps-mark">not yet coordinately monitored</span> by Canada, <span className="ps-mark">nor</span> a{' '}
            <span className="ps-pop ps-strong">Chemical of Mutual Concern</span> under the GLWQA.
          </p>
        </section>

        {/* ── Call to Action divider ──────────────────────────────────── */}
        <section className="ps-divider" aria-label="Section: Call to Action">
          <h2 className="ps-pop ps-underline ps-divider-title">Call to Action!</h2>
          <ArrowIcon />
        </section>

        {/* ── Bridge the gap (closing narrative) ──────────────────────── */}
        <section className="ps-block ps-block-media">
          <figure className="ps-frame">
            <img src={slide12} alt="The Toronto skyline seen across Lake Ontario" loading="lazy" />
          </figure>
          <p className="ps-body ps-body-lg">
            <strong>UofT Microplastics Conference 2026</strong> aims to{' '}
            <span className="ps-pop ps-strong">bridge the gap</span> between{' '}
            <strong>research</strong>, <strong>public awareness</strong>, and <strong>action</strong>.
          </p>
          <p className="ps-body ps-body-lg">
            <span className="ps-pop ps-strong">Students, researchers, and community members</span>{' '}
            are all welcome to join us and learn how we can <strong>work together</strong> toward
            solutions.
          </p>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="ps-cta">
          <h2 className="ps-pop ps-underline">Want in?</h2>
          <p className="ps-body ps-body-lg">Learn more and let us know you’re interested.</p>
          <div className="ps-cta-actions">
            <a
              className="ps-button ps-button-pop"
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Interested in registering? <ArrowIcon />
            </a>
            <a className="ps-button ps-button-ghost" href="#top">
              Back to the home page
            </a>
          </div>
        </section>

        {/* ── Original carousel + style note ──────────────────────────── */}
        <section className="ps-gallery-wrap" aria-labelledby="ps-gallery-title">
          <h2 id="ps-gallery-title" className="ps-section-title">The original carousel</h2>
          <p className="ps-body ps-gallery-intro">
            The thirteen slides this page is built from, in order.
          </p>
          <ol className="ps-gallery">
            {originalSlides.map((slide, index) => (
              <li className="ps-gallery-item" key={slide.src}>
                <figure className="ps-frame ps-frame-slide">
                  <img src={slide.src} alt={slide.alt} loading="lazy" />
                </figure>
                <p className="ps-gallery-caption">
                  <span className="ps-gallery-num">{index + 1}</span>
                  {slide.caption}
                </p>
              </li>
            ))}
          </ol>

          <aside className="ps-style-note">
            <h3>The visual language</h3>
            <p>
              The deck runs on a deep <strong>teal-to-navy gradient</strong> with warm gold corner
              glows and a fine speckled grain. Headlines are heavy geometric sans-serif; emphasis
              comes from <span className="ps-pop ps-strong">acid-yellow accent words</span> with
              hand-drawn underlines, white text on translucent{' '}
              <span className="ps-mark">khaki highlight boxes</span>, and bold statistics set on{' '}
              <span className="ps-stat-inline">dark-red blocks</span>. Photographs sit inside{' '}
              <strong>dark-red frames</strong>, and a few playful words break the grid in a{' '}
              <span className="ps-hand">handwritten marker font</span>. This page recreates that
              system in HTML and CSS so it stays responsive, accessible, and selectable as text.
            </p>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default ProblemStatement

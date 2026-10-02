import { useEffect, useRef, useState } from 'react'
import ProblemStatement from './ProblemStatement'
import AboutUs, { IgemLockup } from './AboutUs'
import ConferenceNav from './ConferenceNav'
import Gallery from './Gallery'
import trashTeamLogo from './assets/Logo-final-trash-team_dark_background.webp'
import ecologyEvolutionLogo from './assets/Sig_Dept_EcoEvoBio_KnockedOut.png'
import assuLogo from './assets/NewAssuLogo.JPG'
import fraserRiver from './assets/frjr_upscaled.png'
import longos from './assets/Longos_70th_Horiz_Logo_Colour.png'
import studentInitiativeFund from './assets/student-initiative-fund-logo.png'
import jukeboxLogo from './assets/jukeboxlogo.png'
import rnaLabLogo from './assets/RNAlab.png'
import chelseaRochman from './assets/speakers/chelsea-rochman.jpg'
import miriamDiamond from './assets/speakers/miriam-diamond.jpg'
import madeleineMilne from './assets/speakers/madeleine-milne.png'
import karenWirsig from './assets/speakers/karen-wirsig.jpg'
import karaLavenderLaw from './assets/speakers/kara-lavender-law.jpeg'
import igemToronto from './assets/igem-toronto.png'

// Minimal hash-based "router" (no dependency), and it coexists with the existing
// in-page anchor links (#about, #program, …) because it only matches #/-prefixed paths.
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


const PETABITE_RECORDING_URL = 'https://www.youtube.com/watch?v=XUABk52v078'

const sessions = [
  {
    time: '8:30–9:30',
    title: 'Registration · Refreshments',
    type: 'Registration',
  },
  {
    time: '9:30–10:00',
    title: 'Opening Remarks',
    type: 'Opening',
    participants: ['Dr. Artem Babaian', 'Dr. Chelsea Rochman'],
  },
  {
    time: '10:00–11:00',
    title: 'Keynote: Microplastic Pollution',
    type: 'Keynote',
    participants: ['Dr. Kara Lavender Law'],
  },
  {
    time: '11:00–11:30',
    title: 'Coffee Break',
    type: 'Break',
  },
  {
    time: '11:30–12:00',
    title: 'Effect of Microplastics on Environment',
    type: 'Speaker',
    participants: ['Dr. Chelsea Rochman'],
  },
  {
    time: '12:00–12:30',
    title: 'Microplastic in Health',
    type: 'Speaker',
    participants: ['Madeleine Milne'],
  },
  {
    time: '12:30–2:00',
    title: 'Lunch + Student Poster Session and Judging',
    type: 'Break + Exhibition',
    // Longo's sponsors the lunch itself rather than speaking, so the list gets
    // a lead-in to say so.
    participantsLead: 'Supported by',
    participants: ['Longo’s'],
  },
  {
    time: '2:00–2:45',
    title: 'Scientific solutions',
    type: 'Speaker',
    participants: ['iGEM Toronto [Petabite]'],
    // Only this session was recorded.
    recording: PETABITE_RECORDING_URL,
  },
  {
    time: '2:45–3:15',
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
    time: '3:30–4:30',
    title: 'The Current Regulatory State of Mitigating Microplastics in the Environment',
    type: 'Panel',
    participants: ['Dr. Miriam Diamond', 'Karen Wirsig', 'Dr. Chelsea Rochman'],
  },
  {
    time: '4:30–5:00',
    title: 'Closing Remarks',
    type: 'Closing',
  },
]


const INSTAGRAM_URL = 'https://www.instagram.com/igemtoronto/'

const partners = [
  {
    name: 'U of T Trash Team',
    relationship: 'In Close Collaboration With',
    description:
      'The U of T Trash Team is a science-based community outreach organization made up of students, postdocs, researchers, local volunteers and staff working to increase waste literacy in our community and reduce plastic pollution in our ecosystems.',
    image: trashTeamLogo,
    accent: 'blue',
    url: 'https://uofttrashteam.ca/',
  },
  {
    name: 'University of Toronto Ecology and Evolutionary Biology',
    relationship: 'Sponsored By',
    description:
      'The Department of Ecology & Evolutionary Biology (EEB) at the University of Toronto is dedicated to advancing knowledge in ecology and evolution through research, teaching, and community engagement, while preparing students to think critically about the natural world and their place within it. The department’s objectives remain rooted in fostering excellence in research and teaching, promoting interdisciplinary collaboration, and engaging meaningfully with the public, which has made it a powerhouse of biological research, maintaining its standing as the premier unit of its kind in Canada and a top-tier department globally.',
    image: ecologyEvolutionLogo,
    accent: 'blue',
    url: 'https://eeb.utoronto.ca/',
  },
  {
    name: 'RNAlab',
    relationship: 'iGEM Toronto’s Supervising Lab',
    description:
      'The Laboratory for RNA-Based Lifeforms (RNAlab) at the University of Toronto, led by Dr. Artem Babaian, is a combined computational and molecular research team and the supervising lab of iGEM Toronto. The lab explores the evolution and biodiversity of Earth’s RNA viruses, and builds ultra-high-throughput computational and molecular platforms to discover enzymes that can degrade or upcycle plastic waste.',
    image: rnaLabLogo,
    accent: 'orange',
    url: 'https://www.rnalab.ca/',
  },
  {
    name: 'Arts & Science Students’ Union',
    relationship: 'Supported By',
    description:
      'ASSU is the academic student union for over 27,000 full-time undergraduate students in the Faculty of Arts & Science at the University of Toronto, organizing through more than 60 course unions to hold events, change policies, and support students.',
    image: assuLogo,
    accent: 'acid',
    url: 'https://assu.ca/wp/',
  },
  {
    name: 'Fraser River Junk Removal',
    relationship: 'Supported By',
    description:
      'Fraser River Junk Removal is a student‑led, locally owned junk removal and moving company serving the Greater Vancouver area. The company has provided services to more than 250 homes across the region and its operations prioritize recycling, donating, and proper waste management, focusing on reducing landfill use and supporting the local community.',
    image: fraserRiver,
    accent: 'blue',
    url: 'https://frjunk.ca/?utm_source=ig&utm_medium=social&utm_content=link_in_bio',
  },
  {
    name: 'Longo’s',
    relationship: 'Supported By',
    description:
      'Longo’s is an Ontario-based grocery retailer that has been fueling happier and healthier lives for nearly 70 years. Guided by its “Treating You Like Family” culture, Longo’s is committed to delivering exceptional food and service. Through support for local organizations, community partnerships, and sustainability initiatives, Longo’s is proud to work with groups that share its values of Environmental Stewardship, Responsible Sourcing, and Healthy, Happy People!',
    image: longos,
    accent: 'acid',
    url: 'https://www.longos.com/',
  },
  {
    name: 'Student Initiative Fund',
    relationship: 'Supported By',
    description:
      'Run by Clubs & Leadership Development in the Division of Student Life, the Student Initiative Fund backs student ideas that enrich campus life and build community at U of T, awarding up to $3,000 per project. Past recipients range from an Art and Mindfulness Exhibition and Brunch for Breast Health to a How to be a Good Ally workshop and Beyond the Brain, a multi-disciplinary conference on neurodegeneration.',
    image: studentInitiativeFund,
    accent: 'orange',
    url: 'https://studentlife.utoronto.ca/program/student-initiative-fund/',
  },
  {
    name: 'Jukebox',
    relationship: 'Supported By',
    description:
      'Jukebox is a vibrant and innovative printing company located in the heart of Liberty Village. We specialize in creating unique printed products, from flyers and books to business cards and the coolest stickers.',
    image: jukeboxLogo,
    accent: 'acid',
    url: 'https://www.jukeboxprint.com/',
  },
]

// Where to go next, shown above the partner cards in the thank-you section.
const nextSteps = [
  {
    kicker: 'The organisers',
    title: 'iGEM Toronto',
    description:
      'The student synthetic biology team behind the conference. See our projects, past seasons, and how to get involved.',
    label: 'Visit igem.skule.ca',
    url: 'https://igem.skule.ca/',
  },
  {
    kicker: 'Our partner',
    title: 'U of T Trash Team',
    description:
      'Our mentors and partners throughout. Join their cleanups, workshops and waste-literacy work across Toronto.',
    label: 'Visit uofttrashteam.ca',
    url: 'https://uofttrashteam.ca/',
  },
  {
    kicker: 'Watch',
    title: 'The PetaBite talk',
    description:
      'A recording of iGEM Toronto presenting PetaBite, our project tackling the microplastics problem.',
    label: 'Watch on YouTube',
    url: PETABITE_RECORDING_URL,
  },
]

const speakers = [

  {
    name: 'Dr. Kara Lavender Law',
    title: 'Research Professor of Oceanography, Sea Education Association',
    role: 'Keynote Speaker',
    image: karaLavenderLaw,
    description:
      'Kara Lavender Law studies the sources, distribution, transformation and fate of plastic debris in the marine environment. Trained as a physical oceanographer, she has more than 12 months of sea time on oceanographic and sailing research vessels, including in the eastern North Pacific and western North Atlantic Oceans where plastic debris accumulates in regions dubbed “garbage patches”. Her recent work is focused “upstream” on the generation, pathways and treatment of plastic waste, ultimately striving to prevent plastic leakage to the environment.',
    link: { label: 'SEA profile', url: 'https://sea.edu/team/kara-lavender-law/' },
  },
  {
    name: 'Madeleine Milne',
    title: 'Manager, Rochman Lab, University of Toronto',
    image: madeleineMilne,
    description:
      'Madeleine Milne began as a research assistant in Dr. Chelsea Rochman’s lab in 2020 and got drawn into plastic pollution research, later joining the U of T Trash Team. Since then she’s earned a master’s at the University of Manitoba, become manager of the Rochman Lab, and continued with the Trash Team through outreach, cleanups, workshops, and volunteer training. Her research has covered microplastics in Lake Ontario fish, grocery-store foods, and a multi-year whole-lake study at the Experimental Lakes Area. She is a recipient of the Arbor Award, U of T’s highest honour for volunteer service.',
    link: {
      label: 'Milne et al. 2024 (open PDF)',
      url: 'https://oceanconservancy.org/wp-content/uploads/2024/01/Milne_Leonard_Mallos_Rochman-et-al_2024_Exposure-of-U.S.-adults-to-microplastics-from-commonly-consumed-proteins_Enviro_Pollution.pdf',
    },
  },
  {
    name: 'Dr. Chelsea Rochman',
    title: 'Associate Professor, Ecology & Evolutionary Biology, University of Toronto',
    image: chelseaRochman,
    description:
      'Chelsea M. Rochman is an internationally recognized leader in microplastic pollution research, advancing monitoring methods and risk assessment frameworks to understand the sources, fate, and impacts of plastic pollution in aquatic ecosystems. She has published extensively in leading journals, including Science, Nature, and PNAS, and collaborates closely with government and industry partners to translate science into policy, contributing to local, national, and regional legislation as well as international efforts toward a global plastics agreement.',
    link: { label: 'rochmanlab.com', url: 'https://www.rochmanlab.com/' },
  },
  {
    name: 'Dr. Miriam Diamond',
    title: 'Professor, Earth Sciences and School of the Environment, University of Toronto',
    image: miriamDiamond,
    description:
      'Miriam Diamond researches chemical contaminants from emissions through to human and ecosystem exposure, and is active in promoting sound chemicals management from national to international scales. She has co-chaired Canada’s Chemicals Management Plan Science Committee and Ontario’s Toxic Reduction Scientific Expert Panel, and currently serves on the Scientific and Technical Advisory Panel of the Global Environmental Facility, as a Commissioner of Earth Commission 2.0, and as Vice-Chair of the International Panel on Chemical Pollution. She is a Fellow of the Royal Society of Canada and appears frequently in media stories about harmful chemicals.',
    link: { label: 'miriamldiamond.com', url: 'https://www.miriamldiamond.com/' },
  },
  {
    name: 'Karen Wirsig',
    title: 'Senior Program Manager, Plastics, Environmental Defence Canada',
    image: karenWirsig,
    focus: 'center',
    description:
      'Karen has worked as a journalist and as a labour and community organizer. An active transportation enthusiast who favours walking, cycling, and public transit, Karen has never owned a car. She is a voracious reader and has spent her adult life trying to unlearn the common belief that humans should strive for domination over each other, over other animals, and over nature itself. She’s passionate about helping to get plastics out of the environment.',
    link: { label: 'environmentaldefence.ca', url: 'https://environmentaldefence.ca/' },
  },
]

// Anchor-friendly slug so a session participant can deep-link to its card.
const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Session participants are named in `sessions` as bare strings. Partners and
// speakers each have a full record elsewhere on the page, so normalize both
// into one shape: any participant with a match here renders as a link to its
// card plus a hover preview. Speakers whose photo or bio is still pending get
// the same link and preview, with a placeholder standing in for the image.
// iGEM Toronto is in neither list — it is the organiser, and its "card" is the
// #about-us section — so it gets the hand-written entry at the end of the map.
// Any participant with no entry at all falls through to plain text.
const previewsByName = new Map([
  ...partners.map((partner) => [
    partner.name,
    {
      href: `#partner-${slugify(partner.name)}`,
      kicker: partner.relationship,
      name: partner.name,
      description: partner.description,
      image: partner.image,
      // Some partner logos ship with a baked-in coloured background.
      accent: partner.accent,
      shape: 'square',
    },
  ]),
  ...speakers.map((speaker) => [
    speaker.name,
    {
      href: `#speaker-${slugify(speaker.name)}`,
      kicker: speaker.title,
      name: speaker.name,
      description: speaker.description,
      image: speaker.image,
      focus: speaker.focus,
      shape: 'portrait',
    },
  ]),
  [
    'iGEM Toronto [Petabite]',
    {
      href: '#about-us',
      kicker: 'Conference Organiser',
      name: 'iGEM Toronto',
      description:
        'iGEM Toronto is a student-led synthetic biology team at the University of Toronto. This year the team is building enzymes that break down PET plastic, pairing computational design with experimental validation to find candidates that hold up outside ideal conditions.',
      image: igemToronto,
      accent: 'blue',
      shape: 'square',
    },
  ],
])

const bottleHoles = [
  { x: 156, y: 292, radius: 26 },
  { x: 352, y: 245, radius: 20 },
  { x: 325, y: 382, radius: 32 },
  { x: 190, y: 435, radius: 24 },
  { x: 388, y: 455, radius: 18 },
  { x: 250, y: 230, radius: 15 },
]

const bottleFragments = [
  { x: 146, y: 285, size: 24, dx: -108, dy: -38, rotation: -58 },
  { x: 350, y: 238, size: 18, dx: 104, dy: -74, rotation: 76 },
  { x: 318, y: 374, size: 30, dx: 138, dy: 18, rotation: 110 },
  { x: 182, y: 430, size: 22, dx: -128, dy: 58, rotation: -92 },
  { x: 382, y: 448, size: 16, dx: 94, dy: 96, rotation: 66 },
  { x: 245, y: 224, size: 15, dx: -30, dy: -132, rotation: 120 },
  { x: 228, y: 492, size: 18, dx: -20, dy: 116, rotation: -48 },
  { x: 290, y: 310, size: 12, dx: 72, dy: -52, rotation: 98 },
  { x: 126, y: 355, size: 13, dx: -82, dy: 24, rotation: -76 },
]

function DegradingBottle({ progress, className = '' }) {
  const bottleOpacity = 1 - progress * 0.34

  return (
    <svg className={`degrading-bottle ${className}`} viewBox="0 0 520 600" role="presentation">
      <defs>
        <linearGradient id="bottle-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9edf3" stopOpacity=".92" />
          <stop offset=".48" stopColor="#79d3f2" stopOpacity=".58" />
          <stop offset="1" stopColor="#326b99" stopOpacity=".78" />
        </linearGradient>
        <mask id="bottle-decay-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="520" height="600">
          <rect width="520" height="600" fill="white" />
          {bottleHoles.map((hole) => (
            <circle
              cx={hole.x}
              cy={hole.y}
              fill="black"
              key={`${hole.x}-${hole.y}`}
              r={Math.max(0, progress * hole.radius)}
            />
          ))}
        </mask>
        <filter id="bottle-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="18" floodColor="#083581" floodOpacity=".2" stdDeviation="18" />
        </filter>
      </defs>

      <ellipse className="bottle-ground-shadow" cx="260" cy="552" rx="145" ry="22" opacity={0.22 * (1 - progress)} />

      <g filter="url(#bottle-shadow)" mask="url(#bottle-decay-mask)" opacity={bottleOpacity} transform="rotate(-10 260 310)">
        <path
          className="bottle-body"
          d="M205 142V116h110v26c0 22 9 31 37 53 40 31 58 76 58 132v143c0 43-27 67-70 67H180c-43 0-70-24-70-67V327c0-56 18-101 58-132 28-22 37-31 37-53Z"
        />
        <rect className="bottle-cap" height="43" rx="9" width="132" x="194" y="71" />
        <path className="bottle-cap-line" d="M202 84h116M202 96h116" />
        <path className="bottle-highlight" d="M171 229c-20 26-29 61-29 105v122c0 24 10 37 31 43" />
        <path className="bottle-wave" d="M119 382c50-31 88 20 140-5 58-28 92 14 143-13v111c0 36-22 54-61 54H179c-39 0-61-18-61-54Z" />
      </g>

      <g className="bottle-fragments">
        {bottleFragments.map((fragment, index) => (
          <rect
            fill={index % 3 === 0 ? '#ffda78' : index % 2 === 0 ? '#4d97a9' : '#326b99'}
            height={fragment.size * .72}
            key={`${fragment.x}-${fragment.y}`}
            opacity={Math.min(1, progress * 1.7)}
            rx="4"
            transform={`translate(${fragment.dx * progress} ${fragment.dy * progress}) rotate(${fragment.rotation * progress} ${fragment.x} ${fragment.y})`}
            width={fragment.size}
            x={fragment.x}
            y={fragment.y}
          />
        ))}
      </g>
    </svg>
  )
}

// A small one-off burst for the thank-you dialog. The values come from a
// seeded hash rather than Math.random() so the pieces are identical on every
// render (StrictMode renders twice) and the burst always looks the same.
const CONFETTI_COLORS = ['var(--acid)', 'var(--orange)', 'var(--blue)', 'var(--ink)']
const confettiNoise = (index, salt) => {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453
  return value - Math.floor(value)
}
const confettiPieces = Array.from({ length: 36 }, (_, index) => ({
  // -1…1; the stylesheet scales it by the burst width for the viewport.
  x: (confettiNoise(index, 1) * 2 - 1).toFixed(3),
  rise: `${-(4 + confettiNoise(index, 2) * 10).toFixed(1)}rem`,
  spin: `${Math.round((confettiNoise(index, 3) - 0.5) * 1080)}deg`,
  delay: `${Math.round(confettiNoise(index, 4) * 220)}ms`,
  color: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
  round: index % 3 === 0,
}))

function ThanksConfetti() {
  return (
    <div className="thanks-confetti" aria-hidden="true">
      {confettiPieces.map((piece, index) => (
        <span
          className="thanks-confetti-piece"
          key={index}
          style={{
            '--confetti-x': piece.x,
            '--confetti-rise': piece.rise,
            '--confetti-spin': piece.spin,
            '--confetti-delay': piece.delay,
          }}
        >
          <i style={{ background: piece.color, borderRadius: piece.round ? '50%' : undefined }} />
        </span>
      ))}
    </div>
  )
}

// Post-event replacement for the sign-up dialog that used to open on load: same
// shell, but it thanks people and points them at the photos and what comes next.
function ConferenceThanksDialog({ setOpen }) {
  const dialogRef = useRef(null)
  const dismissButtonRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // The dismiss button sits at the foot of the dialog. On a phone the dialog
    // scrolls, and a plain focus() would open it scrolled past the heading.
    dismissButtonRef.current?.focus({ preventScroll: true })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [setOpen])

  const closeDialog = () => setOpen(false)

  return (
    <div
      className="welcome-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeDialog()
      }}
    >
      <section
        className="welcome-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-dialog-title"
        aria-describedby="welcome-dialog-description"
      >
        <button
          className="welcome-dialog-close"
          type="button"
          onClick={closeDialog}
          aria-label="Close thank-you message"
        >
          ×
        </button>

        <div className="welcome-dialog-heading">
          <p>September 19, 2026 · That’s a wrap</p>
          <h2 id="welcome-dialog-title">Thank you!</h2>
          <p id="welcome-dialog-description">
            More than 200 people registered and 15 posters were presented at the UofT
            Microplastics Conference. Thank you to everyone who came, spoke, presented and
            volunteered.
          </p>
          <div className="welcome-dialog-location">
            <strong>With thanks to the U of T Trash Team, our speakers and our sponsors</strong>
            <span>For their mentorship, partnership and support throughout.</span>
          </div>
        </div>

        <div className="welcome-dialog-options">
          <article>
            <span>01 · Look back</span>
            <h3>See the day in photos</h3>
            <p>Talks, the keynote, the panel and the student poster session, as they happened.</p>
            <a href="#gallery" onClick={closeDialog}>
              Open the gallery <ArrowIcon />
            </a>
          </article>
          <article>
            <span>02 · Stay tuned</span>
            <h3>Follow along for next year</h3>
            <p>Keep up with iGEM Toronto to hear what comes next.</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" onClick={closeDialog}>
              Follow on Instagram <ArrowIcon />
            </a>
          </article>
        </div>

        <button className="welcome-dialog-explore" onClick={closeDialog} ref={dismissButtonRef} type="button">
          Explore the website
        </button>
      </section>

      <ThanksConfetti />
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
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

// Hover/focus preview of a session participant — a partner or a speaker.
//
// The image is absolutely positioned into a reserved gutter so its size can't
// affect the description's width/wrapping. That circularity is what made the
// image balloon when it was laid out inline: taller image -> narrower text ->
// taller text -> taller image... Stretching it top/bottom against the
// description then matches the text block's height exactly, no JS needed.
//
// The catch is that the gutter is a fixed width while the image's width is
// derived from the (text-driven) height, so the two only agree at one text
// length. `.participant-preview-description` clamps to a fixed line count to
// pin that height, which keeps every preview on the same geometry regardless
// of how long the underlying bio is.
function ParticipantPreview({ participant }) {
  const { accent, description, focus, image, kicker, name, shape } = participant

  return (
    <div className={`participant-preview participant-preview-${shape}`} role="tooltip">
      <p className="participant-preview-kicker">{kicker}</p>
      <p className="participant-preview-name">{name}</p>
      <div className="participant-preview-body">
        <div
          className={`participant-preview-media participant-preview-media-${shape}${
            accent ? ` participant-preview-media-${accent}` : ''
          }`}
        >
          {image ? (
            <img src={image} alt="" style={focus ? { objectPosition: focus } : undefined} />
          ) : (
            <span className="participant-preview-placeholder" aria-hidden="true">
              TBA
            </span>
          )}
        </div>
        <p className="participant-preview-description">{description}</p>
      </div>
    </div>
  )
}

function App() {
  const [copied, setCopied] = useState(false)
  const [thanksOpen, setThanksOpen] = useState(true)
  const [bottleDecay, setBottleDecay] = useState(0)
  const route = useHashRoute()
  const initialRouteHandled = useRef(false)

  useEffect(() => {
    if (route.startsWith('#/')) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setBottleDecay(0)
      return undefined
    }

    let frame
    const updateBottle = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const hero = document.querySelector('.hero')
        if (!hero) return
        const distance = Math.max(hero.offsetHeight * .72, 1)
        setBottleDecay(Math.min(1, Math.max(0, window.scrollY / distance)))
      })
    }

    window.addEventListener('scroll', updateBottle, { passive: true })
    updateBottle()

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateBottle)
    }
  }, [route])

  // When leaving the hash-routed Problem page for a homepage anchor, the
  // browser sees the hash before the homepage sections have mounted. Wait for
  // React to render them, then perform the intended anchor scroll.
  useEffect(() => {
    if (!route || route.startsWith('#/')) return

    if (!initialRouteHandled.current) {
      initialRouteHandled.current = true
      const navigation = window.performance.getEntriesByType('navigation')[0]

      if (navigation?.type === 'reload') {
        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}${window.location.search}#top`,
        )
        window.scrollTo({ top: 0, behavior: 'auto' })
        return
      }
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(route.slice(1))
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [route])

  // Dedicated problem-statement page lives at #/problem (shareable URL).
  if (route.startsWith('#/problem')) {
    return (
      <>
        <ProblemStatement />
        {thanksOpen && <ConferenceThanksDialog setOpen={setThanksOpen} />}
      </>
    )
  }

  // Dedicated "who we are" page lives at #/about, kept distinct from the
  // homepage's #about anchor (the "Why we gather" statement).
  if (route.startsWith('#/about')) {
    return (
      <>
        <AboutUs />
        {thanksOpen && <ConferenceThanksDialog setOpen={setThanksOpen} />}
      </>
    )
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
            <p className="eyebrow">September 19, 2026 · That’s a wrap</p>
            <address className="hero-location">
              <strong>University of Toronto · Bahen Centre for Information Technology</strong>
              <span>40 St George St, Toronto, ON M5S 2E4</span>
            </address>
            <h1>
              Rethink
              <span>plastic.</span>
            </h1>
            <p className="hero-intro">
              Thank you to everyone who joined us to bridge the gap between research,
              public awareness, and action.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#gallery">
                See the photos <ArrowIcon />
              </a>
              <a className="text-link" href="#program">
                Look back at the program
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <DegradingBottle className="degrading-bottle-one" progress={bottleDecay} />
            <DegradingBottle className="degrading-bottle-two" progress={Math.max(0, (bottleDecay - .12) / .88)} />
            <p style={{ opacity: 1 - bottleDecay * .48 }}>NEW<br />MATERIAL<br />FUTURES</p>
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
            <a className="text-link" href="#/problem">
              Read the full problem statement <ArrowIcon />
            </a>
          </div>
        </section>

        <Gallery />

        <section className="organiser" id="about-us" aria-labelledby="organiser-title">
          <IgemLockup className="organiser-lockup" onLight />
          <div className="organiser-copy">
            <p className="section-label">Who we are</p>
            <h2 id="organiser-title">The team behind the conference.</h2>
            <p>
              iGEM Toronto is a student-led synthetic biology team at the University of
              Toronto. This year, we are building enzymes that break down PET plastic, pairing
              computational design with experimental validation to find candidates that hold up
              outside ideal conditions. We convened this conference to gather the people working
              on tackling the microplastics problem to build real, systemic solutions beyond the lab.
            </p>
            <a className="text-link" href="#/about">
              More about iGEM Toronto <ArrowIcon />
            </a>
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
                      {session.participants.map((participant, participantIndex) => {
                        const preview = previewsByName.get(participant)
                        return (
                          <li
                            key={participant}
                            className={preview ? 'has-participant-preview' : undefined}
                          >
                            {participantIndex === 0 && session.participantsLead && (
                              <span className="participant-lead">
                                {session.participantsLead}{' '}
                              </span>
                            )}
                            {preview ? (
                              <>
                                <a
                                  className="participant-link"
                                  href={preview.href}
                                  aria-label={`Jump to the ${participant} card`}
                                >
                                  {participant}
                                  <LinkIcon />
                                </a>
                                <ParticipantPreview participant={preview} />
                              </>
                            ) : (
                              participant
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  )}
                  {session.recording && (
                    <a
                      className="session-recording"
                      href={session.recording}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch the recording of ${session.title} on YouTube (opens in a new tab)`}
                    >
                      <PlayIcon />
                      Watch the recording
                    </a>
                  )}
                </div>
                <span className="session-type">{session.type}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="speakers" id="speakers">
          <div className="section-heading">
            <div>
              <p className="section-label">Who's speaking</p>
              <h2>Meet our speakers</h2>
            </div>
          </div>

          <div className="speaker-list">
            {speakers.map((speaker) => (
              <article
                className={`speaker-row${!speaker.image ? ' speaker-row-empty' : ''}`}
                id={`speaker-${slugify(speaker.name)}`}
                key={speaker.name}
              >
                <div className="speaker-media">
                  {speaker.image ? (
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      style={speaker.focus ? { objectPosition: speaker.focus } : undefined}
                    />
                  ) : (
                    <span aria-hidden="true">TBA</span>
                  )}
                </div>
                <div className="speaker-content">
                  <p className="speaker-eyebrow">{speaker.role ?? 'Speaker'}</p>
                  <h3>{speaker.name}</h3>
                  {speaker.title && <p className="speaker-title">{speaker.title}</p>}
                  {speaker.description && <p className="speaker-description">{speaker.description}</p>}
                  {speaker.link && (
                    <div className="speaker-tags">
                      <a
                        className="speaker-tag speaker-link"
                        href={speaker.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkIcon />
                        {speaker.link.label}
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="partners" id="partners">
          <div className="section-heading">
            <div>
              <p className="section-label">Partners and sponsors</p>
              <h2>Thank you</h2>
            </div>
            <p className="partner-intro">
              To the U of T Trash Team for their mentorship and partnership, to our
              speakers, and to the sponsors and supporters below who made the day possible.
            </p>
          </div>

          <ul className="thanks-links" aria-label="Where to go next">
            {nextSteps.map((step) => (
              <li key={step.title}>
                <a
                  href={step.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${step.title}: ${step.label} (opens in a new tab)`}
                >
                  <p className="partner-kicker">{step.kicker}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className="thanks-link-label">
                    {step.label} <ArrowIcon />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="thanks-acknowledgement">
            We’d also like to recognize the advice and support of Chem Eng at UofT and
            University of Toronto Engineering, and in particular Chris Yip.
          </p>

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
                  <p className="partner-kicker">{partner.relationship}</p>
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

        <section className="ticket-block" id="next-year">
          <p className="section-label">Until next time</p>
          <h2>Stay tuned for next year.</h2>
          <p>Follow iGEM Toronto to hear what comes next.</p>
          <a
            className="button button-light"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Instagram <ArrowIcon />
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

      {thanksOpen && <ConferenceThanksDialog setOpen={setThanksOpen} />}

    </div>
  )
}

export default App

// Single source of truth for everything search engines and social platforms read.
//
// These values are injected into index.html at build time by the `seo()` plugin in
// vite.config.js, so the tags and JSON-LD land in the static HTML rather than being
// added by React after hydration. Crawlers that do not execute JavaScript still see them.
//
// TO UPDATE THE EVENT DETAILS, EDIT ONLY THIS FILE.

// The canonical origin. The Vercel preview domain and the GitHub Pages URL serve the
// same content, so they must never be advertised here — see vercel.json.
export const SITE_URL = 'https://www.uoftmicroplastics.ca'

// The homepage's own address. Kept separate from SITE_URL (which is a prefix for building
// asset paths) so the trailing slash is identical everywhere the homepage is referenced —
// canonical, og:url and sitemap.xml must agree exactly or they describe two URLs.
export const CANONICAL_URL = `${SITE_URL}/`

export const SITE_NAME = 'UofT Microplastics Conference'

export const TITLE = 'UofT Microplastics Conference 2026 — Toronto'

export const DESCRIPTION =
  'A one-day University of Toronto conference bridging research, public awareness, ' +
  'and action on microplastics and plastic pollution. Toronto, September 19, 2026.'

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const REGISTRATION_URL = 'https://forms.gle/XJAg5c3tc1gP4Xzp9'

// --- Event details -------------------------------------------------------------------
// The venue is not confirmed yet, so `location` is deliberately institution-level rather
// than a street address. Structured data must mirror what the page actually claims: the
// date below matches the hero eyebrow in src/App.jsx, and the two `performer` entries
// match the confirmed speakers in the `sessions` array. If any of those change on the
// page, change them here too or the markup becomes a mismatch.
//
// WHEN THE VENUE IS CONFIRMED: add `streetAddress` and `postalCode` to `address` below,
// and set `name` to the building. Nothing else needs to change.
export const EVENT_START = '2026-09-19T09:00:00-04:00'
export const EVENT_END = '2026-09-19T17:00:00-04:00'

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'UofT Microplastics Conference 2026',
  description: DESCRIPTION,
  startDate: EVENT_START,
  endDate: EVENT_END,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  url: CANONICAL_URL,
  image: [OG_IMAGE],
  location: {
    '@type': 'Place',
    name: 'University of Toronto',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'iGEM Toronto',
    url: CANONICAL_URL,
  },
  performer: [
    { '@type': 'Person', name: 'Dr. Kara Lavender Law' },
    { '@type': 'Person', name: 'Dr. Miriam Diamond' },
  ],
  offers: {
    '@type': 'Offer',
    url: REGISTRATION_URL,
    availability: 'https://schema.org/InStock',
    price: '0',
    priceCurrency: 'CAD',
    // Registration is already open, so this is backdated to the site's launch.
    validFrom: '2026-07-01T00:00:00-04:00',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: CANONICAL_URL,
}

export const JSON_LD = [websiteSchema, eventSchema]

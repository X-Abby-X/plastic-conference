import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  DESCRIPTION,
  JSON_LD,
  OG_IMAGE,
  SITE_NAME,
  CANONICAL_URL,
  TITLE,
} from './src/seo/site.js'

// Injects the head tags that search engines and social platforms read. Doing this at
// build time (rather than from React) keeps them in the served HTML, so crawlers that
// do not execute JavaScript still see them.
function seo({ noindex = false } = {}) {
  return {
    name: 'seo',
    transformIndexHtml() {
      const meta = [
        { name: 'description', content: DESCRIPTION },

        // A `noindex` meta tag is used rather than a robots.txt `Disallow`, because
        // disallowing the crawl would stop crawlers from ever reading this tag.
        ...(noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),

        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:title', content: TITLE },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:url', content: CANONICAL_URL },
        { property: 'og:image', content: OG_IMAGE },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: `${SITE_NAME} 2026` },
        { property: 'og:locale', content: 'en_CA' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: TITLE },
        { name: 'twitter:description', content: DESCRIPTION },
        { name: 'twitter:image', content: OG_IMAGE },
      ]

      return [
        { tag: 'title', children: TITLE, injectTo: 'head' },
        ...meta.map((attrs) => ({ tag: 'meta', attrs, injectTo: 'head' })),
        { tag: 'link', attrs: { rel: 'canonical', href: CANONICAL_URL }, injectTo: 'head' },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          // No user input reaches this, but `<` is still escaped so a stray character in
          // a speaker name or description can never close the script tag early.
          children: JSON.stringify(JSON_LD).replace(/</g, '\\u003c'),
          injectTo: 'head',
        },
      ]
    },
  }
}

// GitHub Pages serves the project from a repository subpath, while Vercel and the local
// development server serve it from the domain root.
export default defineConfig(({ command }) => {
  const isGitHubPages = command === 'build' && Boolean(process.env.GITHUB_ACTIONS)

  return {
    base: isGitHubPages ? '/plastic-conference/' : '/',
    // The GitHub Pages deployment duplicates the canonical site at
    // igem-toronto.github.io/plastic-conference/, so that copy is kept out of the index.
    plugins: [react(), seo({ noindex: isGitHubPages })],
  }
})

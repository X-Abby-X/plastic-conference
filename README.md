# Plastic Conference

A single-page, responsive marketing site for a University of Toronto microplastics conference
(Toronto, September 2026). Built with React + Vite. It is one scrolling landing page with
anchor-based navigation — no backend and no router.

**Live site:** https://igem-toronto.github.io/plastic-conference/

Development is a collaborative effort with the iGEM Toronto team.

## Features

- Sticky navigation that follows the user while scrolling.
- Hero section with calls to action linking to the registration Google Form (opens in a new tab).
- Program/schedule preview.
- Partner grid: each card shows the organization's logo and links out to its website
  (U of T Trash Team, U of T School of the Environment, Toronto Climate Week).
- "Share with your friends" button that copies the conference link to the clipboard.

## Tech stack

- **Build tool:** Vite (`@vitejs/plugin-react`)
- **Framework:** React 18 with `StrictMode`
- **Language:** JavaScript + JSX (no TypeScript)
- **Styling:** a single global stylesheet, `src/styles.css` (plain CSS with custom-property
  palette; Google Fonts: DM Sans, Manrope)
- **Module type:** ESM

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```
index.html              # Vite entry, mounts #root
src/
  main.jsx              # React entry (createRoot, StrictMode)
  App.jsx               # The entire page — all sections plus the `sessions` and `partners` data arrays
  styles.css            # All styling (global)
  assets/               # Imported images (partner logos)
public/
  partners/             # Static partner assets
.github/workflows/
  deploy.yml            # Builds and deploys to GitHub Pages
```

Editable content lives in the `sessions` and `partners` arrays at the top of `src/App.jsx`.

## Deployment

The site deploys to GitHub Pages automatically via GitHub Actions on every push to `main`
(see `.github/workflows/deploy.yml`). The workflow runs `npm ci && npm run build` and publishes
the `dist/` output.

Because the site is served from a project subpath
(`https://igem-toronto.github.io/plastic-conference/`), `vite.config.js` sets
`base: '/plastic-conference/'` for production builds so asset URLs resolve correctly. The dev
server still serves from `/`.

The repository's **Settings → Pages → Source** must be set to **GitHub Actions** for the workflow
to publish.

# AGENTS.md

Context for AI agents working in this repository.

## Project

**Plastic Conference** — a single-page, responsive marketing site for a University of Toronto
microplastics conference (Toronto, September 2026). Built with React + Vite. No backend, no router;
it is one scrolling landing page with anchor navigation.

## Tech stack

- **Build tool:** Vite (`vite.config.js` uses `@vitejs/plugin-react`)
- **Framework:** React 18 (`react`, `react-dom`) with `StrictMode`
- **Language:** JavaScript + JSX (no TypeScript)
- **Styling:** A single global stylesheet, `src/styles.css` (plain CSS, no CSS modules or
  Tailwind). Uses CSS custom properties for the palette and Google Fonts (DM Sans, Manrope).
- **Module type:** ESM (`"type": "module"` in package.json)

Dependencies are currently pinned to `latest` in `package.json` — be aware versions are not locked
beyond `package-lock.json`.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start Vite dev server
npm run build    # production build
npm run preview  # preview the production build
```

There is currently **no test framework, linter, or formatter** configured. If adding tests, set up
the ecosystem-standard tooling (e.g. Vitest for a Vite project) and wire it into package.json.

## Layout

```
index.html              # Vite entry, mounts #root, has site <meta>/<title>
src/
  main.jsx              # React entry — createRoot, renders <App/> in StrictMode
  App.jsx               # The homepage (all sections + data arrays) and the hash router
  ProblemStatement.jsx  # The #/problem page
  AboutUs.jsx           # The #/about page ("who we are"), plus the shared <IgemLockup>
  ConferenceNav.jsx     # Shared sticky nav used by every page
  styles.css            # All styling (global)
  assets/               # Imported images (logos, partner art)
public/
  partners/             # Static partner assets (.gitkeep placeholder for now)
```

## How the page is structured

`src/App.jsx` holds everything in one component plus two module-level data arrays:

- `sessions` — the program schedule (`{ time, title, type }`). Rendered into `.session-list`.
  Note: React keys use `session.time`, so duplicate times will collide (there are currently
  duplicate `14:00` / time entries — keep this in mind if editing the schedule).
- `partners` — partner cards (`{ name, description, image, accent }`). `accent` is one of
  `blue` / `orange` / `acid`, matching `.partner-card-<accent>` classes and the CSS color vars.

Page sections (each an anchor target used by the nav): `#top` (hero), `#about` (statement),
`#about-us` (who-we-are block), `#program`, `#speakers`, `#call-for-abstracts`, `#partners`,
`#tickets`. Registration links point to a Google Form.

### Routing

`useHashRoute` in `App.jsx` is a dependency-free hash router. Anything matching `#/` is a
separate page rendered instead of the homepage; everything else is an in-page anchor. Two
routes exist:

- `#/problem` → `<ProblemStatement/>`
- `#/about` → `<AboutUs/>`

Note the deliberate collision-that-isn't: `#about` is the homepage's "Why we gather"
statement section, while `#/about` is the separate iGEM Toronto page. The nav links to both
("About" and "Who We Are"). Keep them distinct when editing.

Pages under `#/` are not separately indexable (crawlers strip fragments), which is why
`public/sitemap.xml` lists only the homepage.

## Conventions

- Keep content/data in the arrays at the top of `App.jsx`; keep markup declarative below.
- Styling goes in `src/styles.css`. Match the existing CSS-variable palette (`--ink`, `--paper`,
  `--acid`, `--blue`, `--orange`) rather than hardcoding colors.
- Keep markup accessible: the existing code uses `aria-label`, `aria-hidden`, and semantic
  landmarks (`header`/`main`/`footer`/`nav`/`section`). Preserve this when editing.
- Imported images live in `src/assets/`; truly static files go in `public/`.

## Known rough edges (as of this writing)

- Several placeholder strings remain ("Name", "September XX–XX", "UofT" brand mark).
- Some typos exist in partner descriptions ("researchs", "blod", "bring together").
- Duplicate `time` values in `sessions` break React's `key` uniqueness.

These are content-level TODOs, not necessarily bugs to fix unprompted.

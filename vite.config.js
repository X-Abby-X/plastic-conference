import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the project from a repository subpath, while Vercel and the local
// development server serve it from the domain root.
export default defineConfig(({ command }) => ({
  base:
    command === 'build' && process.env.GITHUB_ACTIONS
      ? '/plastic-conference/'
      : '/',
  plugins: [react()],
}))

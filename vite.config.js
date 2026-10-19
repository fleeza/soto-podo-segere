import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a GitHub Pages project site, set base to '/NAMA-REPOSITORY/'.
// The workflow below automatically uses the repository name.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}/` : '/',
})
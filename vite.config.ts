import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/RohanPortfolio/',  // your GitHub Pages repo subpath, match your repo name casing
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})

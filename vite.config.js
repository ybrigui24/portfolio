import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build work on GitHub Pages regardless of repo name.
// If you prefer an absolute base, replace it with '/your-repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    sourcemap: true,
  },
})

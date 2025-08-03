import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/isthishenry.com/', // This matches your repository name
  build: {
    outDir: 'dist',
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This assumes you'll use a custom domain
  build: {
    outDir: 'dist',
  },
})
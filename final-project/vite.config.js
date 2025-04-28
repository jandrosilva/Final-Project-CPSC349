import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.otf', '**/*.woff2', '**/*.png'],
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html', 
        projectBreakdown: './project-breakdown.html', 
      }
    }
  }
})
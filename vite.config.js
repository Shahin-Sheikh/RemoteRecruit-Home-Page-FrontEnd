import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2018',
    rollupOptions: {
      output: {
        // Split React into a stable vendor chunk for better long-term caching
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})

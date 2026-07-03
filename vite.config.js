import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',    // Vercel looks here by default
    sourcemap: false,  // Don't expose source in production
    rollupOptions: {
      output: {
        // Split vendor code (React etc.) into a separate chunk for better caching
        // Rolldown (Vite 8) requires manualChunks to be a function
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})


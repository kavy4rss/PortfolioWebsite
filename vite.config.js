import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.WEBP'],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy 3D library into its own chunk
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          // Split animation libraries
          'motion-vendor': ['framer-motion', 'gsap'],
          // Split React + router
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
        },
      },
    },
  },
})

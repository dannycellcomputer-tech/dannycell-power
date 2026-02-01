import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Firebase Hosting sirve desde raíz
  build: {
    outDir: 'dist', // Firebase usa dist por defecto
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    },
    target: 'es2015' // Asegurar compatibilidad
  },
  define: {
    global: 'globalThis' // Evitar problemas con global
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
  },
});

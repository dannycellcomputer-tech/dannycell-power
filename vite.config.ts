import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  }
})
=======
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
    }
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
  },
});
>>>>>>> c5231fc (Update backend to receive title, price, image - Fix Mercado Pago integration)

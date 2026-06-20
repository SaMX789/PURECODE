import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Actualiza el service worker automáticamente
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'masked-icon.svg'], // Archivos estáticos
      manifest: {
        name: 'PureCode',
        short_name: 'PC',
        description: 'Descarga la APP',
        start_url: "/",
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'PureCode192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'PureCode512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: "PureCode512x512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        screenshots: [
          {
            src: "/screenshot-desktop.png", // Reemplaza con tu ruta real
            sizes: "1360x768",                        // Reemplaza con tus dimensiones reales
            type: "image/png",
            form_factor: "wide"                        // Obligatorio para escritorio
          },
          {
            src: "/screenshot-mobile.png",  // Reemplaza con tu ruta real
            sizes: "720x1600",                         // Reemplaza con tus dimensiones reales
            type: "image/png",
            form_factor: "narrow"                      // Obligatorio para móvil
          }
        ]
      }
    }),
  ]
})
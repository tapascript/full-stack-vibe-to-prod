import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    tsconfigPaths: true, // Enables native path resolution
  },
  plugins: [tailwindcss(), TanStackRouterVite(), react()],
})

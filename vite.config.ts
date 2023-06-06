import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "components": path.resolve(__dirname, "./src/components/"),
      "assets": path.resolve(__dirname, "./src/assets/"),
      "fonts": path.resolve(__dirname, "./src/assets/fonts/"),
    },
  },
})

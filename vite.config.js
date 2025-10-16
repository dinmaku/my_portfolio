import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/my_portfolio/',  // Add this line for GitHub Pages deployment
  plugins: [
    vue(),
    tailwind(),
  ],
})
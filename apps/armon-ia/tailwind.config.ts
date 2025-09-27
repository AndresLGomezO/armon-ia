import { defineConfig } from '@armon-ia/theme/tailwind'

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  darkMode: ['class'],
  content: ['./index.html', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
})

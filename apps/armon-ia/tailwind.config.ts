import { defineConfig } from '@armon-ia/theme/tailwind'

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: ['./index.html', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
})

import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const isVercel = process.env.VERCEL === '1'
  const base = isVercel ? '/' : mode === 'production' ? '/armon-ia/' : '/'
  return {
    plugins: [reactRouter(), tsconfigPaths()],
    base: base,
  }
})

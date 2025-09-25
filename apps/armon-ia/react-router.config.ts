import type { Config } from '@react-router/dev/config'

const isVercel = process.env.VERCEL === '1'
const basename = isVercel
  ? '/'
  : process.env.NODE_ENV === 'production'
    ? '/armon-ia/'
    : '/'

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  basename,
  buildDirectory: 'build',
} satisfies Config

import { type RouteConfig, index, layout } from '@react-router/dev/routes'

export default [
  layout('routes/_private.tsx', [index('routes/_private.home.tsx')]),
] satisfies RouteConfig

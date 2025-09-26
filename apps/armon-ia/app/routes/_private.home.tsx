import { ThemeShowcase } from '../welcome/theme-book'
import type { Route } from './+types/_private.home'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Armon-ia' },
    { name: 'description', content: 'Welcome to Armon-ia!' },
  ]
}

export default function Home() {
  return <ThemeShowcase />
}

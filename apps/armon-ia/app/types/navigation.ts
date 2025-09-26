export interface NavigationBadge {
  type: 'text' | 'count'
  value: string | number
}

export interface NavigationItem {
  id: string
  name: string
  href: string
  icon?: string
  permissions: string[]
  badge?: NavigationBadge
  children?: NavigationItem[]
}

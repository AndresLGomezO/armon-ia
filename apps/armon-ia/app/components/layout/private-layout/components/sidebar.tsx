import { memo, useCallback } from 'react'
import { NavLink } from 'react-router'
import { useSidebar } from '~/hooks/use-sidebar'
import type { NavigationItem } from '~/types/navigation'
import { type IconKey, iconMap, navigationItems } from '~/utils/navigation'

const navLinkStyles = {
  base: 'group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
  active: 'bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300',
  inactive:
    'text-charcoal-700 dark:text-cream-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-cream-50 dark:hover:bg-charcoal-800',
} as const

const subNavLinkStyles = {
  base: 'block px-3 py-1.5 text-sm transition-colors duration-200',
  active: 'text-gold-600 dark:text-gold-400 font-medium',
  inactive:
    'text-charcoal-600 dark:text-charcoal-400 hover:text-gold-600 dark:hover:text-gold-400',
} as const

const badgeStyles = {
  count: 'bg-wine-100 dark:bg-wine-900/30 text-wine-700 dark:text-wine-300',
  default: 'bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300',
} as const

const isValidIconKey = (icon: string): icon is IconKey => {
  return icon in iconMap
}

const NavigationIcon = memo<{ icon?: string }>(({ icon }) => {
  if (!icon || !isValidIconKey(icon)) return null

  return <span aria-hidden="true">{iconMap[icon]}</span>
})

const NavigationBadge = memo<{ badge: NavigationItem['badge'] }>(
  ({ badge }) => {
    if (!badge) return null

    const badgeClass =
      badge.type === 'count' ? badgeStyles.count : badgeStyles.default

    return (
      <span className={`px-2 py-0.5 text-xs rounded-full ${badgeClass}`}>
        {badge.value}
      </span>
    )
  }
)

const SubNavigationItem = memo<{ item: NavigationItem }>(({ item }) => (
  <li>
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        `${subNavLinkStyles.base} ${
          isActive ? subNavLinkStyles.active : subNavLinkStyles.inactive
        }`
      }
    >
      {item.name}
    </NavLink>
  </li>
))

const NavigationItem = memo<{ item: NavigationItem }>(({ item }) => {
  const getNavLinkClassName = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      `${navLinkStyles.base} ${
        isActive ? navLinkStyles.active : navLinkStyles.inactive
      }`,
    []
  )

  const navContent = (
    <>
      <div className="flex items-center">
        <NavigationIcon icon={item.icon} />
        <span className={item.icon ? 'ml-3' : ''}>{item.name}</span>
      </div>
      <NavigationBadge badge={item.badge} />
    </>
  )

  if (item.children) {
    return (
      <div className="space-y-1">
        <NavLink to={item.href} className={getNavLinkClassName}>
          {navContent}
        </NavLink>
        <ul className="ml-8 space-y-1" role="list">
          {item.children.map((child) => (
            <SubNavigationItem key={child.name} item={child} />
          ))}
        </ul>
      </div>
    )
  }

  return (
    <NavLink to={item.href} className={getNavLinkClassName}>
      {navContent}
    </NavLink>
  )
})

const SidebarBackdrop = memo<{ onClick: () => void }>(({ onClick }) => (
  <div
    className="fixed inset-0 z-40 bg-charcoal-900/50 backdrop-blur-sm lg:hidden"
    onClick={onClick}
    role="presentation"
    aria-hidden="true"
  />
))

const SidebarFooter = memo(() => (
  <footer className="p-4 border-t border-charcoal-200/20 dark:border-charcoal-800">
    <div className="px-3 py-2">
      <p className="text-xs text-charcoal-400 dark:text-charcoal-500">
        © 2024 ARMONIA
      </p>
      <p className="text-xs text-charcoal-400 dark:text-charcoal-500 mt-1">
        Version 1.0.0
      </p>
    </div>
  </footer>
))

export function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar()

  const sidebarClasses = [
    'fixed top-0 left-0 z-40 h-full w-64',
    'bg-white dark:bg-charcoal-900',
    'border-r border-charcoal-200/20 dark:border-charcoal-800',
    'transform transition-transform duration-300 ease-in-out',
    isOpen ? 'translate-x-0' : '-translate-x-full',
    'lg:translate-x-0 lg:static lg:z-0',
  ].join(' ')

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && <SidebarBackdrop onClick={closeSidebar} />}

      {/* Sidebar */}
      <aside
        className={sidebarClasses}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex flex-col h-full">
          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-1" role="list">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <NavigationItem item={item} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <SidebarFooter />
        </div>
      </aside>
    </>
  )
}

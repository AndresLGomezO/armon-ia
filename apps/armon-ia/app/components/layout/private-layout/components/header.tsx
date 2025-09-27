import { Logo } from '~/components/ui'

import { MobileMenu } from './mobile-menu'
import { SearchToggle } from './search-toggle'
import { SearchBar } from './searchbar'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="bg-white dark:bg-charcoal-900 border-b border-charcoal-200/20 dark:border-charcoal-800 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center">
            {/* Mobile Menu Toggle */}
            <MobileMenu />

            {/* Logo */}
            <Logo />
          </div>

          {/* Center Section - Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Search Toggle (Mobile) */}
            <SearchToggle />

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

import { useSidebar } from '~/hooks'

export const MobileMenu = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      onClick={toggleSidebar}
      className="p-2 rounded-lg text-charcoal-600 dark:text-cream-400 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-charcoal-50 dark:hover:bg-charcoal-800 transition-all duration-200 lg:hidden"
      aria-label="Toggle menu"
    >
      {/* Menu Icon */}
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  )
}

export const SearchToggle = () => {
  return (
    <button className="p-2 rounded-lg text-charcoal-600 dark:text-cream-400 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-charcoal-50 dark:hover:bg-charcoal-800 transition-all duration-200 md:hidden">
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  )
}

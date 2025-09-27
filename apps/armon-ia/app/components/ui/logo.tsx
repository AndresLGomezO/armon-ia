import { Link } from 'react-router'

interface LogoProps {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
  className?: string
}

export function Logo({
  href = '/dashboard',
  size = 'md',
  showTagline = true,
  className = '',
}: LogoProps) {
  const sizes = {
    sm: {
      text: 'text-lg',
      tagline: 'text-[8px]',
      spacing: '-mt-0.5',
    },
    md: {
      text: 'text-xl',
      tagline: 'text-[10px]',
      spacing: '-mt-1',
    },
    lg: {
      text: 'text-3xl',
      tagline: 'text-xs',
      spacing: '-mt-1.5',
    },
  }

  const currentSize = sizes[size]

  const LogoContent = () => (
    <div className={`flex flex-col ${className}`}>
      <span
        className={`${currentSize.text} font-light tracking-wider text-charcoal-800 dark:text-cream-100`}
      >
        ARMONIA
      </span>
      {showTagline && (
        <span
          className={`text-gold-600 dark:text-gold-400 tracking-[0.3em] uppercase ${currentSize.tagline} ${currentSize.spacing}`}
        >
          Modular Furniture
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link
        to={href}
        className="inline-block transition-transform hover:scale-105"
        aria-label="ARMONIA - Home"
      >
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}

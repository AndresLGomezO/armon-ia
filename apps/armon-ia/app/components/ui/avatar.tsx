import { forwardRef, memo, useMemo } from 'react'

// Constants
const AVATAR_SIZES = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
} as const

const STATUS_INDICATOR_SIZES = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  xl: 'w-4 h-4',
} as const

const STATUS_COLORS = {
  online: 'bg-sage-500',
  offline: 'bg-charcoal-400',
  away: 'bg-gold-500',
  busy: 'bg-wine-500',
} as const

// Types
export type AvatarSize = keyof typeof AVATAR_SIZES
export type AvatarStatus = keyof typeof STATUS_COLORS

export interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
  status?: AvatarStatus
  className?: string
  onClick?: () => void
}

interface AvatarGroupProps {
  avatars: Array<{ src?: string; name: string; alt?: string }>
  max?: number
  size?: AvatarSize
  className?: string
}

// Utility functions
function getInitials(name: string): string {
  if (!name || typeof name !== 'string') return ''

  const words = name.trim().split(/\s+/)
  const initials = words
    .map((word) => word[0])
    .filter(Boolean)
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return initials || '?'
}

// Sub-components
const StatusIndicator = memo<{ status: AvatarStatus; size: AvatarSize }>(
  ({ status, size }) => (
    <span
      className={`
        absolute bottom-0 right-0 
        ${STATUS_INDICATOR_SIZES[size]} 
        ${STATUS_COLORS[status]} 
        rounded-full 
        ring-2 ring-white dark:ring-charcoal-900
      `}
      role="status"
      aria-label={`Status: ${status}`}
    />
  )
)

const AvatarImage = memo<{
  src: string
  alt: string
  size: AvatarSize
  className?: string
}>(({ src, alt, size, className }) => (
  <img
    src={src}
    alt={alt}
    className={`${AVATAR_SIZES[size]} ${className} rounded-full object-cover ring-2 ring-white dark:ring-charcoal-900`}
    loading="lazy"
    decoding="async"
  />
))

const AvatarFallback = memo<{
  initials: string
  size: AvatarSize
  className?: string
}>(({ initials, size, className }) => (
  <div
    className={`
      ${AVATAR_SIZES[size]}
      ${className}
      bg-gradient-to-br from-gold-400 to-gold-600 
      rounded-full flex items-center justify-center 
      text-white font-medium select-none
      ring-2 ring-white dark:ring-charcoal-900
    `}
    aria-label={`Avatar with initials ${initials}`}
  >
    {initials}
  </div>
))

export const Avatar = memo(
  forwardRef<HTMLDivElement, AvatarProps>(
    (
      { src, alt, name = '', size = 'md', status, className = '', onClick },
      ref
    ) => {
      const initials = useMemo(() => getInitials(name), [name])
      const altText = alt || name || 'User avatar'

      const avatarContent = (
        <div ref={ref} className={`relative inline-block ${className}`}>
          {src ? (
            <AvatarImage src={src} alt={altText} size={size} />
          ) : (
            <AvatarFallback initials={initials} size={size} />
          )}
          {status && <StatusIndicator status={status} size={size} />}
        </div>
      )

      if (onClick) {
        return (
          <button
            onClick={onClick}
            className="focus:outline-none focus:ring-2 focus:ring-gold-500/50 rounded-full"
            aria-label={`${name || 'User'} avatar button`}
            type="button"
          >
            {avatarContent}
          </button>
        )
      }

      return avatarContent
    }
  )
)

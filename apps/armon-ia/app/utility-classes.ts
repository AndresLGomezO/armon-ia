// Utility Classes - Custom utility classes and component combinations
// This file contains reusable utility class combinations

export const utilityClasses = {
  // Layout Utilities
  layout: {
    container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    section: 'py-12 sm:py-16 lg:py-20',
    grid: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
    flex: 'flex items-center justify-between',
    center: 'flex items-center justify-center',
    stack: 'flex flex-col space-y-4',
    cluster: 'flex flex-wrap gap-2',
  },
  
  // Typography Utilities
  typography: {
    heading: 'text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl',
    subheading: 'text-xl font-semibold text-neutral-900',
    body: 'text-base text-neutral-600',
    caption: 'text-sm text-neutral-500',
    label: 'text-sm font-medium text-neutral-700',
    link: 'text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline',
  },
  
  // Spacing Utilities
  spacing: {
    section: 'py-12 sm:py-16 lg:py-20',
    component: 'p-6',
    element: 'p-4',
    tight: 'p-2',
    loose: 'p-8',
  },
  
  // Color Utilities
  colors: {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
    success: 'bg-success-600 text-white hover:bg-success-700',
    warning: 'bg-warning-600 text-white hover:bg-warning-700',
    error: 'bg-error-600 text-white hover:bg-error-700',
    neutral: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
  },
  
  // Border Utilities
  borders: {
    default: 'border border-neutral-300',
    thick: 'border-2 border-neutral-300',
    dashed: 'border border-dashed border-neutral-300',
    none: 'border-0',
  },
  
  // Shadow Utilities
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    none: 'shadow-none',
  },
  
  // Animation Utilities
  animations: {
    fadeIn: 'animate-fade-in',
    slideIn: 'animate-slide-in',
    bounceIn: 'animate-bounce-in',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
  },
  
  // Responsive Utilities
  responsive: {
    mobile: 'block sm:hidden',
    tablet: 'hidden sm:block lg:hidden',
    desktop: 'hidden lg:block',
    all: 'block',
  },
  
  // Focus Utilities
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    ringError: 'focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2',
    ringSuccess: 'focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2',
  },
  
  // State Utilities
  states: {
    hover: 'hover:bg-neutral-50 hover:text-neutral-900',
    active: 'active:bg-neutral-100 active:text-neutral-900',
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
    loading: 'opacity-50 cursor-wait',
  },
  
  // Size Utilities
  sizes: {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
  },
  
  // Position Utilities
  positions: {
    topLeft: 'absolute top-0 left-0',
    topRight: 'absolute top-0 right-0',
    bottomLeft: 'absolute bottom-0 left-0',
    bottomRight: 'absolute bottom-0 right-0',
    center: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  },
  
  // Overflow Utilities
  overflow: {
    hidden: 'overflow-hidden',
    scroll: 'overflow-auto',
    visible: 'overflow-visible',
  },
  
  // Z-Index Utilities
  zIndex: {
    base: 'z-0',
    dropdown: 'z-10',
    sticky: 'z-20',
    fixed: 'z-30',
    modal: 'z-40',
    popover: 'z-50',
  },
} as const

export type UtilityClasses = typeof utilityClasses

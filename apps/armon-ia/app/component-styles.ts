// Component Styles - Pre-defined component styles using Tailwind classes
// This file contains reusable component style combinations

export const componentStyles = {
  // Button Styles
  button: {
    base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    variants: {
      default: 'bg-primary-600 text-white hover:bg-primary-700',
      destructive: 'bg-error-600 text-white hover:bg-error-700',
      outline: 'border border-neutral-300 bg-transparent hover:bg-neutral-50',
      secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
      ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
      link: 'text-primary-600 underline-offset-4 hover:underline',
    },
    sizes: {
      sm: 'h-9 px-3 rounded-md',
      default: 'h-10 py-2 px-4',
      lg: 'h-11 px-8 rounded-md',
      icon: 'h-10 w-10',
    },
  },
  
  // Input Styles
  input: {
    base: 'flex h-10 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    variants: {
      default: 'border-neutral-300 focus:border-primary-500',
      error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
      success: 'border-success-500 focus:border-success-500 focus:ring-success-500',
    },
  },
  
  // Card Styles
  card: {
    base: 'rounded-lg border bg-white text-neutral-950 shadow-sm',
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'text-2xl font-semibold leading-none tracking-tight',
    description: 'text-sm text-neutral-500',
    content: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0',
  },
  
  // Modal Styles
  modal: {
    overlay: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    content: 'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
    header: 'flex flex-col space-y-1.5 text-center sm:text-left',
    title: 'text-lg font-semibold leading-none tracking-tight',
    description: 'text-sm text-neutral-500',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
  },
  
  // Form Styles
  form: {
    field: 'space-y-2',
    label: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    error: 'text-sm text-error-500',
    help: 'text-sm text-neutral-500',
  },
  
  // Table Styles
  table: {
    wrapper: 'relative w-full overflow-auto',
    base: 'w-full caption-bottom text-sm',
    header: 'border-b',
    headerCell: 'h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0',
    body: '[&_tr:last-child]:border-0',
    row: 'border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100',
    cell: 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
  },
  
  // Navigation Styles
  navigation: {
    base: 'flex items-center space-x-4',
    link: 'text-sm font-medium transition-colors hover:text-primary-600',
    active: 'text-primary-600',
    mobile: 'flex flex-col space-y-2',
  },
  
  // Badge Styles
  badge: {
    base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    variants: {
      default: 'border-transparent bg-primary-600 text-white hover:bg-primary-700',
      secondary: 'border-transparent bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
      destructive: 'border-transparent bg-error-600 text-white hover:bg-error-700',
      outline: 'text-neutral-950',
    },
  },
  
  // Alert Styles
  alert: {
    base: 'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950',
    variants: {
      default: 'bg-white text-neutral-950',
      destructive: 'border-error-500/50 text-error-500 dark:border-error-500 [&>svg]:text-error-500',
      success: 'border-success-500/50 text-success-500 dark:border-success-500 [&>svg]:text-success-500',
      warning: 'border-warning-500/50 text-warning-500 dark:border-warning-500 [&>svg]:text-warning-500',
    },
  },
  
  // Toast Styles
  toast: {
    base: 'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    variants: {
      default: 'border bg-white text-neutral-950',
      destructive: 'destructive group border-error-500 bg-error-500 text-white',
      success: 'border-success-500 bg-success-500 text-white',
      warning: 'border-warning-500 bg-warning-500 text-white',
    },
  },
  
  // Tooltip Styles
  tooltip: {
    base: 'z-50 overflow-hidden rounded-md border bg-white px-3 py-1.5 text-sm text-neutral-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  },
  
  // Dropdown Styles
  dropdown: {
    content: 'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    item: 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    separator: 'my-1 h-px bg-neutral-100',
  },
  
  // Tabs Styles
  tabs: {
    list: 'inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 p-1 text-neutral-500',
    trigger: 'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-950 data-[state=active]:shadow-sm',
    content: 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  },
} as const

export type ComponentStyles = typeof componentStyles

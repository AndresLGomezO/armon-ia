# ARMONIA Design System

A sophisticated design system for modern modular furniture applications that embodies luxury, exclusivity, and timeless elegance.

## Core Design Principles

- **Modern Minimalism**: Clean lines and generous whitespace
- **Luxury & Exclusivity**: Premium feel through careful color and typography choices
- **Distinction**: Unique color palette that stands out in the furniture market
- **Dual Theme Support**: Elegant light and dark modes

## Color Palette

### Primary Colors

#### Charcoal
- **Usage**: Main text, headers, primary UI elements
- **Key shades**:
  - `charcoal-950`: `#1a1b1e` (dark backgrounds)
  - `charcoal-800`: `#323338` (primary buttons, headers)
  - `charcoal-600`: `#484a52` (secondary text)
  - `charcoal-400`: `#777981` (muted text)
  - `charcoal-200`: `#c3c4c9` (borders)
  - `charcoal-50`: `#f6f6f7` (light backgrounds)

#### Gold
- **Usage**: Accents, CTAs, premium features
- **Key shades**:
  - `gold-600`: `#c79548` (primary accent)
  - `gold-500`: `#d9b15c` (buttons, highlights)
  - `gold-400`: `#e5cb84` (hover states)
  - `gold-100`: `#fbf8ed` (light backgrounds)

### Supporting Colors

#### Sage
- **Usage**: Success states, eco-friendly features, nature-inspired elements
- **Key shades**:
  - `sage-600`: `#4d5f4c`
  - `sage-500`: `#637862`
  - `sage-100`: `#e6ebe4`

#### Wine
- **Usage**: Error states, premium badges, special offers
- **Key shades**:
  - `wine-600`: `#bc365a`
  - `wine-500`: `#d15570`
  - `wine-100`: `#fae8ea`

#### Cream
- **Usage**: Warm backgrounds, soft contrasts
- **Key shades**:
  - `cream-500`: `#d5ab82`
  - `cream-300`: `#eedec7`
  - `cream-50`: `#fdfcfa`

### Neutral Colors
- **White**: `#fefefe`
- **Black**: `#0a0a0b`

## Typography

### Font Family
```css
font-family: 'Montserrat', sans-serif;
```

### Font Weights
- `font-thin`: 100 (Display headers)
- `font-light`: 300 (Elegant headers)
- `font-normal`: 400 (Body text)
- `font-medium`: 500 (Subheadings)
- `font-semibold`: 600 (Buttons, emphasis)
- `font-bold`: 700 (Strong emphasis)

### Text Sizes
- `text-xs`: 0.75rem (Labels, captions)
- `text-sm`: 0.875rem (Secondary text)
- `text-base`: 1rem (Body text)
- `text-lg`: 1.125rem (Large body)
- `text-xl`: 1.25rem (H4)
- `text-2xl`: 1.5rem (H3)
- `text-3xl`: 1.875rem (H2)
- `text-4xl`: 2.25rem (H1)
- `text-5xl`: 3rem (Display)
- `text-6xl`: 3.75rem (Hero)

### Letter Spacing
- `tracking-tighter`: -0.05em
- `tracking-tight`: -0.025em
- `tracking-normal`: 0em
- `tracking-wide`: 0.025em
- `tracking-wider`: 0.05em
- `tracking-widest`: 0.1em
- `tracking-[0.3em]`: 0.3em (Brand taglines)

## Spacing System

Based on 4px grid:
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)
- `space-20`: 5rem (80px)

## Component Patterns

### Buttons
```css
/* Primary */
bg-charcoal-800 text-white hover:bg-charcoal-700
px-8 py-3 rounded-lg transition-colors

/* Accent */
bg-gold-500 text-white hover:bg-gold-600
px-8 py-3 rounded-lg transition-colors

/* Outline */
border border-charcoal-300 dark:border-charcoal-600 
text-charcoal-700 dark:text-cream-200
hover:border-charcoal-500 dark:hover:border-charcoal-400
px-8 py-3 rounded-lg transition-colors
```

### Cards
```css
bg-white dark:bg-charcoal-900
border border-charcoal-200/20 dark:border-charcoal-800
rounded-xl p-6 shadow-sm
```

### Backgrounds
```css
/* Light Theme */
bg-cream-50 /* Main background */
bg-white /* Card background */

/* Dark Theme */
bg-charcoal-950 /* Main background */
bg-charcoal-900 /* Card background */
```

### Text Colors
```css
/* Light Theme */
text-charcoal-800 /* Primary text */
text-charcoal-600 /* Secondary text */
text-charcoal-400 /* Muted text */

/* Dark Theme */
text-cream-100 /* Primary text */
text-charcoal-400 /* Secondary text */
text-charcoal-500 /* Muted text */
```

## Border Radius
- `rounded`: 0.25rem
- `rounded-lg`: 0.5rem
- `rounded-xl`: 0.75rem
- `rounded-2xl`: 1rem
- `rounded-3xl`: 1.5rem
- `rounded-full`: 9999px

## Shadows
```css
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

## Special Effects

### Glassmorphism
```css
backdrop-blur-sm bg-white/50 dark:bg-charcoal-900/50
border border-charcoal-200/20 dark:border-charcoal-800
```

### Hover Transitions
```css
transition-all duration-300
transition-colors duration-300
```

## Usage Examples

### Hero Section
```jsx
<h1 className="text-5xl font-light tracking-wider text-charcoal-800 dark:text-cream-100">
  ARMONIA
</h1>
<p className="text-gold-600 dark:text-gold-400 tracking-[0.3em] uppercase text-sm">
  Modular Furniture
</p>
```

### Product Card
```jsx
<div className="bg-white dark:bg-charcoal-900 p-6 rounded-xl border border-charcoal-200/20 dark:border-charcoal-800 shadow-sm">
  <h3 className="text-lg font-medium text-charcoal-800 dark:text-cream-100">
    Product Name
  </h3>
  <p className="text-charcoal-600 dark:text-charcoal-400 mt-2">
    Description
  </p>
</div>
```

### Badge
```jsx
<span className="px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 text-sm rounded-full">
  Premium
</span>
```

## Layout Guidelines

### Container Widths
```css
max-w-sm: 24rem (384px)
max-w-md: 28rem (448px)
max-w-lg: 32rem (512px)
max-w-xl: 36rem (576px)
max-w-2xl: 42rem (672px)
max-w-3xl: 48rem (768px)
max-w-4xl: 56rem (896px)
max-w-5xl: 64rem (1024px)
max-w-6xl: 72rem (1152px)
max-w-7xl: 80rem (1280px)
```

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Form Elements

### Input Fields
```css
/* Base Input */
bg-white dark:bg-charcoal-800
border border-charcoal-200 dark:border-charcoal-700
text-charcoal-800 dark:text-cream-100
placeholder-charcoal-400 dark:placeholder-charcoal-500
rounded-lg px-4 py-3
focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500

/* Error State */
border-wine-500 focus:ring-wine-500/50
```

### Select Dropdowns
```css
bg-white dark:bg-charcoal-800
border border-charcoal-200 dark:border-charcoal-700
text-charcoal-800 dark:text-cream-100
rounded-lg px-4 py-3 pr-10
appearance-none cursor-pointer
```

### Checkboxes & Radios
```css
w-4 h-4
text-gold-500
bg-white dark:bg-charcoal-800
border-charcoal-300 dark:border-charcoal-600
rounded focus:ring-gold-500/50
```

## Navigation Patterns

### Navigation Bar
```css
bg-white dark:bg-charcoal-900
border-b border-charcoal-200/20 dark:border-charcoal-800
shadow-sm
```

### Navigation Links
```css
text-charcoal-700 dark:text-cream-300
hover:text-gold-600 dark:hover:text-gold-400
transition-colors duration-200
font-medium tracking-wide
```

### Active Link
```css
text-gold-600 dark:text-gold-400
border-b-2 border-gold-500
```

## Utility Classes

### Opacity Variants
- `opacity-0`: 0
- `opacity-10`: 0.1
- `opacity-20`: 0.2
- `opacity-50`: 0.5
- `opacity-70`: 0.7
- `opacity-90`: 0.9
- `opacity-100`: 1

### Z-Index Scale
- `z-0`: 0
- `z-10`: 10 (Dropdowns)
- `z-20`: 20 (Sticky elements)
- `z-30`: 30 (Tooltips)
- `z-40`: 40 (Navigation overlays)
- `z-50`: 50 (Modals)

## Animation Guidelines

### Transitions
```css
/* Smooth color transitions */
transition-colors duration-300 ease-in-out

/* All properties */
transition-all duration-300 ease-in-out

/* Transform animations */
transition-transform duration-200 ease-out

/* Opacity fades */
transition-opacity duration-150 ease-in-out
```

### Hover Effects
```css
/* Scale on hover */
hover:scale-105 transition-transform

/* Lift effect */
hover:-translate-y-0.5 hover:shadow-lg transition-all

/* Glow effect */
hover:shadow-gold-500/20 hover:shadow-xl transition-shadow
```

## Icon Guidelines

### Size Classes
- `w-4 h-4`: Small icons (16px)
- `w-5 h-5`: Default icons (20px)
- `w-6 h-6`: Medium icons (24px)
- `w-8 h-8`: Large icons (32px)

### Icon Colors
```css
/* Default */
stroke-charcoal-600 dark:stroke-cream-400

/* Interactive */
stroke-charcoal-600 hover:stroke-gold-600
dark:stroke-cream-400 dark:hover:stroke-gold-400
```

## State Styles

### Disabled
```css
opacity-50 cursor-not-allowed
bg-charcoal-100 dark:bg-charcoal-800
text-charcoal-400 dark:text-charcoal-600
```

### Loading
```css
animate-pulse
bg-charcoal-200 dark:bg-charcoal-700
```

### Focus States
```css
focus:outline-none
focus:ring-2
focus:ring-gold-500/50
focus:border-gold-500
```

## Quick Reference Cheatsheet

### Must-Have Classes for Components

#### Page Container
```jsx
<main className="min-h-screen bg-cream-50 dark:bg-charcoal-950">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
```

#### Section Header
```jsx
<h2 className="text-3xl font-light text-charcoal-800 dark:text-cream-100 mb-8">
  Section Title
</h2>
```

#### Primary Button
```jsx
<button className="px-8 py-3 bg-charcoal-800 text-white rounded-lg hover:bg-charcoal-700 transition-colors font-medium">
  Click Me
</button>
```

#### Product Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Product cards */}
</div>
```

#### Feature Badge
```jsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-sage-100 dark:bg-sage-900/30 text-sage-700 dark:text-sage-300">
  Eco-Friendly
</span>
```

## Do's and Don'ts

### Do's ✓
- Use `charcoal` for primary UI elements
- Apply `gold` sparingly for premium accents
- Maintain consistent spacing (4px grid)
- Use `font-light` or `font-normal` for body text
- Include proper dark mode classes
- Add smooth transitions for interactions

### Don'ts ✗
- Don't use pure black (#000000) - use `black` (#0a0a0b)
- Don't use pure white (#FFFFFF) - use `white` (#fefefe)
- Don't mix different border radius scales
- Don't use more than 2-3 font weights per page
- Don't forget hover states on interactive elements
- Don't use gold as a primary background color

## Implementation Notes

1. **Import Montserrat Font**: Ensure Montserrat is loaded from Google Fonts
2. **Dark Mode**: Use Tailwind's dark mode class strategy
3. **Custom Colors**: Add the color definitions to your Tailwind config
4. **Consistency**: Use the predefined combinations rather than creating new ones
5. **Accessibility**: Maintain WCAG AA contrast ratios, especially with gold on light backgrounds

This design system creates a sophisticated, modern aesthetic perfect for high-end modular furniture applications while maintaining excellent usability and accessibility standards.
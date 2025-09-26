export const baseWhite = '#fefefe' as const

export const baseBlack = '#0a0a0b' as const

export const baseGray = {
  '50': '#fafafa',
  '100': '#f5f5f5',
  '200': '#e5e5e5',
  '300': '#d4d4d4',
  '400': '#a3a3a3',
  '500': '#737373',
  '600': '#525252',
  '700': '#404040',
  '800': '#262626',
  '900': '#171717',
  '950': '#0a0a0a',
} as const

export const baseCharcoal = {
  '50': '#f6f6f7',
  '100': '#e1e2e4',
  '200': '#c3c4c9',
  '300': '#9d9ea5',
  '400': '#777981',
  '500': '#5c5e67',
  '600': '#484a52',
  '700': '#3b3d44',
  '800': '#323338',
  '900': '#2b2c30',
  '950': '#1a1b1e',
} as const

export const baseGold = {
  '50': '#fdfcf8',
  '100': '#fbf8ed',
  '200': '#f6eed4',
  '300': '#efe0b2',
  '400': '#e5cb84',
  '500': '#d9b15c',
  '600': '#c79548',
  '700': '#a7763c',
  '800': '#885e35',
  '900': '#6f4d2e',
  '950': '#3c2817',
} as const

export const baseSage = {
  '50': '#f5f7f4',
  '100': '#e6ebe4',
  '200': '#cfd8cb',
  '300': '#adbaa5',
  '400': '#869880',
  '500': '#637862',
  '600': '#4d5f4c',
  '700': '#3f4d3f',
  '800': '#344034',
  '900': '#2c352c',
  '950': '#161d17',
} as const

export const baseWine = {
  '50': '#fcf4f5',
  '100': '#fae8ea',
  '200': '#f5d4d9',
  '300': '#edb1bc',
  '400': '#e18393',
  '500': '#d15570',
  '600': '#bc365a',
  '700': '#9e294a',
  '800': '#842441',
  '900': '#70223a',
  '950': '#3e0e1c',
} as const

export const baseCream = {
  '50': '#fdfcfa',
  '100': '#fbf7f1',
  '200': '#f6ede0',
  '300': '#eedec7',
  '400': '#e3c7a5',
  '500': '#d5ab82',
  '600': '#c58e65',
  '700': '#a67352',
  '800': '#885d46',
  '900': '#704d3c',
  '950': '#3c271e',
} as const

/**
 * Converts a hex color string to RGB values.
 * Supports both 3-digit and 6-digit formats, with or without leading #.
 * Returns null for invalid hex strings.
 */
export function hexToRgb(hex: string): string | null {
  const hexWithoutHash = hex.replace(/^#/, '')
  const expandedHex =
    hexWithoutHash.length === 3
      ? hexWithoutHash.replace(/./g, '$&$&')
      : hexWithoutHash

  if (!/^[0-9A-F]{6}$/i.test(expandedHex)) {
    return null
  }

  const num = parseInt(expandedHex, 16)
  return [num >> 16, (num >> 8) & 255, num & 255].join(' ')
}

type NestedColor =
  | string
  | {
      [key: string]: NestedColor
    }

/**
 * Transforms a nested Tailwind color object by converting hex values to RGB format
 * with opacity placeholder. Preserves the original structure and invalid values.
 */
export function transformColorsWithOpacity(
  colors: Record<string, string | Record<string, string>>
): Record<string, NestedColor> {
  return Object.entries(colors).reduce(
    (acc, [key, value]) => {
      acc[key] =
        typeof value === 'string'
          ? hexToRgb(value)
            ? `rgb(${hexToRgb(value)} / <alpha-value>)`
            : value
          : transformColorsWithOpacity(value)
      return acc
    },
    {} as Record<string, NestedColor>
  )
}

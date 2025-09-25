export const baseWhite = '#ffffff' as const

export const baseBlack = '#0e0e11' as const

export const baseGray = {
  '50': '#f7f7f8',
  '100': '#ededf1',
  '200': '#d7d8e0',
  '300': '#b5b6c4',
  '400': '#8c8ea4',
  '500': '#6e7189',
  '600': '#595a70',
  '700': '#48495c',
  '800': '#3e3e4e',
  '900': '#373843',
  '950': '#18181b',
} as const

export const baseBlue = {
  '50': '#eff9ff',
  '100': '#def2ff',
  '200': '#b6e8ff',
  '300': '#75d8ff',
  '400': '#2cc5ff',
  '500': '#020202ff',
  '600': '#008bd4',
  '700': '#006eab',
  '800': '#005d8d',
  '900': '#064d74',
  '950': '#04314d',
} as const

export const basePurple = {
  '50': '#fcf4ff',
  '100': '#f8e9fe',
  '200': '#f1d1fd',
  '300': '#e8adfa',
  '400': '#dc7df5',
  '500': '#c94bea',
  '600': '#b02bce',
  '700': '#9520ab',
  '800': '#7b1c8c',
  '900': '#701f7c',
  '950': '#43064c',
} as const

export const baseGreen = {
  '50': '#ecfdf3',
  '100': '#d2f9e0',
  '200': '#a9f1c7',
  '300': '#5be09b',
  '400': '#38cf86',
  '500': '#14b56c',
  '600': '#089357',
  '700': '#077549',
  '800': '#085d3b',
  '900': '#084c32',
  '950': '#032b1c',
} as const

export const baseRed = {
  '50': '#fef4ee',
  '100': '#fee5d6',
  '200': '#fbc7ad',
  '300': '#f99f78',
  '400': '#f56d42',
  '500': '#f2451a',
  '600': '#e32e13',
  '700': '#bd1f11',
  '800': '#961b16',
  '900': '#791a15',
  '950': '#410909',
} as const

export const baseYellow = {
  '50': '#fffeeb',
  '100': '#fdf9c8',
  '200': '#fbf48c',
  '300': '#f9e950',
  '400': '#f8da27',
  '500': '#f2c01c',
  '600': '#d69309',
  '700': '#b16a0c',
  '800': '#905310',
  '900': '#764311',
  '950': '#442304',
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

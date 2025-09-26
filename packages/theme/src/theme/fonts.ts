import plugin from 'tailwindcss/plugin'

export const baseFont = 'Montserrat'

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const

type FontWeight = keyof typeof fontWeights

/**
 * Utility function to generate an object in the form:
 *
 * ```ts
 * {
 *   ".font-thin": {
 *     fontFamily: "var(--custom-font-family-thin, "Some Fallback")",
 *     fontWeight: "var(--custom-font-weight-thin, 100)",
 *   },
 * }
 * ````
 */
function generateFontComponentVariant(variant: string, fallback: number) {
  return {
    [`.font-${variant}`]: {
      fontFamily: `var(--custom-font-family-${variant})`,
      fontWeight: `var(--custom-font-weight-${variant}, ${fallback})`,
    },
  }
}

/**
 * Custom plugin to handle font families/font weights across all platforms
 */
export const fontPlugin = plugin(function ({ addComponents }) {
  addComponents({
    ...Object.fromEntries(
      [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ].flatMap((name) =>
        Object.entries(
          generateFontComponentVariant(
            name,
            fontWeights[name as FontWeight] ?? 400
          )
        )
      )
    ),
  })
})

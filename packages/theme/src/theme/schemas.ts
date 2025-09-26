import isHexColor from 'validator/lib/isHexColor'
import { z } from 'zod'

const themeHexSchema = z
  .string()
  .refine((value) => isHexColor(value) || value === 'transparent', {
    message: 'Color must be a hex value or "transparent"',
  })

const themeColorPaletteSchema = z.object({
  '50': themeHexSchema,
  '100': themeHexSchema,
  '200': themeHexSchema,
  '300': themeHexSchema,
  '400': themeHexSchema,
  '500': themeHexSchema,
  '600': themeHexSchema,
  '700': themeHexSchema,
  '800': themeHexSchema,
  '900': themeHexSchema,
  '950': themeHexSchema,
})

const themeColorsSchema = z.object({
  primary: themeColorPaletteSchema,
  secondary: themeColorPaletteSchema,
  gray: themeColorPaletteSchema,
  charcoal: themeColorPaletteSchema,
  sage: themeColorPaletteSchema,
  gold: themeColorPaletteSchema,
  wine: themeColorPaletteSchema,
  cream: themeColorPaletteSchema,
  white: themeHexSchema,
  black: themeHexSchema,
})

const themeFontSchema = z.object({
  sans: z.string(),
})

export const themeConfigSchema = z.object({
  colors: themeColorsSchema,
  fontFamily: themeFontSchema,
})
export const themeConfigUpdateSchema = z
  .object({
    colors: z
      .object({
        primary: themeColorPaletteSchema.partial().optional(),
        secondary: themeColorPaletteSchema.partial().optional(),
        blue: themeColorPaletteSchema.partial().optional(),
        gray: themeColorPaletteSchema.partial().optional(),
        green: themeColorPaletteSchema.partial().optional(),
        red: themeColorPaletteSchema.partial().optional(),
        yellow: themeColorPaletteSchema.partial().optional(),
        white: themeHexSchema.optional(),
        black: themeHexSchema.optional(),
      })
      .partial(),
    fontFamily: themeFontSchema.partial().optional(),
  })
  .partial()

export type ThemeConfig = z.infer<typeof themeConfigSchema>
export type ThemeConfigUpdate = z.infer<typeof themeConfigUpdateSchema>

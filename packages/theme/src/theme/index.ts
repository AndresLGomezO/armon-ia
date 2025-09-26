import merge from 'lodash.merge'

import {
  baseBlack,
  baseCharcoal,
  baseCream,
  baseGold,
  baseGray,
  baseSage,
  baseWhite,
  baseWine,
} from './colors'
import { baseFont } from './fonts'
import {
  type ThemeConfig,
  type ThemeConfigUpdate,
  themeConfigUpdateSchema,
} from './schemas'

export type Theme = {
  name: string
  config: ThemeConfig
}

export { type ThemeConfig }

export const baseThemeConfig: ThemeConfig = {
  colors: {
    primary: baseCharcoal,
    secondary: baseGold,
    gray: baseGray,
    charcoal: baseCharcoal,
    sage: baseSage,
    wine: baseWine,
    cream: baseCream,
    white: baseWhite,
    black: baseBlack,
    gold: baseGold,
  },
  fontFamily: {
    sans: baseFont,
  },
}

export function createTheme(
  name: string,
  themePartial: ThemeConfigUpdate = {},
  extend: ThemeConfig = baseThemeConfig
) {
  const update = themeConfigUpdateSchema.parse(themePartial)

  return {
    name,
    config: merge({}, extend, update) as ThemeConfig,
  } as Theme
}

const defaultTheme = createTheme('default')

export const themes = [defaultTheme]

import merge from 'lodash.merge'

import {
  baseBlack,
  baseBlue,
  baseGray,
  baseGreen,
  basePurple,
  baseRed,
  baseWhite,
  baseYellow,
} from './colors'
import { baseFontSans } from './fonts'
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
    primary: baseBlue,
    secondary: baseGray,
    gray: baseGray,
    blue: baseBlue,
    green: baseGreen,
    red: baseRed,
    yellow: baseYellow,
    white: baseWhite,
    black: baseBlack,
    purple: basePurple,
  },
  fontFamily: {
    sans: baseFontSans,
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

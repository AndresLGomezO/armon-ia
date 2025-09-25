import merge from 'lodash.merge'
import type { Config } from 'tailwindcss'

import { baseThemeConfig } from '../theme'
import { transformColorsWithOpacity } from '../theme/colors'
import { fontPlugin } from '../theme/fonts'

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

const baseConfig: DeepPartial<Config> = {
  theme: {
    extend: {
      colors: {
        ...transformColorsWithOpacity(
          Object.entries(baseThemeConfig.colors).reduce(
            (acc, [color, palette]) => {
              if (color === 'light' || color === 'dark') {
                return acc
              }

              if (typeof palette === 'string') {
                acc[color] = `var(--custom-colors-${color}, ${palette})`

                return acc
              }

              acc[color] = Object.fromEntries(
                Object.entries(palette).map(([name, value]) => [
                  name,
                  `var(--custom-colors-${color}-${name}, ${value})`,
                ])
              )

              return acc
            },
            {} as Record<string, string | Record<string, string>>
          )
        ),
      },
      fontFamily: {
        ...Object.fromEntries(
          Object.entries(baseThemeConfig.fontFamily).map(([name, value]) => [
            name,
            `var(--custom-font-family-${name}, ${value})`,
          ])
        ),
      },
    },
  },
  corePlugins: {
    fontWeight: false,
  },
}

export function defineConfig(config: DeepPartial<Config> = {}): Config {
  const mergedConfig = merge({}, config, baseConfig) as Config

  mergedConfig.plugins = mergedConfig.plugins ?? []

  mergedConfig.plugins.push(fontPlugin)

  mergedConfig.theme = {
    ...mergedConfig.theme,
    extend: {
      ...mergedConfig.theme?.extend,
      colors: {
        ...mergedConfig.theme?.extend?.colors,
        ...transformColorsWithOpacity(config.theme?.extend?.colors || {}),
      },
    },
  }

  return mergedConfig
}

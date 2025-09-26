import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts', 'src/tailwind.ts'],
  format: ['cjs', 'esm'],
  unbundle: true,
  minify: false,
  sourcemap: true,
  clean: true,
  dts: true,
})

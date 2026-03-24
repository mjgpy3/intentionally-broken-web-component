import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  target: 'es2021',
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  noExternal: ['lit'],
})

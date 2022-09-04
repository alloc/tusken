import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  external: ['tusken/package.json'],
  target: 'node16',
})

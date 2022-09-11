import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      'tusken/config': resolve('src/config.ts'),
      'tusken/array': resolve('src/database/array.ts'),
      tusken: resolve('src/tusken.ts'),
    },
  },
  test: {
    include: ['spec/**/*.spec.ts'],
    globals: true,
    setupFiles: ['spec/db.ts'],
  },
})

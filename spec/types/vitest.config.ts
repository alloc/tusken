import { defineConfig } from 'vitest/config'
import baseConfig from '../../vitest.config'

export default defineConfig({
  ...baseConfig,
  test: {
    include: ['spec/types.spec.ts'],
    globals: true,
    forceRerunTriggers: [
      '**/src/**/*.ts',
      '**/types/*.ts',
      '**/types/tsconfig.json',
    ],
  },
})

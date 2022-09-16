import { defineConfig } from 'vitest/config'
import baseConfig from '../../vitest.config'

export default defineConfig({
  resolve: baseConfig.resolve,
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

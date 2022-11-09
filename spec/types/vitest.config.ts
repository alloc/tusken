import { defineConfig } from 'vitest/config'

export default defineConfig({
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

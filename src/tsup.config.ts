import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    './tusken.ts',
    './config/index.ts',
    './constants.ts',
    './dotenv.ts',
    './zod.ts',
    './postgres/array.ts',
    './plugins/*/**/*.ts',
  ],
  dts: true,
  format: ['esm', 'cjs'],
  target: 'node16',
  splitting: true,
})

import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    client: 'src/client/index.ts',
    codegen: 'src/codegen/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: false,
})

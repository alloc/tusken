import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./tusken', './config', './database/array'],
  externals: ['pg'],
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: { target: 'node16' },
    dts: {
      respectExternal: true,
    },
  },
})

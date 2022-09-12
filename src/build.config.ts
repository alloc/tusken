import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./tusken', './config', './constants', './postgres/array'],
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

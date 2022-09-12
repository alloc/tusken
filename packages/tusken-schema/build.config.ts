import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  externals: ['pg', 'tusken', 'tusken/constants'],
  declaration: true,
  rollup: {
    emitCJS: true,
    esbuild: { target: 'node16' },
    dts: {
      respectExternal: true,
    },
  },
})

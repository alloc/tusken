import { defineBuildConfig } from 'unbuild'

const pkg = require('./package.json')

export default defineBuildConfig({
  entries: ['src/index'],
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

import { defineRuntimePlugin } from 'tusken/config'

export default defineRuntimePlugin({
  imports({ dependencies, config }) {
    if (
      config.clientPlugin.id == 'tusken/plugins/pg' &&
      dependencies['pg-query-stream']
    ) {
      return ['./runtime/stream']
    }
  },
})

import { defineConnectionPlugin } from 'tusken'

export default defineConnectionPlugin({
  defaults(options) {
    if (process.env.E2E) {
      options.database = 'e2e'
    }
    return options
  },
})

import { defineClientPlugin } from 'tusken'
import { TuskenPool } from './pool'

export default defineClientPlugin({
  create(options) {
    return new TuskenPool(options)
  },
})

import { definePlugin } from '@tusken/plugin'

export default definePlugin({
  name: 'count',
  databaseMethods: ['methods/count.ts'],
})

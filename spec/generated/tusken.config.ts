import { defineConfig } from 'tusken/config'

export default defineConfig({
  schemaDir: './',
  connectionPlugin: './tusken-plugin',
  connection: { database: 'test' },
})

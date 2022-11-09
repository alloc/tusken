import { defineConfig } from 'tusken/config'

export default defineConfig({
  dataDir: './postgres',
  schemaDir: './',
  connectionPlugin: './tusken-plugin',
  connection: { database: 'test' },
})

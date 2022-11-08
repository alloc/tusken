import { ConnectOptions, defineConnectionPlugin } from 'tusken'

export default defineConnectionPlugin({
  defaults({ connectionString, ...options }) {
    let result: ConnectOptions
    if (connectionString) {
      result = { connectionString }
    } else {
      const database = process.env.PGDATABASE
      if (database && database.startsWith('postgres://')) {
        result = { connectionString: database }
      } else {
        options.host ||= process.env.PGHOST || 'localhost'
        options.port ||= +(process.env.PGPORT || 5432)
        options.user ||= process.env.PGUSER
        options.database ||= database || 'main'
        result = options
      }
    }
    result.password ||= process.env.PGPASSWORD
    result.key = options.key
    return result
  },
})

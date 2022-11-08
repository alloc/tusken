import type { ConnectOptions } from 'tusken'

export function toConnectionString({
  user,
  password,
  host,
  port,
  database,
  connectionString,
}: ConnectOptions) {
  if (connectionString) {
    return connectionString
  }
  const parts: any[] = ['postgres://']
  if (user || password) {
    parts.push(user || '', password ? `:${password}` : '', '@')
  }
  parts.push(host, ':', port)
  if (database) {
    parts.push('/', database)
  }
  return parts.join('')
}

import { Client } from 'pg'

export function toConnectionString(client: Client) {
  const parts: any[] = ['postgres://']
  if (client.user || client.password) {
    parts.push(
      client.user || '',
      client.password ? `:${client.password}` : '',
      '@'
    )
  }
  parts.push(client.host, ':', client.port)
  if (client.database) {
    parts.push('/', client.database)
  }
  return parts.join('')
}

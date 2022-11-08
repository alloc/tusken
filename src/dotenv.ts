import escalade from './config/escalade/sync'

export function findDotenvFile(load: (options: { path: string }) => void) {
  const envFiles = [
    '.env.tusken',
    '.env.' + (process.env.NODE_ENV || 'development'),
    '.env',
  ]

  const envFile = escalade(process.cwd(), (_, files) =>
    envFiles.find(f => files.includes(f))
  )

  if (envFile) {
    load({ path: envFile })
  }
}

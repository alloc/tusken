import { config as loadDotEnv } from 'dotenv'
import escalade from './escalade/sync'

export function dotenv() {
  const envFiles = [
    '.env.tusken',
    '.env.' + (process.env.NODE_ENV || 'development'),
    '.env',
  ]

  const envPath = escalade(process.cwd(), (dir, files) => {
    const file = envFiles.find(f => files.includes(f))
    if (file) {
      return file
    }
  })

  loadDotEnv({
    path: envPath,
  })
}

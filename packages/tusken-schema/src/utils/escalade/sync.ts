// https://github.com/lukeed/escalade/blob/2477005062cdbd8407afc90d3f48f4930354252b/src/sync.js
import { readdirSync, statSync } from 'fs'
import { dirname, resolve } from 'path'

export default function <T>(
  start: string,
  callback: (directory: string, files: string[]) => T | undefined
): string | undefined {
  let dir = resolve('.', start)
  let stats = statSync(dir)
  if (!stats.isDirectory()) {
    dir = dirname(dir)
  }
  let tmp: any
  while (true) {
    tmp = callback(dir, readdirSync(dir))
    if (tmp !== undefined) return tmp
    dir = dirname((tmp = dir))
    if (tmp === dir) break
  }
}

import { Database } from './core/database'
import { Plugin, plugins } from './core/plugins'

export function registerPlugin(plugin: Plugin) {
  if (!plugin.name) {
    throw Error('Plugin class must be named')
  }
  const superClass = Object.getPrototypeOf(plugin.prototype).constructor
  if (superClass == Database) {
    Object.defineProperties(
      Database.prototype,
      Object.getOwnPropertyDescriptors(plugin.prototype)
    )
  } else {
    if (!plugin.test) {
      plugin.test = value => value instanceof superClass
    }
    plugins.push(plugin)
  }
}

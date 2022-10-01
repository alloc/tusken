import type { Database } from './database'
import { plugins } from './plugins'
import type { Query } from './query'

export type Node = {
  this: any
  callee: Function
  args: any[]
  db?: Database
}

export function getNodeProxy<T extends Query | Database>(node: Node): T {
  const proxy = new Proxy<any>(node, proxyHandler) as T
  proxyMethods.set(proxy, buildPrototype(node))
  return proxy
}

const proxyMethods = new WeakMap<any, any>()
const proxyHandler: ProxyHandler<Node> = {
  get(node, key, proxy) {
    const methods = proxyMethods.get(proxy)
    const method = methods[key]
    if (typeof method == 'function') {
      return (...args: any[]) => {
        return getNodeProxy({
          this: node,
          callee: method,
          args,
          db: node.db,
        })
      }
    }
  },
}

function buildPrototype(node: Node) {
  const constructor = node.queryType || node.dataType!
  const prototype = Object.create(constructor.prototype)
  for (const plugin of plugins) {
    if (plugin.test!(node)) {
      Object.defineProperties(
        prototype,
        Object.getOwnPropertyDescriptors(plugin.class.prototype)
      )
    }
  }
  return prototype
}

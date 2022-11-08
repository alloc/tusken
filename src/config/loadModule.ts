import { resolveExports } from '@alloc/resolve.exports'
import findDependency from 'find-dependency'
import fs from 'fs'
import { Module } from 'module'
import path from 'path'
import vm from 'vm'

const nodeRequire = require
const moduleCache = (Module as any)._cache as Record<
  string,
  InstanceType<typeof Module>
>

/**
 * Resolve a file suffix for the given `filePath` and load the module
 * after transforming its ESM syntax and stripping TS definitions.
 *
 * To reload a module, you must remove it from `require.cache` first.
 */
export function loadModule(
  id: string,
  code?: string | null,
  env?: Record<string, any> | null,
  parent?: InstanceType<typeof Module>
) {
  const filePath = resolveFileSuffix(id)
  if (!filePath) {
    throw Error('File not found: ' + id)
  }

  if (moduleCache[filePath]) {
    return moduleCache[filePath]
  }

  if (filePath.endsWith('.cjs')) {
    nodeRequire(filePath)
    return moduleCache[filePath]
  }

  if (!code) {
    code = fs.readFileSync(filePath, 'utf8')
  }

  const sucrase = nodeRequire('sucrase') as typeof import('sucrase')
  const transformed = sucrase.transform(code, {
    filePath,
    transforms: filePath.endsWith('.ts')
      ? ['imports', 'typescript']
      : ['imports'],
    sourceMapOptions: {
      compiledFilename: path.basename(filePath),
    },
  })

  const mod = new Module(filePath, parent)
  mod.require = Module.createRequire(filePath)
  moduleCache[filePath] = mod

  const require = (id: string) => {
    if (id[0] == '.') {
      id = path.resolve(mod.path, id)
    }
    const resolvedId = resolveFileSuffix(id, mod.path)
    if (resolvedId?.endsWith('.ts')) {
      const loaded = loadModule(resolvedId, null, null, mod)
      return loaded.exports
    }
    return mod.require(resolvedId || id)
  }

  env ||= {}
  env.module = mod
  env.exports = mod.exports
  env.require = Object.assign(require, mod.require)

  const script = new vm.Script(
    `(function(${Object.keys(env)}) { ${transformed.code}\n})` +
      toInlineSourceMap(transformed.sourceMap),
    { filename: filePath }
  )

  const moduleFactory = script.runInThisContext() as Function
  moduleFactory(...Object.values(env))

  return mod
}

const suffixes = ['.js', '.cjs', '.ts']
const dirIndex = path.sep + 'index'

function resolveFileSuffix(filePath: string, cwd?: string): string | null {
  if (filePath[0] != '.' && !path.isAbsolute(filePath[0])) {
    const fileParts = filePath.split('/')
    const pkgName =
      filePath[0] == '@' ? fileParts.slice(0, 2).join('/') : fileParts[0]
    const pkgRoot = findDependency(pkgName, { cwd, skipGlobal: true })
    if (!pkgRoot) {
      return null
    }
    const fileName = fileParts.slice(pkgName[0] == '@' ? 2 : 1)
    const pkg = JSON.parse(
      fs.readFileSync(path.join(pkgRoot, 'package.json'), 'utf8')
    )
    if (pkg.exports) {
      const subPath = ['.', ...fileName].join('/')
      const possibleFiles = resolveExports(pkg, subPath, {
        isRequire: true,
        conditions: ['node'],
      })
      for (const file of possibleFiles) {
        const resolved = resolveFileSuffix(path.join(pkgRoot, file))
        if (resolved) {
          return resolved
        }
      }
      return null
    }
    filePath = path.join(pkgRoot, ...fileName)
  }

  let suffix = suffixes.find(suffix => fs.existsSync(filePath + suffix))
  if (!suffix) {
    try {
      if (fs.statSync(filePath).isFile()) {
        suffix = ''
      } else {
        // Try directory index when all else fails.
        suffix = suffixes.find(suffix =>
          fs.existsSync(filePath + dirIndex + suffix)
        )
        if (suffix) {
          suffix = dirIndex + suffix
        }
      }
    } catch (e: any) {
      if (e.code != 'ENOENT') {
        throw e
      }
    }
  }

  if (suffix != null) {
    return filePath + suffix
  }
  return null
}

function toInlineSourceMap(map: any) {
  return (
    '\n//# ' +
    'sourceMappingURL=data:application/json;charset=utf-8;base64,' +
    Buffer.from(JSON.stringify(map), 'utf8').toString('base64')
  )
}

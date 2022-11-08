import { resolveExports } from '@alloc/resolve.exports'
import findDependency from 'find-dependency'
import fs from 'fs'
import path from 'path'
import { TuskenConfig, TuskenUserConfig } from './config'
import escalade from './escalade/sync'
import { loadModule } from './loadModule'

export function loadConfig(
  configPath?: string
): [config: TuskenConfig, configPath: string | undefined] {
  let configDir = process.cwd()
  let userConfig: TuskenUserConfig

  configPath ||= escalade(configDir, (dir, files) => {
    const file = files.find(f => /^tusken\.config\.[jt]s$/.test(f))
    if (file) {
      return path.join(dir, file)
    }
  })

  if (configPath) {
    configPath = path.resolve(configPath)
    userConfig = loadModule(configPath).exports.default
    if (!userConfig) {
      throw Error('Config must be the default export: ' + configPath)
    }
    configDir = path.dirname(configPath)
    configPath = fs.realpathSync(configPath)
  } else {
    userConfig = {}
  }

  const rootDir = escalade(configDir, (dir, files) => {
    if (files.includes('package.json')) {
      return dir
    }
    if (files.includes('.git')) {
      return false
    }
  })

  if (!rootDir) {
    throw Error('Could not find package.json')
  }

  const pluginSubPaths = [
    './client',
    './connection',
    './runtime',
    './schema',
  ] as const

  type PluginSubPath = typeof pluginSubPaths[number]

  const resolvePluginRoot = (id: string) => {
    if (id[0] != '.') {
      const resolved = findDependency(id, { cwd: configDir, skipGlobal: true })
      if (resolved) {
        return resolved
      }
    }
    return path.resolve(configDir, id)
  }

  const loadPluginData = (id: string) => {
    const root = resolvePluginRoot(id)
    const pkg = JSON.parse(
      fs.readFileSync(path.join(root, 'package.json'), 'utf8')
    )
    return {
      id,
      root,
      subPaths: pluginSubPaths.filter(
        subPath => resolveExports(pkg, subPath).length > 0
      ),
    }
  }

  type PluginData = ReturnType<typeof loadPluginData>

  let clientPlugin: PluginData | undefined
  if (userConfig.clientPlugin) {
    clientPlugin = loadPluginData(userConfig.clientPlugin)
  }

  let connectionPlugin: PluginData | undefined
  if (userConfig.connectionPlugin) {
    connectionPlugin = loadPluginData(userConfig.connectionPlugin)
  }

  const pluginPaths = userConfig.plugins ?? []
  const plugins = Array.from(
    new Set(pluginPaths.flat().filter(Boolean) as string[]),
    loadPluginData
  )

  // This package provides default implementations of the clientPlugin
  // and connectionPlugin.
  const fallback = loadPluginData('tusken/plugins/pg')

  const resolvePluginModule = (
    plugin: PluginData,
    subPath: PluginSubPath,
    assumeValid?: boolean
  ) => {
    if (!assumeValid && !plugin.subPaths.includes(subPath)) {
      throw Error(`Plugin missing a "${subPath}" module: ${plugin.id}`)
    }
    return {
      id: plugin.id,
      subPath,
      modulePath: path.join(plugin.root, subPath),
    }
  }

  const matchFirstPlugin = (subPath: PluginSubPath) =>
    resolvePluginModule(
      plugins.find(p => p.subPaths.includes(subPath)) || fallback,
      subPath,
      true
    )

  const matchPlugins = (subPath: PluginSubPath) =>
    plugins
      .filter(p => p.subPaths.includes(subPath))
      .map(p => resolvePluginModule(p, subPath, true))

  const config: TuskenConfig = {
    rootDir,
    dataDir: userConfig.dataDir
      ? path.resolve(configDir, userConfig.dataDir)
      : path.join(rootDir, 'postgres'),
    schemaDir: userConfig.schemaDir
      ? path.resolve(configDir, userConfig.schemaDir)
      : path.join(rootDir, 'src/generated'),
    connection: userConfig.connection,
    //
    // Plugins
    //
    clientPlugin: clientPlugin
      ? resolvePluginModule(clientPlugin, './client')
      : matchFirstPlugin('./client'),
    connectionPlugin: connectionPlugin
      ? resolvePluginModule(connectionPlugin, './connection')
      : matchFirstPlugin('./connection'),
    runtimePlugins: matchPlugins('./runtime').concat(
      // Always include the fallback runtime plugin.
      resolvePluginModule(fallback, './runtime', true)
    ),
    schemaPlugins: matchPlugins('./schema'),
  }

  return [config, configPath]
}

import path from 'path'
import {
  TuskenProject,
  TuskenResolvedPlugin,
  TuskenRuntimePlugin,
} from './config'
import { loadModule } from './loadModule'

export function loadRuntimePlugin(
  pluginData: TuskenResolvedPlugin,
  project: TuskenProject
) {
  const pluginModule = loadModule(pluginData.modulePath)
  const plugin = pluginModule.exports.default as TuskenRuntimePlugin

  return plugin.imports(project)?.map(id => {
    if (id[0] == '.') {
      return path.resolve(pluginModule.path, id)
    }
    return id
  })
}

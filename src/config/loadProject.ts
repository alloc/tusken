import fs from 'fs'
import path from 'path'
import { TuskenProject } from './config'
import { loadConfig } from './loadConfig'

export function loadProject(configPath?: string): TuskenProject {
  const [config, resolvedConfigPath] = loadConfig(configPath)
  const { dependencies, devDependencies } = JSON.parse(
    fs.readFileSync(path.join(config.rootDir, 'package.json'), 'utf8')
  )

  return {
    dependencies: { ...devDependencies, ...dependencies },
    configPath: resolvedConfigPath,
    config,
  }
}

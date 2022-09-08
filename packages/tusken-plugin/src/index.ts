export type PathPattern = string | RegExp
export type PathOption = PathPattern | PathPattern[]

export interface Plugin {
  name: string
  /**
   * Path to a runtime module that should be re-exported
   * by the generated client.
   */
  entry?: string
  /** Paths to modules that export database methods */
  databaseMethods?: PathOption
  /** Paths to modules that produce schema definitions */
  schemaDefinitions?: PathOption
}

export function definePlugin(plugin: Plugin) {
  return plugin
}

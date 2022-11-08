import type { ConnectOptions } from '../postgres/connection'

interface OptionsWithDefaults {
  /**
   * Where the generated Tusken schema is stored.
   * @default "./src/generated"
   */
  schemaDir?: string
  /**
   * Where the Postgres database is stored.
   * @default "./postgres"
   */
  dataDir?: string
}

type PluginOption = string | false | undefined | PluginOption[]

/**
 * The JS object exported by a `tusken.config.ts` file.
 */
export interface TuskenUserConfig extends OptionsWithDefaults {
  /**
   * Static values to use as default connection options.
   *
   * ⚠️ Do not use `process.env` or other dynamic values here.
   */
  connection?: ConnectOptions
  /**
   * List of package names to load plugins from.
   */
  plugins?: PluginOption[]
  /**
   * Path to a package with a `./client` entry module whose default
   * export is a runtime plugin function that returns a client object
   * responsible for talking to the Postgres server.
   *
   * If this option is undefined, the first plugin in `plugins` with a
   * `./client` entry module will be used. If none is found, then
   * `tusken/plugins/pg` is used by default.
   */
  clientPlugin?: string
  /**
   * Path to a package with a `./connection` entry module whose default
   * export is a runtime plugin function that returns a connection
   * options object.
   *
   * If this option is undefined, the first plugin in `plugins` with a
   * `./connection` entry module will be used. If none is found, then
   * `tusken/plugins/pg` is used by default.
   */
  connectionPlugin?: string
}

export type TuskenResolvedPlugin = {
  /** The plugin's package ID. */
  id: string
  /** The subpath for within the plugin package. */
  subPath: string
  /** Absolute path to the plugin module. */
  modulePath: string
}

/**
 * Configuration loaded from `tusken.config.ts` file.
 */
export interface TuskenConfig extends Required<OptionsWithDefaults> {
  /**
   * The directory where nearest `package.json` lives.
   */
  rootDir: string
  clientPlugin: TuskenResolvedPlugin
  connectionPlugin: TuskenResolvedPlugin
  connection?: ConnectOptions
  /**
   * Runtime plugins are loaded by the `tusken generate` command. Their
   * default export must be a `TuskenRuntimePlugin` object.
   *
   * To provide a runtime plugin, add a `./runtime` entry module to your
   * plugin package.
   */
  runtimePlugins: TuskenResolvedPlugin[]
  /**
   * Schema plugins are loaded by the `tusken generate` command. They
   * typically declare tables, indexes, and other schema objects.
   *
   * To provide a schema plugin, add a `./schema` entry module to your
   * plugin package.
   *
   * @experimental
   */
  schemaPlugins: TuskenResolvedPlugin[]
}

export interface TuskenRuntimePlugin {
  /**
   * The returns list of module IDs can be absolute or relative. When
   * relative, the path is resolved with the `__dirname` of the plugin
   * module.
   *
   * The runtime modules are typically used to declare type definitions
   * and add new methods to classes like `Database` and `Query`, for
   * example.
   */
  imports: (project: TuskenProject) => string[] | undefined
}

/**
 * Used by runtime plugins for conditional imports.
 */
export interface TuskenProject {
  dependencies: Record<string, string>
  config: TuskenConfig
  configPath?: string
}

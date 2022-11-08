import endent from 'endent'
import { extractSchemas, TableColumn } from 'extract-pg-schema'
import path from 'path'
import type { ConnectOptions } from 'tusken'
import {
  loadRuntimePlugin,
  TuskenProject,
  TuskenResolvedPlugin,
} from 'tusken/config'
import { dataToEsm } from '../utils/dataToEsm'
import { serializeImports } from '../utils/imports'
import { __PURE__ } from '../utils/syntax'
import { GeneratedLines } from './generateNativeTypes'
import { reservedWords } from './reservedWords'

const quoted = (s: string) => `"${s}"`
const toExport = (stmt: string) => `export ${stmt}`

const isOptional = (col: TableColumn) =>
  col.isNullable || col.generated != 'NEVER' || col.defaultValue != null

export async function generateTypeSchema(
  project: TuskenProject,
  connection: ConnectOptions,
  nativeTypes: GeneratedLines,
  tuskenId: string
) {
  // TODO: replace pg-extract-schema with our own query
  const { public: schema } = await extractSchemas(connection)

  // TODO: filter the list of reserved words
  const schemaColumns = new Set<string>()
  const schemaTables = new Set<string>()

  const userTypes: GeneratedLines & { refs: string[] } = {
    imports: {
      [tuskenId]: ['makeTableRef', 'RowResult', 'RowType', 'TableRef'],
      './primitives': '* as t',
    },
    lines: [],
    refs: [],
  }

  // Alphabetical order
  schema.tables.sort((a, b) => (a.name > b.name ? 1 : -1))

  for (const table of schema.tables) {
    schemaTables.add(table.name)

    const pkColumns: string[] = []
    const allColumns: string[] = []
    const optionColumns: string[] = []

    for (const col of table.columns) {
      schemaColumns.add(col.name)
      allColumns.push(col.name)
      if (col.isPrimaryKey) {
        pkColumns.push(col.name)
      }
      if (isOptional(col)) {
        optionColumns.push(col.name)
      }
    }

    userTypes.refs.push(
      endent`
        const ${table.name}: TableRef<{
          ${renderColumns(table.columns, true).join('\n')}
        }, "${table.name}", ${JSON.stringify(pkColumns)}, ${
        optionColumns.map(quoted).join(' | ') || '""'
      }> = ${__PURE__} makeTableRef("${table.name}", ${JSON.stringify(
        pkColumns
      )}, {
          ${renderColumns(table.columns).join(',\n')},
        })
      `
    )
    userTypes.lines.push(
      endent`
        interface ${table.name} extends RowResult<RowType<typeof ${table.name}>> {}
      `
    )
  }

  const header = [`import { Database } from "${tuskenId}"`]
  const databaseProps = [
    `reserved: [${reservedWords
      .filter(word => schemaColumns.has(word) || schemaTables.has(word))
      .map(quoted)
      .join(', ')}]`,
  ]

  const nodeModulesId = path.sep + 'node_modules' + path.sep
  const rootDir = project.config.rootDir + path.sep
  const outDir = path.join(project.config.schemaDir, connection.database!)

  const generatePluginImport = (
    specifiers: string,
    pluginPath: string | TuskenResolvedPlugin
  ) => {
    let plugin: TuskenResolvedPlugin | undefined
    if (typeof pluginPath !== 'string') {
      plugin = pluginPath
      pluginPath = plugin.modulePath
    }
    const nodeModulesIndex = pluginPath.lastIndexOf(nodeModulesId)
    if (nodeModulesIndex >= 0) {
      pluginPath = pluginPath.slice(nodeModulesIndex + nodeModulesId.length)
    } else if (pluginPath.startsWith(rootDir)) {
      pluginPath = path.relative(outDir, pluginPath)
    } else if (plugin) {
      pluginPath = path.join(plugin.id, plugin.subPath)
    }
    if (specifiers.trim()) {
      return `import ${specifiers} from "${pluginPath}"`
    }
    return `import "${pluginPath}"`
  }

  header.push(
    generatePluginImport('clientPlugin', project.config.clientPlugin),
    generatePluginImport('connectionPlugin', project.config.connectionPlugin)
  )

  databaseProps.push('clientPlugin', 'connectionPlugin')
  if (project.config.connection) {
    databaseProps.push(
      `connection: ${dataToEsm(project.config.connection, '')}`
    )
  }

  for (const plugin of project.config.runtimePlugins) {
    const imports = loadRuntimePlugin(plugin, project)
    const pluginDir = path.dirname(plugin.modulePath)
    imports?.forEach(id => {
      if (id.startsWith(pluginDir)) {
        id = path.join(plugin.id, path.relative(pluginDir, id))
      }
      header.push(generatePluginImport('', id))
    })
  }

  let envFile: string | undefined
  if (project.dependencies['dotenv']) {
    header.unshift(`import "./env"`)
    envFile = endent`
      import dotenv from "dotenv"
      import { findDotenvFile } from "${tuskenId}/dotenv"

      process.env.CI || findDotenvFile(dotenv.config)
    `
  }

  const indexFile = endent`
    ${header.join('\n')}

    const db = new Database({
      ${databaseProps.join(',\n')},
    })

    export { db as default }
    export * as t from './types'
    export * as pg from './functions'
  `

  const primitivesFile = endent`
    ${serializeImports(nativeTypes.imports).join('\n')}

    ${nativeTypes.lines.join('\n')}
  `

  const tablesFile = endent`
    ${serializeImports(userTypes.imports).join('\n')}

    ${userTypes.refs.map(toExport).join('\n\n')}

    // Materialized row types
    ${userTypes.lines.map(toExport).join('\n')}

    /** Use this instead of \`t[name]\` if you want tree-shaking. */
    export const ref = {
      ${schema.tables.map(table => table.name).join(',\n')},
    }
  `

  const typesFile = endent`
    export * from './tables'
    export * from './primitives'
  `

  const files = [
    { name: 'index.ts', content: indexFile },
    { name: 'types.ts', content: typesFile },
    { name: 'primitives.ts', content: primitivesFile },
    { name: 'tables.ts', content: tablesFile },
  ]

  if (envFile) {
    files.push({ name: 'env.ts', content: envFile })
  }

  return files
}

function renderColumns(columns: TableColumn[], isType?: boolean) {
  return columns.map(col => {
    let type = 't.' + col.informationSchemaValue.udt_name
    if (col.isArray) {
      if (type.startsWith('t._')) {
        type = 't.' + type.slice(3)
      }
      type = isType ? `<${type}>` : `(${type})`
      type = 't.array' + type
    }
    if (col.isNullable) {
      type = isType ? `${type} | t.null` : `t.option(${type})`
    } else if (!isType && isOptional(col)) {
      type = `t.option(${type})`
    }
    return `${col.name}: ${type}`
  })
}

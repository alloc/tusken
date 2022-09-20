import endent from 'endent'
import { Schema, TableColumn } from 'extract-pg-schema'
import { Module } from 'module'
import path from 'path'
import { ClientConfig } from '../config'
import { dataToEsm } from '../utils/dataToEsm'
import { serializeImports } from '../utils/imports'
import { __PURE__ } from '../utils/syntax'
import { GeneratedLines } from './generateNativeTypes'
import { reservedWords } from './reservedWords'

const quoted = (s: string) => `"${s}"`
const toExport = (stmt: string) => `export ${stmt}`

export function generateTypeSchema(
  schema: Schema,
  nativeTypes: GeneratedLines,
  outDir: string,
  config: ClientConfig,
  configPath: string | undefined,
  tuskenId: string
) {
  // TODO: filter the list of reserved words
  const schemaColumns = new Set<string>()
  const schemaTables = new Set<string>()

  const userTypes: GeneratedLines & { refs: string[] } = {
    imports: {
      [tuskenId]: ['makeTableRef', 'ClientValues', 'RowType', 'TableRef'],
      './primitives': '* as t',
    },
    lines: [],
    refs: [],
  }

  // Alphabetical order
  schema.tables.sort((a, b) => (a.name > b.name ? 1 : -1))

  for (const table of schema.tables) {
    schemaTables.add(table.name)

    let pkColumn: string | undefined
    const allColumns: string[] = []
    const optionColumns: string[] = []

    const isOptional = (col: TableColumn) =>
      col.isNullable || col.generated != 'NEVER' || col.defaultValue != null

    for (const col of table.columns) {
      schemaColumns.add(col.name)
      allColumns.push(col.name)
      if (col.isPrimaryKey) {
        pkColumn = col.name
      }
      if (isOptional(col)) {
        optionColumns.push(col.name)
      }
    }

    pkColumn = pkColumn ? quoted(pkColumn) : '""'

    userTypes.refs.push(
      endent`
        const ${table.name}: TableRef<{
          ${renderColumns(table.columns, true).join('\n')}
        }, "${table.name}", ${pkColumn}, ${
        optionColumns.map(quoted).join(' | ') || '""'
      }> = ${__PURE__} makeTableRef("${table.name}", ${pkColumn}, {
          ${renderColumns(table.columns).join(',\n')},
        })
      `
    )
    userTypes.lines.push(
      endent`
        interface ${table.name} extends ClientValues<RowType<typeof ${table.name}>> {}
      `
    )
  }

  const header = [
    `import { Database } from "${tuskenId}"`,
    `import { Pool } from "pg"`,
  ]
  const databaseProps = [
    `reserved: [${reservedWords
      .filter(word => schemaColumns.has(word) || schemaTables.has(word))
      .map(quoted)
      .join(', ')}]`,
  ]

  let configArgument: string
  if (configPath) {
    configPath = path.relative(outDir, configPath).replace(/\.ts$/, '')
    header.push(`import config from "${configPath}"`)
    configArgument = endent`
      { ...config.connection, ...config.pool }
    `
  } else {
    configArgument = dataToEsm(config, '')
  }

  databaseProps.push(endent`
    connect: opts => new Pool({ ...opts${
      configPath ? ', ...config.pool ' : ''
    }}),
    client: process.env.NODE_ENV == 'test'
      ? null! // Set "db.client" in your test setup file.
      : new Pool(${configArgument})
  `)

  if (isPackageInstalled(outDir, 'pg-query-stream')) {
    header.push('import QueryStream from "pg-query-stream"')
    databaseProps.push('QueryStream')
  }

  let dotenvLoader = ''
  if (isPackageInstalled(outDir, 'dotenv')) {
    header.unshift(
      `import dotenv from "dotenv"`,
      `import { findDotenvFile } from "${tuskenId}/dotenv"`
    )
    dotenvLoader = 'process.env.CI || findDotenvFile(dotenv.config)'
    dotenvLoader = '\n' + dotenvLoader + '\n'
  }

  const indexFile = endent`
    ${header.join('\n')}
    ${dotenvLoader}
    export default new Database({
      ${databaseProps.join(',\n')},
    })

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
  `

  const typesFile = endent`
    export * from './tables'
    export * from './primitives'
  `

  return [
    { name: 'index.ts', content: indexFile },
    { name: 'types.ts', content: typesFile },
    { name: 'primitives.ts', content: primitivesFile },
    { name: 'tables.ts', content: tablesFile },
  ]
}

function renderColumns(columns: TableColumn[], isType?: boolean) {
  return columns.map(col => {
    let type = 't.' + col.informationSchemaValue.udt_name
    if (col.isArray) {
      type = isType ? `<${type}>` : `(${type})`
      type = 't.array' + type
    }
    if (isType && col.isNullable) {
      type += ' | t.null'
    }
    return `${col.name}: ${type}`
  })
}

function isPackageInstalled(outDir: string, pkgId: string) {
  const indexRequire = Module.createRequire(path.join(outDir, 'index.ts'))
  try {
    if (indexRequire.resolve(pkgId)) {
      return true
    }
  } catch {}
}

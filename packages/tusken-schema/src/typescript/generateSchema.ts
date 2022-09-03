import endent from 'endent'
import { Schema, TableColumn } from 'extract-pg-schema'
import { Module } from 'module'
import path from 'path'
import { ClientConfig } from '../config'
import { dataToEsm } from '../utils/dataToEsm'
import { mergeImports, serializeImports } from '../utils/imports'
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
    imports: { [tuskenId]: [] },
    lines: [],
    refs: [],
  }

  for (const table of schema.tables) {
    schemaTables.add(table.name)

    let pkColumn: string | undefined
    const allColumns: string[] = []
    const optionColumns: string[] = []

    for (const col of table.columns) {
      schemaColumns.add(col.name)
      allColumns.push(col.name)
      if (col.isPrimaryKey) {
        pkColumn = col.name
      }
      if (col.generated != 'NEVER' || col.defaultValue != null) {
        optionColumns.push(col.name)
      }
    }

    pkColumn = pkColumn ? quoted(pkColumn) : '""'

    userTypes.imports[tuskenId].push('makeTableRef', 'TableRef')
    userTypes.refs.push(
      endent`
        const ${table.name}: ${table.name} = makeTableRef("${
        table.name
      }", [${allColumns.map(quoted).join(', ')}], ${pkColumn})
      `
    )
    userTypes.lines.push(
      endent`
        interface ${table.name} extends TableRef<{
          ${renderColumns(table.columns)}
        }, "${table.name}", ${pkColumn}, ${
        optionColumns.map(quoted).join(' | ') || '""'
      }> {}
      `
    )
  }

  const header = [`import { Database, Pool } from '${tuskenId}'`]
  const databaseProps = [
    `reserved: [${reservedWords
      .filter(word => schemaColumns.has(word) || schemaTables.has(word))
      .map(quoted)
      .join(', ')}]`,
  ]

  if (configPath) {
    configPath = path.relative(outDir, configPath).replace(/\.ts$/, '')
    header.push(`import config from '${configPath}'`)
    databaseProps.push(endent`
      client: process.env.NODE_ENV == 'test'
        ? null! // Set "db.client.query" in your test setup file.
        : new Pool({
            ...config.connection,
            ...config.pool,
          })
    `)
  } else {
    databaseProps.push(endent`
      client: process.env.NODE_ENV == 'test' 
        ? null! // Set "db.client.query" in your test setup file.
        : new Pool(${dataToEsm(config, '')})
    `)
  }

  if (isQueryStreamInstalled(outDir)) {
    header.push('import QueryStream from "pg-query-stream"')
    databaseProps.push('QueryStream')
  }

  const indexFile = endent`
    ${header.join('\n')}

    export default new Database({
      ${databaseProps.join(',\n')},
    })

    export * as t from './types'
    export * as pg from './functions'
  `

  const typesFile = endent`
    ${serializeImports(mergeImports(userTypes.imports, nativeTypes.imports))}

    ${userTypes.refs.map(toExport).join('\n')}

    ${userTypes.lines.map(toExport).join('\n\n')}
    ${nativeTypes.lines.join('\n')}
  `

  return [
    { name: 'index.ts', content: indexFile },
    { name: 'types.ts', content: typesFile },
  ]
}

function renderColumns(columns: TableColumn[]) {
  return columns
    .map(col => {
      const typeName = col.informationSchemaValue.udt_name
      return `${col.name}${col.isNullable ? '?' : ''}: ${typeName}${
        col.isArray ? '[]' : ''
      }`
    })
    .join('\n')
}

function isQueryStreamInstalled(outDir: string) {
  const indexRequire = Module.createRequire(path.join(outDir, 'index.ts'))
  try {
    if (indexRequire.resolve('pg-query-stream')) {
      return true
    }
  } catch {}
}

import endent from 'endent'
import { Schema, TableColumn } from 'extract-pg-schema'
import path from 'path'
import { ClientConfig } from '../config'
import { dataToEsm } from '../utils/dataToEsm'
import { generateNativeTypes } from './generateNativeTypes'
import { reservedWords } from './reservedWords'

const quoted = (s: string) => `"${s}"`
const toExport = (stmt: string) => `export ${stmt}`

export function generateTypeSchema(
  schema: Schema,
  outDir: string,
  config: ClientConfig,
  configPath: string | undefined,
  tuskenId = 'tusken'
) {
  // TODO: filter the list of reserved words
  const nativeTypes = generateNativeTypes()
  const schemaColumns = new Set<string>()
  const schemaTables = new Set<string>()

  const userTypes: string[] = []
  const userExports: string[] = []

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

    userTypes.push(
      endent`
        type ${table.name} = {
          ${renderColumns(table.columns)}
        }
      `
    )
    userExports.push(
      endent`
        const ${table.name}: TableRef<${table.name}, ${
        pkColumn ? quoted(pkColumn) : 'any'
      }, ${optionColumns.map(quoted).join(' | ') || '""'}> = makeTableRef("${
        table.name
      }", [${allColumns.map(quoted).join(', ')}], ${
        pkColumn ? quoted(pkColumn) : 'undefined'
      })
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

  const indexFile = endent`
    ${header.join('\n')}

    export default new Database({
      ${databaseProps.join(',\n')}
    })

    export * as t from './types'
    export * as pg from './functions'
  `

  const typesFile = endent`
    import { makeTableRef, TableRef, Type } from '${tuskenId}'

    ${userExports.map(toExport).join('\n')}

    ${userTypes.map(toExport).join('\n')}
    ${nativeTypes.map(toExport).join('\n')}
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

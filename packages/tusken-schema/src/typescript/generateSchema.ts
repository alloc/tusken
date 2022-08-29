import endent from 'endent'
import { Schema, TableColumn } from 'extract-pg-schema'
import path from 'path'
import { generateNativeTypes } from './generateNativeTypes'
import { reservedWords } from './reservedWords'

const quoted = (s: string) => `"${s}"`
const toExport = (stmt: string) => `export ${stmt}`

export function generateTypeSchema(
  schema: Schema,
  outDir: string,
  configPath: string | undefined
) {
  // TODO: filter the list of reserved words
  const native = generateNativeTypes()
  const schemaColumns = new Set<string>()
  const schemaTables = new Set<string>()

  const userTypes: string[] = []
  const userExports: string[] = []

  for (const table of schema.tables) {
    schemaTables.add(table.name)

    let pkColumn: string | undefined
    const allColumns: string[] = []

    for (const col of table.columns) {
      schemaColumns.add(col.name)
      allColumns.push(col.name)
      if (col.isPrimaryKey) {
        pkColumn = col.name
      }
    }

    userTypes.push(
      endent`
        type ${table.name} = TableType<{
          ${renderColumns(table.columns)}
        }, ${pkColumn ? quoted(pkColumn) : 'never'}>
      `
    )
    userExports.push(
      endent`
        const ${table.name}: ${table.name} = new TableType("${
        table.name
      }", [${allColumns.map(quoted).join(', ')}])
      `
    )
  }

  const header = [`import { Database } from 'tusken'`]
  const databaseProps = [
    `reserved: [${reservedWords
      .filter(word => schemaColumns.has(word) || schemaTables.has(word))
      .map(quoted)
      .join(', ')}]`,
  ]

  if (configPath) {
    configPath = path.relative(outDir, configPath).replace(/\.ts$/, '')
    header.push(`import config from '${configPath}'`)
    databaseProps.unshift(endent`
      client: new Pool({
        ...config.connection,
        ...config.pool,
      })
    `)
  }

  const indexFile = endent`
    ${header.join('\n')}

    export default new Database({
      ${databaseProps.join(',\n')}
    })

    export * as t from './types'
    export * from './functions'
  `

  const typesFile = endent`
    import { Type, TableType, Value } from 'tusken'

    ${userTypes.map(toExport).join('\n')}

    ${userExports.map(toExport).join('\n')}

    ${native.types.map(toExport).join('\n')}

    ${native.exports.map(toExport).join('\n')}
  `

  return [
    { name: 'index.ts', content: indexFile },
    { name: 'types.ts', content: typesFile },
  ]
}

function renderColumns(columns: TableColumn[]) {
  return columns
    .map(col => {
      const typeName = col.type.fullName.replace('pg_catalog.', '')
      const isOptional =
        col.isNullable ||
        col.defaultValue != null ||
        col.type.fullName == 'pg_catalog.serial'

      return `${col.name}${isOptional ? '?' : ''}: ${typeName}`
    })
    .join('\n')
}

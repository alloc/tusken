import { exec } from 'child_process'
import EventEmitter from 'events'
import fs, { mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { StrictEventEmitter } from 'strict-event-emitter-types'
import type { Client, ConnectOptions } from 'tusken'
import { loadClient, loadProject, TuskenProject } from 'tusken/config'
import { promisify } from 'util'
import { extractTypes } from './extract'
import { generateNativeFuncs } from './typescript/generateNativeFuncs'
import { generateNativeTypes } from './typescript/generateNativeTypes'
import { generateTypeSchema } from './typescript/generateSchema'

type Events = {
  extractStart: () => void
  generateStart: () => void
  generateEnd: () => void
  write: () => void
  error: (e: any) => void
}

export interface Generator extends StrictEventEmitter<EventEmitter, Events> {
  client: Client
  connection: ConnectOptions
  /** Generate and write the files. */
  update(): Promise<void>
}

export function generate(options: {
  project?: TuskenProject
  database?: string
  host?: string
  port?: number
  configPath?: string
  tuskenId?: string
}): Generator {
  const project = loadProject(options.configPath)
  const [client, connection] = loadClient(project, {
    database: options.database,
    host: options.host,
    port: options.port,
  })
  if (!connection.database) {
    throw Error('No database specified')
  }
  const outDir = path.join(project.config.schemaDir, connection.database)
  const docs = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../docs.json'), 'utf8')
  )
  const generator = new EventEmitter() as Generator
  generator.client = client
  generator.connection = connection
  generator.update = async () => {
    try {
      generator.emit('extractStart')

      const { nativeTypes, nativeCasts, nativeFuncs } = await extractTypes(
        client
      )

      generator.emit('generateStart')

      const tuskenId = options.tuskenId || 'tusken'
      const files = await generateTypeSchema(
        project,
        connection,
        generateNativeTypes(nativeTypes, nativeCasts, tuskenId),
        tuskenId
      )
      files.push({
        name: 'functions.ts',
        content: generateNativeFuncs(nativeFuncs, docs),
      })
      files.push({
        name: 'schema.sql',
        content: await dumpSqlSchema(connection),
      })

      generator.emit('generateEnd')

      mkdirSync(outDir, { recursive: true })
      for (const file of files) {
        writeFileSync(path.join(outDir, file.name), file.content)
      }

      generator.emit('write')
    } catch (e: any) {
      generator.emit('error', e)
    }
  }
  process.nextTick(() => {
    generator.update().catch(e => {
      generator.emit('error', e)
    })
  })
  return generator
}

async function dumpSqlSchema(opts: ConnectOptions) {
  const env = await getClientEnv(opts)
  const { stdout, stderr } = await promisify(exec)(
    `pg_dump --schema-only -E utf8`,
    { encoding: 'utf8', env }
  )
  if (stderr) {
    console.error(stderr)
  }
  return stdout.replace(/^(--.*?|)\n/gm, '')
}

export async function getClientEnv(opts: ConnectOptions) {
  const env: any = {
    ...process.env,
    PGPASSWORD: opts.password,
    PGDATABASE: opts.connectionString,
  }
  if (!env.PGDATABASE) {
    env.PGDATABASE = opts.database
    env.PGUSER = opts.user
    env.PGHOST = opts.host
    env.PGPORT = opts.port
  }
  return env
}

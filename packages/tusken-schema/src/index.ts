import { exec } from 'child_process'
import EventEmitter from 'events'
import { extractSchemas } from 'extract-pg-schema'
import fs, { mkdirSync, writeFileSync } from 'fs'
import path from 'path'
import { StrictEventEmitter } from 'strict-event-emitter-types'
import { promisify } from 'util'
import { ClientConfig } from './config'
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
  /** Generate and write the files. */
  update(): Promise<void>
}

export function generate(
  outDir: string,
  config: ClientConfig,
  configPath: string | undefined,
  tuskenId = 'tusken'
): Generator {
  const docs = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../docs.json'), 'utf8')
  )
  const generator = new EventEmitter() as Generator
  generator.update = async () => {
    try {
      generator.emit('extractStart')

      const { nativeTypes, nativeCasts, nativeFuncs } = await extractTypes(
        config
      )

      // TODO: replace pg-extract-schema with our own query
      const extracted = await extractSchemas(config)

      generator.emit('generateStart')

      const files = generateTypeSchema(
        extracted.public,
        generateNativeTypes(nativeTypes, nativeCasts, tuskenId),
        outDir,
        config,
        configPath,
        tuskenId
      )
      files.push({
        name: 'functions.ts',
        content: generateNativeFuncs(nativeFuncs, docs),
      })
      files.push({
        name: 'schema.sql',
        content: await dumpSqlSchema(config),
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
  process.nextTick(generator.update)
  return generator
}

async function dumpSqlSchema(conn: ClientConfig) {
  const password =
    typeof conn.password == 'function' ? await conn.password() : conn.password

  const env: any = {
    ...process.env,
    PGPASSWORD: password,
  }

  let database = conn.connectionString
  if (!database) {
    database = conn.database
    env.PGUSER = conn.user
    env.PGHOST = conn.host
    env.PGPORT = conn.port
  }

  const { stdout, stderr } = await promisify(exec)(
    `pg_dump "${database}" --schema-only -E utf8`,
    { encoding: 'utf8', env }
  )

  if (stderr) {
    console.error(stderr)
  }
  return stdout.replace(/^(--.*?|)\n/gm, '')
}

import { getClientEnv } from '@tusken/schema'
import { cac } from 'cac'
import { execSync } from 'child_process'
import chokidar from 'chokidar'
import fs from 'fs'
import { blue, cyan, gray, green } from 'kleur/colors'
import { clear, success } from 'misty'
import { MistyTask, startTask } from 'misty/task'
import path from 'path'
import { Client } from 'pg'
import { loadConfig } from './config'
import { debounce } from './debounce'
import { defer, Deferred } from './defer'
import { firstLine } from './firstline/index'

export default async function () {
  const tusken = cac('tusken')

  tusken
    .command('generate', 'Generate TS types from Postgres schema')
    .option('-c, --config <path>', 'Path to config file')
    .option('-d, --database <name>', 'The database to generate types for')
    .option('-w, --watch', 'Enable watch mode')
    .action(async (options: any) => {
      const { generate } =
        require('@tusken/schema') as typeof import('@tusken/schema')

      let watcher: chokidar.FSWatcher | undefined

      const run = (isRestart?: boolean) => {
        clear()
        const [config, configPath] = loadConfig(
          options.configPath,
          options.database
        )

        const { database } = config.connection

        isRestart && console.log(green('Reloaded the config!'))
        let generator = generate(
          path.join(config.schemaDir, database),
          { ...config.connection, ...config.pool },
          configPath
        )

        let task: MistyTask
        generator
          .on('error', console.error)
          .on('generateStart', () => {
            clear()
            task = startTask('Generating schema...')
          })
          .on('generateEnd', () => {
            task.finish('Schema was updated.')

            const schemaDir = path.relative(process.cwd(), config.schemaDir)
            console.log(
              gray('\nExplore the generated code.') +
                '\n  ' +
                'Functions: ' +
                blue(path.join(schemaDir, database, 'functions.ts')) +
                '\n  ' +
                '    Types: ' +
                cyan(path.join(schemaDir, database, 'types.ts'))
            )
          })

        if (options.watch) {
          let generating: Deferred<void>
          generator
            .on('generateStart', () => {
              generating = defer()
            })
            .on('generateEnd', () => {
              generating.resolve()
              console.log(gray('Watching for changes...'))
              if (!watcher) {
                let shouldRestart = false
                const needUpdate = debounce(200, () => {
                  if (shouldRestart) {
                    run(true)
                  } else {
                    generator.update()
                  }
                })

                watcher = chokidar
                  .watch(config.dataDir, { ignoreInitial: true })
                  .on('all', (_type, file) => {
                    if (file == configPath) {
                      shouldRestart = true
                      return needUpdate()
                    }
                    const fileName = path.relative(config.dataDir, file)
                    if (fileName.startsWith('base/')) {
                      needUpdate()
                    }
                  })

                if (configPath) {
                  watcher.add(configPath)
                }
              }
            })
            .on('error', () => {
              if (configPath) {
                const configWatcher = chokidar
                  .watch(configPath, { ignoreInitial: true })
                  .on('change', () => {
                    configWatcher.close()
                    run(true)
                  })
              } else {
                process.exit(1)
              }
            })
        }
      }

      run()
    })

  tusken
    .command('wipe', 'Delete the public schema and run schema.sql')
    .option('-c, --config <path>', 'Path to config file')
    .option('-d, --database <name>', 'The database to wipe')
    .action(async (options: any) => {
      if (!options.config) {
        console.error('The --config option is required')
        process.exit(1)
      }
      const [config] = loadConfig(options.config, options.database)
      const database = config.connection.database
      const schema = fs.readFileSync(
        path.join(config.schemaDir, database, 'schema.sql'),
        'utf8'
      )
      const client = new Client(config.connection)
      await client.connect()
      await client.query(
        'drop schema public cascade; create schema public; ' + schema
      )
      success('All user data has been wiped.')
      await client.end()
    })

  tusken
    .command('import [...files]', 'Import data into Postgres')
    .option('-c, --config <path>', 'Path to config file')
    .option('-d, --database <name>', 'The database to import into')
    .option('-t, --table <name>', 'The table to import into')
    .option('--noConflicts', 'Fail if a row conflict is found')
    .action(async (files: string[], options: any) => {
      const [config] = loadConfig(options.config, options.database)
      const client = new Client(config.connection)
      await client.connect()

      let affectedCount = 0
      for (const file of files) {
        if (!file.endsWith('.csv')) {
          console.error('Only CSV files are supported: ' + file)
          process.exit(1)
        }

        const task = startTask(
          () => `Importing: ${blue(path.relative(process.cwd(), file))}`
        )
        const header = (await firstLine(file))
          .split(',')
          .map(column => `"${column}"`)

        const tableName = options.table || path.basename(file, '.csv')
        const copyDest = options.noConflicts ? tableName : `${tableName}_tmp`
        const copyCommand =
          `\\copy "${copyDest}"` +
          ` (${header.join(', ')})` +
          ` from '${path.resolve(file)}' with (format csv, header)`

        let preQuery: string | undefined
        let postQuery: string | undefined
        if (!options.noConflicts) {
          preQuery = `create table if not exists "${copyDest}" as table "${tableName}" with no data`
          postQuery =
            `insert into "${tableName}" select * from "${copyDest}" on conflict (${
              header[0]
            }) do update set ${header
              .map(column => `${column} = excluded.${column}`)
              .join(', ')};\n` + `drop table "${copyDest}"`
        }

        try {
          if (preQuery) {
            await client.query(preQuery)
          }

          // Use the \copy command of psql to support remote databases.
          const env = await getClientEnv(config.connection, client.password)
          const result = execSync(
            `psql "${env.PGDATABASE}" -c '${copyCommand}'`,
            { env }
          )

          if (postQuery) {
            await client.query(postQuery)
          }

          const parsedCopyResult = result.toString('utf8').match(/^COPY (\d+)/)
          if (parsedCopyResult) {
            const numCopied = +parsedCopyResult[1]
            affectedCount += numCopied
          }
        } catch (e: any) {
          if (!e.detail) {
            throw e
          }
          console.error(e.table + ': ' + e.detail)
          process.exit(1)
        } finally {
          task.finish()
        }
      }
      await client.end()
      success(`${affectedCount} rows were imported.`)
    })

  tusken.help()
  try {
    tusken.parse(process.argv, { run: false })
    await tusken.runMatchedCommand()
  } catch (e: any) {
    console.error(e)
    process.exit(1)
  }
}

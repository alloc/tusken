import exec from '@cush/exec'
import { getClientEnv } from '@tusken/schema'
import { cac } from 'cac'
import chokidar from 'chokidar'
import dotenv from 'dotenv'
import fs from 'fs'
import { blue, cyan, gray, green } from 'kleur/colors'
import { success } from 'misty'
import { MistyTask, startTask } from 'misty/task'
import path from 'path'
import { loadClient, loadProject } from 'tusken/config'
import { findDotenvFile } from 'tusken/dotenv'
import { toConnectionString } from './connectionString'
import { debounce } from './debounce'
import { defer, Deferred } from './defer'
import { firstLine } from './firstline'

export default async function () {
  const tusken = cac('tusken')

  type GlobalOptions = {
    config?: string
    database?: string
    host?: string
    port?: number
  }

  tusken
    .option('-c, --config <path>', '[string] Path to config file')
    .option('-d, --database <name>', '[string] The database name to use')
    .option('-h, --host <name>', '[string] The host of the Postgres server')
    .option('-p, --port <number>', '[number] The port of the Postgres server')

  tusken
    .command('generate', 'Generate TS types from Postgres schema')
    .option('-w, --watch', '[boolean] Enable watch mode')
    .action(async (options: GlobalOptions & { watch?: boolean }) => {
      const { generate } =
        require('@tusken/schema') as typeof import('@tusken/schema')

      let watcher: chokidar.FSWatcher | undefined

      const run = (isRestart?: boolean) => {
        // clear()

        const project = loadProject(options.config)

        isRestart && console.log(green('Reloaded the config!'))
        let generator = generate({
          project,
          database: options.database,
          host: options.host,
          port: options.port ? +options.port : undefined,
        })

        const { connection } = generator
        if (!connection.database) {
          throw Error('No database specified')
        }

        let task: MistyTask
        generator
          .on('error', error => {
            console.error(error)
            if (!options.watch) {
              process.exit(1)
            }
          })
          .on('generateStart', () => {
            // clear()
            task = startTask('Generating schema...')
          })
          .on('generateEnd', () => {
            task.finish('Schema was updated.')

            let schemaDir = path.join(
              path.relative(process.cwd(), project.config.schemaDir),
              connection.database + '/'
            )
            if (!schemaDir.startsWith('..')) {
              schemaDir = './' + schemaDir
            }

            const grayArrow = gray(' → ')
            console.log(
              gray('\nExplore the generated code.') +
                '\n  ' +
                '   Tables' +
                grayArrow +
                green(schemaDir + 'tables.ts') +
                '\n  ' +
                'Functions' +
                grayArrow +
                blue(schemaDir + 'functions.ts') +
                '\n  ' +
                '    Types' +
                grayArrow +
                cyan(schemaDir + 'primitives.ts')
            )

            generator.client.end()
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
                  .watch(project.config.dataDir, { ignoreInitial: true })
                  .on('all', (_type, file) => {
                    if (file == project.configPath) {
                      shouldRestart = true
                      return needUpdate()
                    }
                    const fileName = path.relative(project.config.dataDir, file)
                    if (fileName.startsWith('base/')) {
                      needUpdate()
                    }
                  })

                if (project.configPath) {
                  watcher.add(project.configPath)
                }
              }
            })
            .on('error', () => {
              if (project.configPath) {
                const configWatcher = chokidar
                  .watch(project.configPath, { ignoreInitial: true })
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
    .action(async (options: GlobalOptions) => {
      if (!options.config) {
        console.error('The --config option is required')
        process.exit(1)
      }
      const project = loadProject(options.config)
      const [client, { database }] = loadClient(project, {
        database: options.database,
        host: options.host,
        port: options.port,
      })
      if (!database) {
        throw Error('No database specified')
      }
      const schema = fs.readFileSync(
        path.join(project.config.schemaDir, database, 'schema.sql'),
        'utf8'
      )
      await client.query(
        'drop schema public cascade; create schema public; ' + schema
      )
      success('All user data has been wiped.')
      await client.end()
    })

  tusken
    .command('import [...files]', 'Import data into Postgres')
    .option('-t, --table <name>', '[string] The table to import into')
    .option('--noConflicts', '[boolean] Fail if a row conflict is found')
    .action(async (files: string[], options: any) => {
      const project = loadProject(options.config)
      const [client, connection] = loadClient(project, {
        database: options.database,
        host: options.host,
        port: options.port,
      })
      if (!connection.database) {
        throw Error('No database specified')
      }

      success('Connected to ' + toConnectionString(connection))

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
          const env = await getClientEnv(connection)
          const result = await exec(
            `psql "${env.PGDATABASE}" -c '${copyCommand}'`,
            { env }
          )

          if (postQuery) {
            await client.query(postQuery)
          }

          const parsedCopyResult = result.match(/^COPY (\d+)/)
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
    findDotenvFile(dotenv.config)
    tusken.parse(process.argv, { run: false })
    await tusken.runMatchedCommand()
  } catch (e: any) {
    console.error(e)
    process.exit(1)
  }
}

# @tusken/cli

> The CLI for [tusken](https://github.com/alloc/tusken) Postgres clients

## Configuration

If no `tusken.config.ts` file is found, a default connection to `localhost:5432` is used. The [environment variables](https://node-postgres.com/features/connecting#environment-variables) used by `node-postgres` are respected.

### `tusken.config.ts`

```ts
import { defineConfig } from 'tusken/config'

export default defineConfig({
  // The directory where the Postgres data directory is found.
  dataDir: './postgres',
  // The directory where the generated client is emitted.
  schemaDir: './src/generated',
  // The Postgres connection options.
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: ' ',
  },
  // The Postgres connection pool options. Same as node-postgres.
  pool: {...},
})
```

## Commands

### `tusken generate`

Generate a database client from a Postgres database.

```
Usage:
  $ tusken generate

Options:
  -c, --config <path>    Path to config file
  -d, --database <name>  The database to generate types for
  -w, --watch            Enable watch mode
  -h, --help             Display this message
```

### `tusken wipe`

Delete all rows in a database's `public` schema.

```
Usage:
  $ tusken wipe

Options:
  -c, --config <path>    Path to config file
  -d, --database <name>  The database to wipe
  -h, --help             Display this message
```

The `--config` argument is **required**, in order to prevent mistakes.

### `tusken import`

Import one or more CSV files into a database.

```
Usage:
  $ tusken import [...files]

Options:
  -c, --config <path>    Path to config file
  -d, --database <name>  The database to import into
  -t, --table <name>     The table to import into
  --noConflicts          Fail if a row conflict is found
  -h, --help             Display this message
```

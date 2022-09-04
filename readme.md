# tusken

Postgres client from a galaxy far, far away.

- your database is the source-of-truth for TypeScript generated types
- type safety for all queries (even subqueries)
  - all built-in Postgres functions are available and type-safe
  - implicit type casts are accounted for
- minimal, intuitive SQL building
  - shortcuts for common tasks (eg: `get`, `put`, and more)
  - identifiers are case-sensitive
- lightweight, largely tree-shakeable
- works with [`@tusken/cli`] to easily import CSV files, wipe data, generate a type-safe client, dump the schema for migrations, and more
- you control the [`pg`] version as a peer dependency
- query streaming with the `.stream` method (just install [`pg-query-stream`] and run `tusken generate`)

[`pg`]: https://www.npmjs.com/package/pg
[`pg-query-stream`]: https://www.npmjs.com/package/pg-query-stream
[`@tusken/cli`]: https://github.com/alloc/tusken/tree/master/packages/tusken-cli

### Migrations?

Use [graphile-migrate](https://github.com/graphile/migrate).

## Install

```sh
pnpm i tusken && pnpm i @tusken/cli -D
```

## Usage

First, you need a `tusken.config.ts` file in your project root, unless you plan on using the default config. By default, the Postgres database is assumed to exist at `./postgres` relative to the working directory (customize with `dataDir` in your config) and the generated types are emitted into the `./src/generated` folder (customize with `schemaDir` in your config).

```ts
import { defineConfig } from 'tusken/config'

export default defineConfig({
  dataDir: './postgres',
  schemaDir: './src/generated',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: ' ',
  },
  pool: {
    /* node-postgres pooling options */
  },
})
```

After running `pnpm tusken generate -d <database>` in your project root, you can import the database client from `./src/db/<database>` as **the default export.**

```ts
import db, { t, pg } from './db/<database>'
```

The `t` export contains your user-defined Postgres tables and many native types. The `pg` export contains your user-defined Postgres functions and many built-in functions.

### Creating, updating, deleting one row

Say we have a basic `user` table like this…

```sql
create table "user" (
  "id" serial primary key,
  "name" text,
  "password" text
)
```

To create a user, use the `put` method…

```ts
// Create a user
await db.put(t.user, { name: 'anakin', password: 'padme4eva' })

// Update a user (merge, not replace)
await db.put(t.user, 1, { name: 'vader', password: 'darkside4eva' })

// Delete a user
await db.put(t.user, 1, null)
```

### Getting a row by primary key

Here we can use the `get` method…

```ts
await db.get(t.user, 1)
```

Selections are supported…

```ts
await db.get(
  t.user(u => [u.name]),
  1
)
```

Selections can have aliases…

```ts
await db.get(
  t.user(u => [{ n: u.name }]),
  1
)

// You can omit the array if you don't mind giving
// everything an alias.
await db.get(
  t.user(u => ({ n: u.name })),
  1
)
```

Selections can contain function calls…

```ts
await db.get(
  t.user(u => ({
    name: pg.upper(u.name),
  })),
  1
)
```

To select all but a few columns…

```ts
await db.get(t.user.omit('id', 'password'), 1)
```

### Inner joins

```ts
// Find all books with >= 100 likes and also get the author of each.
await db.select(t.author).innerJoin(
  t.book.where(book => book.likes.gte(100)),
  (author, book) => author.id.eq(book.authorId)
)
```

&nbsp;

## What's planned?

This is a vague roadmap. Nothing here is guaranteed to be implemented soon, but they will be at some point (contributors welcome).

- `Database#putBatch` method
  - like `.batch` but for batching rows (of the same table) into one `INSERT` query until flushed or the size limit is reached
- transactions
- query streams
  - the CLI will detect if `pg-query-stream` is installed
- `ANY` and `SOME` operators
- math operators
- enum types
- domain types
- composite types
- array-based primary key
- multiple primary keys in one row
- views & [materialized views](https://www.postgresql.org/docs/14/rules-materializedviews.html)
- plugin packages
  - these plugins can do any of:
    - alter your schema
    - seed your database
    - extend the runtime API
  - auto-loading of packages with `tusken-plugin-abc` or `@xyz/tusken-plugin-abc` naming scheme
  - add some new commands
    - `tusken install` (merge plugin schemas into your database)
    - `tusken seed` (use plugins to seed your database)
- `NOTIFY`/`LISTEN` support (just copy `pg-pubsub`?)
- define Postgres functions with TypeScript
- more shortcuts for common tasks

## What could be improved?

This is a list of existing features that aren't perfect yet. If you find a good candidate for this list, please add it and open a PR.

Contributions are extra welcome in these places:

- comprehensive "playground" example
- subquery support is incomplete
  - bug: selectors cannot treat single-column set queries like an array of scalars
- type safety of comparison operators
  - all operators are allowed, regardless of data type
  - see `.where` methods and `is` function
- the `jsonb` type should be generic
  - with option to infer its subtype at build-time from current row data
- missing SQL commands
  - `WITH`
  - `ORDER BY`
  - `GROUP BY`
  - `UPDATE`
  - `MERGE`
  - `USING`
  - `HAVING`
  - `DISTINCT ON`
  - `UNION` / `INTERSECT`
  - `CASE`
  - etc

## Design limitations

- Queries cannot be reused.

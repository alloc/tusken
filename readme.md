# tusken

Postgres client from a galaxy far, far away.

- your database is the source-of-truth for TypeScript generated types
- type safety for all queries (even subqueries)
  - all built-in Postgres functions are available and type-safe
- minimal, intuitive SQL building
- shortcuts for common tasks (eg: `get`, `put`, and more)
- lightweight, largely tree-shakeable
- uses [`pg`] peer dependency (so you control the version)

[`pg`]: https://www.npmjs.com/package/pg

### Migrations?

Use [graphile-migrate](https://github.com/graphile/migrate).

## Usage

```ts
import db, { t, pg } from './db/<database>'
```

After running `pnpm tusken generate ./src/db -d <database>` in your project root, you can import the database client from `./src/db/<database>` as the default export. The `t` export contains your user-defined Postgres tables and many native types. The `pg` export contains your user-defined Postgres functions and many built-in functions.

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

## What's planned?

This is a vague roadmap. Nothing here is guaranteed to be implemented soon, but they will be at some point (contributors welcome).

- non-atomic query batching
  - limit the batch size in bytes or query count
  - each batch is sent automatically when capacity is reached, or you can send manually with `.finish` or `.flush`
- plugin packages
  - these plugins can do any of:
    - alter your schema
    - seed your database
    - extend the runtime API
  - auto-loading of packages with `tusken-plugin-abc` or `@xyz/tusken-plugin-abc` naming scheme
  - add some new commands
    - `tusken install` (merge plugin schemas into your database)
    - `tusken seed` (use plugins to seed your database)
- transactions
- query streams
  - the CLI will detect if `pg-query-stream` is installed
- `NOTIFY`/`LISTEN` support (just copy `pg-pubsub`?)
- define Postgres functions with TypeScript
- more shortcuts for common tasks
- ensure array-based primary keys work as expected

## What could be improved?

This is a list of existing features that aren't perfect yet. If you find a good candidate for this list, please add it and open a PR.

Contributions are extra welcome in these places:

- missing SQL commands
- type safety of comparison operators
  - eg `.where` and `is` (see `src/database/query/check.ts`)
- the `jsonb` type should be generic
  - with option to infer its subtype from current values
- the extracted `pg.` functions would be even better with injected documentation comments

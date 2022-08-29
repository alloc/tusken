# tusken

Postgres client from a galaxy far, far away.

- injects the [`pg`][1] client for you
- uses [`squid`][2] for
- uses [`extract-pg-schema`][3] so the database is the source of truth for a type-safe, generated client

[1]: https://www.npmjs.com/package/pg
[2]: https://www.npmjs.com/package/@ff00ff/mammoth
[3]: https://www.npmjs.com/package/extract-pg-schema

```ts
import { connect } from 'tusken'

// The database types are generated!
import Schema from './tusken/schema'

const db = connect<Schema>({
  /* Connection options */
})

// Reads like SQL
const users = await db.select('id', 'name').from('user')
```

## Tradeoffs vs using `@ff00ff/mammoth` directly

- **Benefits**

  - database schema is the source of truth for TypeScript
  - less verbose
    - no need for `db.table_id.column_id` when selecting from one table
    - some syntax can be inferred from usage
  - the `pg` client is baked in
  - comes with `pg-query-stream`
  - has `NOTIFY`/`LISTEN` support

- **Drawbacks**
  - worse DX for renamed columns
    - you need to do find+replace, which is error prone
    - but who renames columns that often anyways?

## What about migrations?

Use [graphile-migrate](https://github.com/graphile/migrate).

## Restrictions

- `select` clauses must come first
- `where` clauses must come after `innerJoin` calls
- `select` only accepts column keys (nothing special like `count(*)`)
- `count` calls cannot contain conditions

## What's implemented?

- `db.select(...)`

  - key renaming via `{ "old_name": "new_name" }`
  - relative keys when only one table is being selected from
  - absolute keys when 2+ tables are being selected from
  - must use `.from(table_name)` to get a table query
    - only compatible tables are suggested

- `db.table(name)`

  - returns a table query
  - this is how you do `select * from <name>`
  - can be filtered with `.where`
  - can be joined with `.innerJoin`

- `where` filtering

  - keys have auto-completion
  - the result has `and`/`or` methods for multiple conditions

- `innerJoin` support

  - exists as table method
  - accepts a table name and a relation mapping
    ```ts
    db.table('post').innerJoin('user', { id: 'post.author' })
    ```
  - the result has `and`/`or` methods for multiple relations

## What's planned?

- support for built-in function calls everywhere
- Postgres functions written in TypeScript

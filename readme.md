# tusken

Postgres client from a galaxy far, far away.

- injects the [`pg`][1] client for you
- uses [`@ff00ff/mammoth`][2] as query-building core
- uses [`extract-pg-schema`][3] so the database is the source of truth for a type-safe, generated client

[1]: https://www.npmjs.com/package/pg
[2]: https://www.npmjs.com/package/@ff00ff/mammoth
[3]: https://www.npmjs.com/package/extract-pg-schema

## What about migrations?

Use [graphile-migrate](https://github.com/graphile/migrate).

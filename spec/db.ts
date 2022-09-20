import { inspectQuery, Query } from 'tusken'
import { expect } from 'vitest'

export { default, pg, t } from './generated/e2e'

expect.addSnapshotSerializer({
  test: val => val instanceof Query,
  print: val => inspectQuery(val).sql,
})

expect.addSnapshotSerializer({
  test: val => Array.isArray(val) && val.length == 1 && val[0] instanceof Query,
  print: (val, print) => print(inspectQuery(val).tokens),
})

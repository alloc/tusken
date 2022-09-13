import { assert, test, _ } from 'spec.ts'
import { ResolveSelection, Selection } from 'tusken'
import { ColumnRef } from '../../src/postgres/column'
import { SelectedRow } from '../../src/postgres/query/select'
import { db, t } from '../db'

test('db.select => asyncIterator', async () => {
  for await (const user of db.select(t.user)) {
    assert(user, _ as t.user)
  }

  for await (const user of db.select(t.user(u => u.id))) {
    /**
     * The return type of the selector function.
     */
    type Step1 = ColumnRef<t.int4, 'id'>
    /**
     * An object type whose keys are inferred from the selection
     * and whose values are Postgres types.
     */
    type Step2 = ResolveSelection<Step1>
    /**
     * The return type of the `t.user` function call.
     */
    type Step3 = Selection<Step2>
    /**
     * The `db.select` call uses the `SelectedRow` type to merge
     * the union of various selection types (declared by a query)
     * into one object type.
     *
     * In this case, the union has only 1 member (UserSelection).
     */
    type Result = SelectedRow<Step3>
    /**
     * If there's no bugs in the above walkthrough,
     * then this assertion will pass.
     */
    assert(user, _ as Result)
    /**
     * This is the real assertion. The developer expects the
     * `user` variable to be the following:
     */
    assert(user, _ as { id: number })
  }

  for await (const user of db.select(t.user(u => [u.id, u.name]))) {
    assert(user, _ as { id: number; name: string })
  }

  for await (const user of db.select(
    t.user(u => ({ id: u.id, name: u.name }))
  )) {
    assert(user, _ as { id: number; name: string })
  }
})

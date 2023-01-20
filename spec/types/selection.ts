import { assert, describe, test, _ } from 'spec.ts'
import {
  ColumnRef,
  ResolveSelection,
  Select,
  Selectable,
  SelectedRow,
  Selection,
} from 'tusken'
import db, { t } from '../db'

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

describe('table selection', () => {
  test('nullable column', () => {
    const selection = t.user(u => [u.bio])
    /**
     * The returned array should've been resolved
     * into an object type like this.
     */
    type Columns = {
      bio: t.text | t.null
    }
    /**
     * The `selection` object should be this type.
     */
    type Result = Selection<Columns, typeof t.user>
    assert(selection, _ as Result)
  })
})

test('table casting', async () => {
  const selection = t.user(u => {
    const featureFlags = t.featureFlag(u.featureFlags)
    return [
      u.id,
      u.name, //
      featureFlags,
    ]
  })

  const query = db.select(selection)

  type Selected = typeof query extends Select<
    [infer Selected extends Selectable]
  >
    ? Selected
    : never

  type Result = SelectedRow<Selected>

  const results = await query
  assert(results, _ as Result[])
})

test('orderBy with unselected column', () => {
  // Sort by a column that wasn't selected.
  db.select(t.tweet(tweet => [tweet.text, tweet.author])).orderBy({
    desc: 'id',
  })
})

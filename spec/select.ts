import { db, t } from './db'

describe('db.select', () => {
  expect(db.select(t.user).toSql()).toMatchInlineSnapshot()
})

describe('db.put', () => {
  it('can update a row', () => {
    expect(
      db.put(t.user, 1, { name: 'patrick' }).toSql()
    ).toMatchInlineSnapshot()
  })
  it('can insert a row', () => {
    expect(db.put(t.user, { name: 'sandy' }).toSql()).toMatchInlineSnapshot()
  })
  it('can delete a row', () => {
    expect(db.put(t.user, 1, null).toSql()).toMatchInlineSnapshot()
  })
})

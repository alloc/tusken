import { is } from 'tusken'
import { db, pg, t } from './db'

describe('db.select', () => {
  test('select all columns of one table', () => {
    expect(db.select(t.user).render()).toMatchInlineSnapshot(
      '"SELECT * FROM \\"user\\""'
    )
  })
  test('select 2 columns of one table', () => {
    expect(
      db.select(t.user(u => [u.name, u.joinedAt])).render()
    ).toMatchInlineSnapshot('"SELECT name, \\"joinedAt\\" FROM \\"user\\""')
  })
  test('count number of rows in a table', () => {
    expect(db.select(t.user(() => pg.count())).render()).toMatchInlineSnapshot(
      '"SELECT count(\'*\') FROM \\"user\\""'
    )
  })

  describe('.where', () => {
    test('with function call that returns boolean', () => {
      expect(
        db
          .select(t.user)
          .where(user => pg.starts_with(user.bio, 'a'))
          .render()
      ).toMatchInlineSnapshot(
        '"SELECT * FROM \\"user\\" WHERE starts_with(bio, \'a\')"'
      )
    })
    test('AND expression', () => {
      expect(
        db
          .select(t.user)
          .where(user =>
            is(pg.starts_with(user.bio, 'a')).and(pg.length(user.bio)).gt(1)
          )
          .render()
      ).toMatchInlineSnapshot(
        '"SELECT * FROM \\"user\\" WHERE starts_with(bio, \'a\') AND length(bio) > 1"'
      )
    })
  })

  describe('.innerJoin', () => {
    test('merge 3 tables', () => {
      expect(
        db
          .select(t.user)
          .innerJoin(t.tweet, ({ user, tweet }) =>
            user.id.equalTo(tweet.author)
          )
          .innerJoin(t.like, ({ tweet, like }) => tweet.id.equalTo(like.tweet))
          .render()
      ).toMatchInlineSnapshot(
        '"SELECT * FROM \\"user\\" INNER JOIN tweet ON \\"user\\".id = tweet.author INNER JOIN \\"like\\" ON tweet.id = \\"like\\".tweet"'
      )
    })

    test('omit column from a joined table', () => {
      expect(
        db
          .select(t.user)
          .innerJoin(t.tweet.omit('id'), ({ user, tweet }) =>
            user.id.equalTo(tweet.author)
          )
          .render()
      ).toMatchInlineSnapshot(
        '"SELECT \\"user\\".*, author, text FROM \\"user\\" INNER JOIN tweet ON \\"user\\".id = tweet.author"'
      )
    })
  })
})

describe('db.put', () => {
  test('insert a row', () => {
    expect(
      db.put(t.user, { name: 'sandy', joinedAt: pg.now() }).render()
    ).toMatchInlineSnapshot(
      '"INSERT INTO \\"user\\" (name, joinedAt) VALUES (\'sandy\', now())"'
    )
  })
  test('delete a row', () => {
    expect(db.put(t.user, 1, null).render()).toMatchInlineSnapshot(
      '"DELETE FROM \\"user\\" WHERE id = 1"'
    )
  })
  test('update a row', () => {
    expect(
      db.put(t.user, 1, { name: 'patrick' }).render()
    ).toMatchInlineSnapshot(
      '"INSERT INTO \\"user\\" (id, name) VALUES (1, \'patrick\') ON CONFLICT (id) DO UPDATE SET name = excluded.name"'
    )
  })
  test('update multiple rows', async () => {
    expect(
      db.put(t.user, [{ name: 'robin' }, { name: 'bob' }]).render()
    ).toMatchInlineSnapshot(
      '"INSERT INTO \\"user\\" (name) VALUES (\'robin\'), (\'bob\')"'
    )

    // What if a column exists but is undefined?
    expect(
      db.put(t.user, [{ name: 'robin', bio: undefined }]).render()
    ).toMatchInlineSnapshot('"INSERT INTO \\"user\\" (name, bio) VALUES (\'robin\', DEFAULT)"')

    // What if an earlier row is missing a column?
    expect(
      db.put(t.user, [{ name: 'robin' }, { name: 'bob', bio: 'sup' }]).render()
    ).toMatchInlineSnapshot(
      "\"INSERT INTO \\\"user\\\" (name, bio) VALUES ('robin', NULL), ('bob', 'sup')\""
    )

    // What if a later row is missing a column?
    expect(
      db.put(t.user, [{ name: 'robin', bio: 'sup' }, { name: 'bob' }]).render()
    ).toMatchInlineSnapshot(
      "\"INSERT INTO \\\"user\\\" (name, bio) VALUES ('robin', 'sup'), ('bob', NULL)\""
    )

    // What if there's an ON CONFLICT clause?
    expect(
      db
        .put(t.user, [
          { id: 1, name: 'robin' },
          { id: 2, name: 'bob', bio: 'sup' },
        ])
        .render()
    ).toMatchInlineSnapshot(
      "\"INSERT INTO \\\"user\\\" this (id, name, bio) VALUES (1, 'robin', NULL), (2, 'bob', 'sup') ON CONFLICT (id) DO UPDATE SET name = excluded.name, bio = coalesce(excluded.bio, this.bio)\""
    )
  })
})

describe('db.get', () => {
  test('get row by its primary key', () => {
    expect(db.get(t.tweet, 1).render()).toMatchInlineSnapshot(
      '"SELECT * FROM tweet WHERE id = 1 LIMIT 1"'
    )
  })
})

describe('db.find', () => {
  test('get first row to match where clause', () => {
    expect(
      db.find(t.tweet, tweet => tweet.author.equalTo(1)).render()
    ).toMatchInlineSnapshot('"SELECT * FROM tweet WHERE author = 1 LIMIT 1"')
  })
})

describe('db.count', () => {
  test('count rows in a table', () => {
    expect(db.count(t.tweet).render()).toMatchInlineSnapshot(
      '"SELECT COUNT(*) FROM tweet"'
    )
  })
})

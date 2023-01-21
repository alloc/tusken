import { is } from 'tusken'
import db, { pg, t } from './db'

describe('db.select', () => {
  test('select all columns of one table', () => {
    expect(db.select(t.user)).toMatchInlineSnapshot('SELECT * FROM "user"')
  })
  test('select 2 columns of one table', () => {
    expect(db.select(t.user(u => [u.name, u.joinedAt]))).toMatchInlineSnapshot(
      'SELECT name, "joinedAt" FROM "user"'
    )
  })

  describe('with table cast', () => {
    test('in column array', () => {
      expect(
        db.select(t.tweet(tw => [tw.id, tw.text, t.user(tw.author)]))
      ).toMatchInlineSnapshot(
        'SELECT tweet.id, tweet.text, array_agg("user") author FROM tweet INNER JOIN "user" ON "user".id = tweet.author GROUP BY tweet.id'
      )
    })
    test('in alias mapping', () => {
      expect(
        db.select(t.tweet(tw => [tw.id, { user: t.user(tw.author) }]))
      ).toMatchInlineSnapshot(
        'SELECT tweet.id, array_agg("user") "user" FROM tweet INNER JOIN "user" ON "user".id = tweet.author GROUP BY tweet.id'
      )
    })
    test('with selector', () => {
      expect(
        db.select(t.tweet(tw => [tw.id, t.user(tw.author, user => user.name)]))
      ).toMatchInlineSnapshot(
        'SELECT tweet.id, array_agg(("user".name)) author FROM tweet INNER JOIN "user" ON "user".id = tweet.author GROUP BY tweet.id'
      )
    })
    test('an array column with foreign keys', () => {
      expect(
        db.select(t.user(user => [user.id, t.featureFlag(user.featureFlags)]))
      ).toMatchInlineSnapshot(
        'SELECT "user".id, array_agg("featureFlag") "featureFlags" FROM "user" INNER JOIN "featureFlag" ON "featureFlag".id = ANY("user"."featureFlags") GROUP BY "user".id'
      )
    })
    test('with self-join', () => {
      expect(
        db.select(
          t.tweet(tw => [tw.id, t.tweet(tw.replies, reply => reply.id)])
        )
      ).toMatchInlineSnapshot(
        'SELECT tweet.id, array_agg((tweet_2.id)) replies FROM tweet INNER JOIN tweet AS tweet_2 ON tweet_2.id = ANY(tweet.replies) GROUP BY tweet.id'
      )
    })
  })

  describe('.where', () => {
    test('with function call that returns boolean', () => {
      expect(
        db.select(t.user).where(user => pg.starts_with(user.bio, 'a'))
      ).toMatchInlineSnapshot(
        'SELECT * FROM "user" WHERE starts_with(bio, \'a\')'
      )
    })
    test('AND expression', () => {
      expect(
        db
          .select(t.user)
          .where(user =>
            is(pg.starts_with(user.bio, 'a')).and(pg.length(user.bio).is.gt(1))
          )
      ).toMatchInlineSnapshot(
        'SELECT * FROM "user" WHERE starts_with(bio, \'a\') AND length(bio) > 1'
      )
    })
    test('condition grouping', () => {
      expect(
        db
          .select(t.user)
          .where(user => [user.id.is.not.eq(1), user.id.is.not.eq(2)])
      ).toMatchInlineSnapshot('SELECT * FROM "user" WHERE id != 1 AND id != 2')

      expect(
        db
          .select(t.user)
          .where(user =>
            is([
              pg.starts_with(user.bio, 'a'),
              pg.length(user.bio).is.gt(1),
            ]).or([
              pg.starts_with(user.bio, 'b'),
              pg.length(user.bio).is.gte(2),
            ])
          )
      ).toMatchInlineSnapshot(
        'SELECT * FROM "user" WHERE $1 OR starts_with(bio, \'b\') AND length(bio) >= 2'
      )
    })
  })

  describe('.innerJoin', () => {
    test('merge 3 tables', () => {
      expect(
        db
          .select(t.user)
          .innerJoin(t.tweet, ({ user, tweet }) =>
            user.id.is.equalTo(tweet.author)
          )
          .innerJoin(t.like, ({ tweet, like }) =>
            tweet.id.is.equalTo(like.tweet)
          )
      ).toMatchInlineSnapshot(
        'SELECT * FROM "user" INNER JOIN tweet ON "user".id = tweet.author INNER JOIN "like" ON tweet.id = "like".tweet'
      )
    })

    test('omit column from a joined table', () => {
      expect(
        db
          .select(t.user)
          .innerJoin(t.tweet.omit('id'), ({ user, tweet }) =>
            user.id.is.equalTo(tweet.author)
          )
      ).toMatchInlineSnapshot(
        'SELECT "user".*, author, text, replies FROM "user" INNER JOIN tweet ON "user".id = tweet.author'
      )
    })
  })

  describe('.orderBy', () => {
    test('with single column ref', () => {
      expect(
        db.select(t.user).orderBy(user => user.name)
      ).toMatchInlineSnapshot('SELECT * FROM "user" ORDER BY name')
    })
    test('inner join with single column ref', () => {
      expect(
        db
          .select(t.user)
          .innerJoin(t.like, ({ user, like }) =>
            user.id.is.equalTo(like.author)
          )
          .orderBy(({ user }) => user.name)
      ).toMatchInlineSnapshot(
        'SELECT * FROM "user" INNER JOIN "like" ON "user".id = "like".author ORDER BY "user".name'
      )
    })
    test('descending sort', () => {
      expect(
        db.select(t.user).orderBy(user => [{ desc: user.name }])
      ).toMatchInlineSnapshot('SELECT * FROM "user" ORDER BY name DESC')
    })
    test('descending sort, nulls last', () => {
      expect(
        db.select(t.user).orderBy(user => [{ desc: user.name, nulls: 'last' }])
      ).toMatchInlineSnapshot(
        'SELECT * FROM "user" ORDER BY name DESC NULLS LAST'
      )
    })
    test('ascending sort, nulls first', () => {
      expect(
        db.select(t.user).orderBy(user => ({ asc: user.name, nulls: 'first' }))
      ).toMatchInlineSnapshot('SELECT * FROM "user" ORDER BY name NULLS FIRST')
    })
    test('with multiple column refs', () => {
      expect(
        db
          .select(t.user)
          .orderBy(user => [{ desc: user.joinedAt }, { asc: user.id }])
      ).toMatchInlineSnapshot(
        'SELECT * FROM "user" ORDER BY "joinedAt" DESC, id'
      )
    })
    test('with function call', () => {
      expect(
        db.select(t.user).orderBy(user => pg.upper(user.name))
      ).toMatchInlineSnapshot('SELECT * FROM "user" ORDER BY upper(name)')
    })
    test('with selection ref', () => {
      expect(
        db.select(t.user(user => pg.upper(user.name))).orderBy('upper')
      ).toMatchInlineSnapshot('SELECT upper(name) FROM "user" ORDER BY upper')
    })
  })

  describe('.union', () => {
    test('simplest case', () => {
      expect(
        db
          .select(t.user)
          .where(user => user.id.is.eq(1))
          .union(db.select(t.user).where(user => user.id.is.eq(2)))
      ).toMatchInlineSnapshot(
        '(SELECT * FROM "user" WHERE id = 1) UNION (SELECT * FROM "user" WHERE id = 2)'
      )
    })

    test('double union', () => {
      expect(
        db
          .select(t.user)
          .where(user => user.id.is.eq(1))
          .union(db.select(t.user).where(user => user.id.is.eq(2)))
          .union(db.select(t.user).where(user => user.id.is.eq(3)))
      ).toMatchInlineSnapshot(
        '(SELECT * FROM "user" WHERE id = 1) UNION (SELECT * FROM "user" WHERE id = 2) UNION (SELECT * FROM "user" WHERE id = 3)'
      )
    })

    test('with order by', () => {
      expect(
        db
          .select(t.user)
          .where(user => user.id.is.eq(1))
          .union(db.select(t.user).where(user => user.id.is.eq(2)))
          .orderBy(user => user.id)
      ).toMatchInlineSnapshot(
        '(SELECT * FROM "user" WHERE id = 1) UNION (SELECT * FROM "user" WHERE id = 2) ORDER BY id'
      )
    })

    test('with wrap method', () => {
      expect(
        db
          .select(t.user)
          .where(user => user.bio.is.not.eq(null))
          .wrap(users => {
            return users
              .orderBy(user => user.joinedAt)
              .limit(1)
              .union(users.orderBy(user => user.name).limit(2))
          })
      ).toMatchInlineSnapshot(
        '(SELECT * FROM "user" WHERE bio IS NOT NULL ORDER BY "joinedAt" LIMIT 1) UNION (SELECT * FROM "user" WHERE bio IS NOT NULL ORDER BY name LIMIT 2)'
      )
    })
  })
})

describe('db.put', () => {
  test('insert a row', () => {
    expect(
      db.put(t.user, { name: 'sandy', joinedAt: pg.now() })
    ).toMatchInlineSnapshot(
      'INSERT INTO "user" (name, "joinedAt") VALUES (\'sandy\', now())'
    )
  })
  test('delete a row', () => {
    expect(db.put(t.user, 1, null)).toMatchInlineSnapshot(
      'DELETE FROM "user" WHERE id = 1'
    )
  })
  test('update a row', () => {
    expect(db.put(t.user, 1, { name: 'patrick' })).toMatchInlineSnapshot(
      'UPDATE "user" SET name = \'patrick\' WHERE "user".id = $1'
    )
    expect(db.put(t.user, 1, { id: 2, name: 'shannon' })).toMatchInlineSnapshot(
      'UPDATE "user" SET id = 2, name = \'shannon\' WHERE "user".id = $1'
    )
    expect(db.put(t.user, 1, { bio: 'sup' })).toMatchInlineSnapshot(
      'UPDATE "user" SET bio = \'sup\' WHERE "user".id = $1'
    )
  })
  describe('insert/update multiple rows', async () => {
    test('basic case', () => {
      expect(
        db.put(t.user, [{ name: 'robin' }, { name: 'bob' }])
      ).toMatchInlineSnapshot(
        "INSERT INTO \"user\" (name) VALUES ('robin'), ('bob')"
      )
    })

    test('undefined column value', () => {
      expect(
        db.put(t.user, [{ name: 'robin', bio: undefined }])
      ).toMatchInlineSnapshot(
        'INSERT INTO "user" (name, bio) VALUES (\'robin\', DEFAULT)'
      )
    })

    test('earlier row missing a column that later row has', () => {
      expect(
        db.put(t.user, [{ name: 'robin' }, { name: 'bob', bio: 'sup' }])
      ).toMatchInlineSnapshot(
        "INSERT INTO \"user\" (name, bio) VALUES ('robin', NULL), ('bob', 'sup')"
      )
    })

    test('later row missing a column that earlier row has', () => {
      expect(
        db.put(t.user, [{ name: 'robin', bio: 'sup' }, { name: 'bob' }])
      ).toMatchInlineSnapshot(
        "INSERT INTO \"user\" (name, bio) VALUES ('robin', 'sup'), ('bob', NULL)"
      )
    })

    test('insertion with potential row conflict', () => {
      expect(
        db.put(t.user, [
          { id: 1, name: 'robin' },
          { id: 2, name: 'bob', bio: 'sup' },
        ])
      ).toMatchInlineSnapshot(
        "INSERT INTO \"user\" this (id, name, bio) VALUES (1, 'robin', NULL), (2, 'bob', 'sup') ON CONFLICT (id) DO UPDATE SET name = excluded.name, bio = coalesce(excluded.bio, this.bio)"
      )
    })

    test('missing a required column', () => {
      // If a row is missing a non-optional column, an UPDATE command
      // must be used, and the row is assumed to exist.
      expect(
        db.put(t.user, [
          { id: 1, bio: 'howdy' },
          { id: 2, bio: 'sup' },
        ])
      ).toMatchInlineSnapshot(
        'UPDATE "user" SET bio = new.bio FROM (VALUES (1, \'howdy\'), (2, \'sup\')) AS new (id, bio) WHERE "user".id = new.id'
      )
    })
  })
})

describe('db.get', () => {
  test('get row by its primary key', () => {
    expect(db.get(t.tweet, 1)).toMatchInlineSnapshot(
      'SELECT * FROM tweet WHERE id = 1 LIMIT 1'
    )
  })
})

describe('db.find', () => {
  test('get first row to match where clause', () => {
    expect(
      db.find(t.tweet, tweet => tweet.author.is.equalTo(1))
    ).toMatchInlineSnapshot('SELECT * FROM tweet WHERE author = 1 LIMIT 1')
  })
})

describe('db.count', () => {
  test('count rows in a table', () => {
    expect(db.count(t.tweet)).toMatchInlineSnapshot(
      'SELECT COUNT(*) FROM tweet'
    )
  })
})

test('reusable query', async () => {
  const query = db.select(t.user)
  expect([query.limit(1), query.limit(2)]).toMatchInlineSnapshot(`
    [
      SELECT * FROM "user" LIMIT 1,
      SELECT * FROM "user" LIMIT 2,
    ]
  `)
})

test('template function', () => {
  expect(
    db.select(t.user(user => [pg.extract('year', user.joinedAt)]))
  ).toMatchInlineSnapshot('SELECT extract(year FROM "joinedAt") FROM "user"')
})

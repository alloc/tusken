import db, { t } from './db'

test('equal check with array of ids', async () => {
  expect(await db.select(t.user(u => u.name)).where(u => u.id.is.eq([1, 2])))
    .toMatchInlineSnapshot(`
      [
        {
          "name": "alec",
        },
        {
          "name": "anakin",
        },
      ]
    `)
})

describe('composite keys', () => {
  const createRows = async () => {
    await db.put(t.foo, { id: 1, id2: 1, json: 'hey' })
    await db.put(t.foo, [
      { id: 1, id2: 2, json: 'there' },
      { id: 1, id2: 3, json: 'friend' },
    ])
  }
  test('put', async () => {
    let error: any
    await createRows().catch(e => {
      error = e
    })
    expect(error).toBeUndefined()
  })
  test('get', async () => {
    // [Bad] Key argument should be an object.
    // @ts-expect-error 2345
    expect(() => db.get(t.foo, 1)).toThrowErrorMatchingInlineSnapshot(
      '"Primary key of \\"foo\\" is composite"'
    )

    // [Bad] Incomplete key object.
    // @ts-expect-error 2345
    expect(() => db.get(t.foo, { id: 1 })).toThrowErrorMatchingInlineSnapshot(
      '"\\"id2\\" is a primary key column of \\"foo\\" but was not defined"'
    )

    await createRows()
    expect(await db.get(t.foo, { id: 100, id2: 1 })).toBeNull()
    expect(await db.get(t.foo, { id: 1, id2: 1 })).toMatchInlineSnapshot(`
      {
        "id": 1,
        "id2": 1,
        "json": "hey",
        "jsonb": null,
      }
    `)
  })
  test('delete', () => {})
})

describe('resolve a column that references another table', () => {
  test('single id', async () => {
    expect(
      await db
        .select(t.tweet(tweet => [tweet.text, t.user(tweet.author)]))
        .limit(1)
    ).toMatchInlineSnapshot(`
      [
        {
          "author": {
            "bio": "You underestimate my power!",
            "featureFlags": [
              1,
            ],
            "id": 2,
            "joinedAt": 2022-09-17T17:47:45.350Z,
            "name": "anakin",
          },
          "text": "I've got a bad feeling about this.",
        },
      ]
    `)
  })

  test('array of ids', async () => {
    expect(
      await db
        .select(t.user(u => [u.id, u.name, t.featureFlag(u.featureFlags)]))
        .limit(1)
    ).toMatchInlineSnapshot(`
      [
        {
          "featureFlags": [
            {
              "enabled": true,
              "id": 1,
            },
          ],
          "id": 2,
          "name": "anakin",
        },
      ]
    `)
  })

  test('with selector', async () => {
    // One selected columns
    expect(
      await db
        .select(t.tweet(tweet => t.user(tweet.author, author => author.name)))
        .limit(1)
    ).toMatchInlineSnapshot(`
      [
        {
          "author": {
            "name": "anakin",
          },
        },
      ]
    `)

    // Many selected columns
    expect(
      await db
        .select(
          t.tweet(tweet =>
            t.user(tweet.author, author => [author.id, author.name])
          )
        )
        .limit(1)
    ).toMatchInlineSnapshot(`
      [
        {
          "author": {
            "id": 2,
            "name": "anakin",
          },
        },
      ]
    `)

    // Alias mapping
    expect(
      await db
        .select(
          t.tweet(tweet =>
            t.user(tweet.author, author => ({
              _id: author.id,
              alias: author.name,
            }))
          )
        )
        .limit(1)
    ).toMatchInlineSnapshot(`
      [
        {
          "author": {
            "_id": 2,
            "alias": "anakin",
          },
        },
      ]
    `)
  })
})

import db, { t } from './db'

test('equal check with array of ids', async () => {
  expect(await db.select(t.user(u => u.name)).where(u => u.id.eq([1, 2])))
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
            2,
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
        "id": 1,
        "name": "alec",
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

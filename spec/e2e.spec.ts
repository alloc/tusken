import fs from 'fs'
import path from 'path'
import _db, { t } from './db'

test.only('where id equals any in JS array', async () => {
  await db.put(t.user, { id: 4, name: 'sharon', bio: null })
  console.log(await db.select(t.user))

  expect(await db.select(t.user(u => u.name)).where(u => u.id.eq([1, 2, 3])))
    .toMatchInlineSnapshot(`
    [
      {
        "name": "alec",
      },
      {
        "name": "jerry",
      },
      {
        "name": "spud",
      },
    ]
  `)
})

let db: typeof _db
beforeAll(async () => {
  db = await _db.connect({ database: 'test' })
  const schemaDump = fs.readFileSync(
    path.resolve(__dirname, 'generated/test/schema.sql'),
    'utf8'
  )
  const dataDump = fs.readFileSync(
    path.resolve(__dirname, 'generated/test/data.sql'),
    'utf8'
  )
  await db.client.query(
    [
      'drop schema public cascade; create schema public',
      schemaDump,
      dataDump,
    ].join(';\n')
  )
})

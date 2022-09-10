import { inspect } from 'util'
import db from './spec/generated/test'

async function main() {
  const res = await db.client.query(
    `select "user".id, "user".name, array_agg(tweet) as tweets from "user" inner join tweet on tweet.author = "user".id group by "user".id`,
    []
  )

  console.log(inspect(res.rows, false, 1 / 0, true))
}

main()

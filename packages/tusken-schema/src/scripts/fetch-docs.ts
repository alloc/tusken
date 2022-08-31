import fs from 'fs'
import path from 'path'
import { Client } from 'pg'
import { fetchSummaries } from '../docs'
import { extractNativeFuncs } from '../extract'

async function main() {
  const client = new Client()
  await client.connect()
  const nativeFuncs = await extractNativeFuncs(client)
  await client.end()
  const docs = await fetchSummaries(nativeFuncs.map(fn => fn.name))
  fs.writeFileSync(
    path.resolve(__dirname, '../../docs.json'),
    JSON.stringify(docs)
  )
}

main()

import fs from 'fs'
import path from 'path'
import { fetchSummaries } from '../docs'
import { extractTypes } from '../extract'

async function main() {
  const { nativeFuncs } = await extractTypes()
  const docs = await fetchSummaries(nativeFuncs.map(fn => fn.name))
  fs.writeFileSync(
    path.resolve(__dirname, '../../docs.json'),
    JSON.stringify(docs)
  )
}

main()

import { Client } from 'pg'
import { ClientConfig } from './config'
import { extractTypeCasts } from './extract/extractCasts'
import { extractNativeFuncs } from './extract/extractFuncs'
import { extractNativeTypes } from './extract/extractTypes'

export async function extractTypes(config?: ClientConfig) {
  const client = new Client(config)
  await client.connect()
  const nativeTypes = await extractNativeTypes(client)
  const nativeCasts = await extractTypeCasts(client, nativeTypes)
  const nativeFuncs = await extractNativeFuncs(client, nativeTypes)
  await client.end()
  return { nativeTypes, nativeCasts, nativeFuncs }
}

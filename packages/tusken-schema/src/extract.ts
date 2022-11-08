import type { Client } from 'tusken'
import { extractTypeCasts } from './extract/extractCasts'
import { extractNativeFuncs } from './extract/extractFuncs'
import { extractNativeTypes } from './extract/extractTypes'

export async function extractTypes(client: Client) {
  const nativeTypes = await extractNativeTypes(client)
  const nativeCasts = await extractTypeCasts(client, nativeTypes)
  const nativeFuncs = await extractNativeFuncs(client, nativeTypes)
  return { nativeTypes, nativeCasts, nativeFuncs }
}

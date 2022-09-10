import { Token } from './token'

export function tokenizeJson(json: any): Token {
  return { literal: JSON.stringify(json) }
}

export type Json = string | number | boolean | null | JsonObject | JsonArray

export interface JsonObject {
  [property: string]: Json | undefined
}

export interface JsonArray extends Array<Json> {}

import { defineType } from '../type'

export const kUnknownType = defineType(0, 'unknown')
export const kBoolType = defineType(-1, 'bool')
export const kSetType = defineType(-2, 'setof<record>')

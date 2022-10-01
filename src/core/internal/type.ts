import { defineType } from '../type'
import { t } from '../typesBuiltin'

export const kUnknownType = defineType(0, 'unknown')
export const kBoolType = defineType<t.bool>(-1, 'bool')
export const kSetType = defineType(-2, 'setof<record>')

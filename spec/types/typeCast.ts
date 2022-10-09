import { assert, test, _ } from 'spec.ts'
import { Expression } from 'tusken'
import { TypeCast } from '../../src/postgres/typeCast'
import { t } from '../db'

test('cast text to int', () => {
  const result = t.int4(_ as Expression<t.text>)
  assert(result, _ as TypeCast<t.int4>)
})

test('cast nullable text to int', () => {
  const result = t.int4(_ as Expression<t.text | t.null>)
  assert(result, _ as TypeCast<t.int4 | t.null>)
})

test('cast JS string to bigint', () => {
  const result = t.int8(_ as string)
  assert(result, _ as TypeCast<t.int8>)
})

test('cast nullable JS string to bigint', () => {
  const result = t.int8(_ as string | null | undefined)
  assert(result, _ as TypeCast<t.int8 | t.null>)
})

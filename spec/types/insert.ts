import { assert, describe, test, _ } from 'spec.ts'
import { ColumnInput, Expression, RowInsertion } from 'tusken'
import { t } from '../db'

describe('RowInsertion type', () => {
  test('nullable column', () => {
    type NewUser = RowInsertion<typeof t.user>
    type BioActual = NewUser['bio']
    type BioExpected = ColumnInput<t.text | t.null> | undefined
    /**
     * Ensure `bio` is an optional input for a text column.
     */
    assert(_ as BioActual, _ as BioExpected)
    /**
     * Ensure the `ColumnInput` type is working right.
     */
    const _1: BioActual = _ as Expression<t.text | t.null>
  })
})

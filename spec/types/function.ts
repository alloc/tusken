import { assert, describe, test, _ } from 'spec.ts'
import { Expression, Type } from 'tusken'
import { t } from '../db'

describe('function parameter types', () => {
  test('nullable parameter', () => {
    type ParamType = t.bool | t.null
    assert(_ as ParamType, _ as Extract<ParamType, Type>)

    type ParamActual = t.param<ParamType>
    type ParamExpected = boolean | null | Expression<t.bool | t.null>
    assert(_ as ParamActual, _ as ParamExpected)
  })
})

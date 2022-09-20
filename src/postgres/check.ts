import { toArray } from '../utils/toArray'
import { Variadic } from '../utils/Variadic'
import { BoolExpression, Expression } from './expression'
import { tokenizeCheck, tokenizeExpression } from './internal/tokenize'
import { kBoolType } from './internal/type'
import { Query } from './query'
import { ClientInput, ExtractNull, isBoolExpression, Type } from './type'
import { t } from './type-builtin'

interface Props {
  check: Check | BoolExpression
}

export class CheckList<T extends t.bool | t.null = any> //
  extends Expression<T, Props>
{
  constructor(check: Check | BoolExpression) {
    super(kBoolType as any, { check }, tokenizeCheckList)
  }

  and(cond: Variadic<BoolExpression>): this
  and(cond: Variadic<Expression<t.bool | t.null>>): CheckList<t.bool | t.null>
  and(cond: any): any {
    const { props } = this
    for (const right of toArray(cond)) {
      props.check = { left: props.check, op: 'AND', right }
    }
    return this
  }

  or(cond: Variadic<BoolExpression>): this
  or(cond: Variadic<Expression<t.bool | t.null>>): CheckList<t.bool | t.null>
  or(cond: any): any {
    const { props } = this
    for (const right of toArray(cond)) {
      props.check = { left: props.check, op: 'OR', right }
    }
    return this
  }
}

function tokenizeCheckList({ check }: Props, ctx: Query.Context) {
  return isBoolExpression(check)
    ? tokenizeExpression(check, ctx)
    : tokenizeCheck(check, ctx)
}

export class Check {
  constructor(
    readonly left: any,
    readonly op: string,
    readonly right: any,
    readonly isRange?: boolean
  ) {}
}

export class CheckBuilder<T extends Type = any> {
  constructor(
    protected wrap: (check: Check) => CheckList,
    protected left: any,
    protected negated?: boolean
  ) {}

  get not() {
    return new CheckBuilder<T>(this.wrap, this.left, !this.negated)
  }

  /** Inclusive range matching */
  between(
    min: ClientInput<T>,
    max: ClientInput<T>
  ): CheckList<t.bool | ExtractNull<T>> {
    return this.wrap(
      new Check(
        this.left,
        this.negated ? 'NOT BETWEEN' : 'BETWEEN',
        [min, max],
        true
      )
    )
  }

  in(
    arr: ClientInput<T>[] | ClientInput<T[]>
  ): CheckList<t.bool | ExtractNull<T>> {
    return this.wrap(new Check(this.left, this.negated ? 'NOT IN' : 'IN', arr))
  }
}

export interface CheckBuilder<T> extends CheckMethods<T>, CheckAliases<T> {}

type CheckMethods<T> = {
  [P in keyof typeof checkMapping]: (
    right: ClientInput<T>
  ) => CheckList<t.bool | ExtractNull<T>>
}

type CheckAliases<T> = {
  [P in keyof typeof checkAliases]: (
    right: ClientInput<T>
  ) => CheckList<t.bool | ExtractNull<T>>
}

const checkMapping = {
  equalTo: ['=', '!='],
  greaterThan: ['>', '<='],
  greaterThanOrEqualTo: ['>=', '<'],
  lessThan: ['<', '>='],
  lessThanOrEqualTo: ['<=', '>'],
  like: ['LIKE', 'NOT LIKE'],
  ilike: ['ILIKE', 'NOT ILIKE'],
} as const

Object.entries(checkMapping).forEach(([key, [op, negatedOp]]) =>
  Object.defineProperty(CheckBuilder.prototype, key, {
    value(this: CheckBuilder, right: any) {
      return this.wrap(
        new Check(this.left, this.negated ? negatedOp : op, right)
      )
    },
  })
)

const checkAliases = {
  eq: 'equalTo',
  gt: 'greaterThan',
  gte: 'greaterThanOrEqualTo',
  lt: 'lessThan',
  lte: 'lessThanOrEqualTo',
} as const

Object.entries(checkAliases).forEach(([key, alias]) =>
  Object.defineProperty(CheckBuilder.prototype, key, {
    value: CheckBuilder.prototype[alias],
  })
)

import { isArray } from '../utils/isArray'
import { Variadic } from '../utils/Variadic'
import { Expression, ExpressionRef } from './expression'
import {
  tokenizeCheck,
  tokenizeExpression,
  tokenizeExpressionList,
} from './internal/tokenize'
import { kBoolType } from './internal/type'
import type { Query } from './query'
import type {
  ArrayInput,
  ExtractNull,
  QueryInput,
  StringInput,
  Type,
} from './type'
import { isBoolExpression } from './typeChecks'
import { t } from './typesBuiltin'

interface Props {
  check: Check | Variadic<Expression<t.bool | t.null>>
}

export class CheckList<T extends t.bool | t.null = any> //
  extends ExpressionRef<T, Props>
{
  constructor(check: Check | Variadic<Expression<T>>) {
    super(kBoolType as any, { check }, tokenizeCheckList)
  }

  and(right: Variadic<Expression<t.bool>>): this
  and(right: Variadic<Expression<t.bool | t.null>>): CheckList<t.bool | t.null>
  and(right: any): any {
    const { props } = this
    props.check = new Check(props.check, 'AND', right)
    return this
  }

  or(right: Variadic<Expression<t.bool>>): this
  or(right: Variadic<Expression<t.bool | t.null>>): CheckList<t.bool | t.null>
  or(right: any): any {
    const { props } = this
    props.check = new Check(props.check, 'OR', right)
    return this
  }
}

function tokenizeCheckList({ check }: Props, ctx: Query.Context) {
  return isArray(check)
    ? tokenizeExpressionList(check, ' AND ', ctx)
    : isBoolExpression(check)
    ? tokenizeExpression(check, ctx)
    : tokenizeCheck(check, ctx)
}

export class Check {
  constructor(
    readonly left: any,
    readonly op: string,
    readonly right: any,
    readonly isNot?: boolean
  ) {}
}

export class CheckBuilder<T extends Type = any> {
  constructor(
    protected wrap: (check: Check) => CheckList,
    protected left: any,
    protected isNot?: boolean
  ) {}

  protected check(op: string, right: any) {
    return this.wrap(new Check(this.left, op, right, this.isNot))
  }

  get not() {
    return new CheckBuilder<T>(this.wrap, this.left, !this.isNot)
  }

  /** Inclusive range matching */
  between(
    min: QueryInput<T>,
    max: QueryInput<T>
  ): CheckList<t.bool | ExtractNull<T>> {
    return this.check('BETWEEN', [min, max])
  }

  in(arr: readonly QueryInput<T>[]): CheckList<t.bool | ExtractNull<T>> {
    return this.check('IN', arr)
  }

  like(pattern: StringInput<T>): CheckList<t.bool | ExtractNull<T>> {
    return this.check('LIKE', pattern)
  }

  ilike(pattern: StringInput<T>): CheckList<t.bool | ExtractNull<T>> {
    return this.check('ILIKE', pattern)
  }
}

export interface CheckBuilder<T> extends CheckMethods<T>, CheckAliases<T> {}

// TODO: let right be null here
type CheckMethods<T> = {
  [P in keyof typeof checkMapping]: (
    right: QueryInput<T> | ArrayInput<T>
  ) => CheckList<t.bool | ExtractNull<T>>
}

type CheckAliases<T> = {
  [P in keyof typeof checkAliases]: (
    right: QueryInput<T> | ArrayInput<T>
  ) => CheckList<t.bool | ExtractNull<T>>
}

const checkMapping = {
  equalTo: '=',
  greaterThan: '>',
  greaterThanOrEqualTo: '>=',
  lessThan: '<',
  lessThanOrEqualTo: '<=',
} as const

Object.entries(checkMapping).forEach(([key, op]) =>
  Object.defineProperty(CheckBuilder.prototype, key, {
    value(this: CheckBuilder, right: any) {
      return this.wrap(new Check(this.left, op, right, this.isNot))
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

// We have to define the `ExpressionRef#is` method here
// or else a circular dependency is created.
Object.defineProperty(ExpressionRef.prototype, 'is', {
  get(this: ExpressionRef) {
    return new CheckBuilder(check => {
      return new CheckList(check)
    }, this)
  },
})

import { isArray } from '../utils/isArray'
import { RecursiveVariadic, Variadic } from '../utils/Variadic'
import { Expression, ExpressionRef } from './expression'
import {
  tokenizeCheck,
  tokenizeExpression,
  tokenizeLogicalAnd,
} from './internal/tokenize'
import { kBoolType } from './internal/type'
import type { Query } from './query'
import type {
  ArrayParam,
  ExtractNull,
  QueryParam,
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

  and(right: RecursiveVariadic<Expression<t.bool>>): this
  and(
    right: RecursiveVariadic<Expression<t.bool | t.null>>
  ): CheckList<t.bool | t.null>
  and(right: any): any {
    const { props } = this
    props.check = new Check(props.check, 'AND', reduceChecks(right))
    return this
  }

  or(right: RecursiveVariadic<Expression<t.bool>>): this
  or(
    right: RecursiveVariadic<Expression<t.bool | t.null>>
  ): CheckList<t.bool | t.null>
  or(right: any): any {
    const { props } = this
    props.check = new Check(props.check, 'OR', reduceChecks(right))
    return this
  }
}

export function reduceChecks<T extends t.bool | t.null>(
  checks: RecursiveVariadic<Expression<T> | false | null>
): Expression<T> | null {
  if (isArray(checks)) {
    const reduced = checks.map(reduceChecks).filter(Boolean) as Expression<T>[]
    return reduced ? new CheckList(reduced) : null
  }
  return checks || null
}

function tokenizeCheckList({ check }: Props, ctx: Query.Context) {
  return isArray(check)
    ? tokenizeLogicalAnd(check, ctx)
    : isBoolExpression(check)
    ? tokenizeExpression(check, ctx)
    : tokenizeCheck(check, ctx)
}

export class Check {
  constructor(
    readonly left: unknown,
    readonly op: string,
    readonly right: unknown,
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
    min: QueryParam<T>,
    max: QueryParam<T>
  ): CheckList<t.bool | ExtractNull<T>> {
    return this.check('BETWEEN', [min, max])
  }

  in(arr: readonly QueryParam<T>[]): CheckList<t.bool | ExtractNull<T>> {
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
    right: QueryParam<T> | ArrayParam<T>
  ) => CheckList<t.bool | ExtractNull<T>>
}

type CheckAliases<T> = {
  [P in keyof typeof checkAliases]: (
    right: QueryParam<T> | ArrayParam<T>
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

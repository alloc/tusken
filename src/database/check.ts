import {
  BoolExpression,
  Expression,
  ExpressionProps,
  ExpressionType,
} from './expression'
import { Query } from './query'
import { tokenizeCheck, tokenizeExpression } from './tokenize'
import { Input, isBoolExpression, t, Type } from './type'

interface Props extends ExpressionProps {
  type: 'bool'
  check: Check | BoolExpression
}

export class CheckList<T extends t.bool | t.null = any> //
  extends Expression<T, Props>
{
  constructor(check: Check | BoolExpression) {
    super({ type: 'bool', check }, tokenizeCheckList)
  }

  and(cond: BoolExpression): this
  and(cond: Expression<t.bool | t.null>): CheckList<t.bool | t.null>
  and<T extends Expression>(left: T): CheckBuilder<ExpressionType<T>>
  and<T extends Type>(left: T): CheckBuilder<T>
  and<T>(left: T): CheckBuilder<Type<any, T>>
  and(right: any): any {
    const { props } = this
    if (isBoolExpression(right)) {
      props.check = { left: props.check, op: 'AND', right }
      return this
    }
    return new CheckBuilder(right => {
      props.check = { left: props.check, op: 'AND', right }
      return this
    }, right)
  }

  or(cond: BoolExpression): this
  or(cond: Expression<t.bool | t.null>): CheckList<t.bool | t.null>
  or<T extends Expression>(left: T): CheckBuilder<ExpressionType<T>>
  or<T extends Type>(left: T): CheckBuilder<T>
  or<T>(left: T): CheckBuilder<Type<any, T>>
  or(right: any): any {
    const { props } = this
    if (isBoolExpression(right)) {
      props.check = { left: props.check, op: 'OR', right }
      return this
    }
    return new CheckBuilder(right => {
      props.check = { left: props.check, op: 'OR', right }
      return this
    }, right)
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
    return new CheckBuilder(this.wrap, this.left, !this.negated)
  }

  /** Inclusive range matching */
  between(
    min: Input<T>,
    max: Input<T>
  ): CheckList<t.bool | Extract<T, t.null>> {
    return this.wrap(
      new Check(
        this.left,
        this.negated ? 'NOT BETWEEN' : 'BETWEEN',
        [min, max],
        true
      )
    )
  }

  in(arr: Input<T>[] | Input<T[]>): CheckList<t.bool | Extract<T, t.null>> {
    return this.wrap(new Check(this.left, this.negated ? 'NOT IN' : 'IN', arr))
  }
}

export interface CheckBuilder<T> extends CheckMethods<T>, CheckAliases<T> {}

type CheckMethods<T> = {
  [P in keyof typeof checkMapping]: (
    right: Input<T>
  ) => CheckList<t.bool | Extract<T, t.null>>
}

type CheckAliases<T> = {
  [P in keyof typeof checkAliases]: (
    right: Input<T>
  ) => CheckList<t.bool | Extract<T, t.null>>
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

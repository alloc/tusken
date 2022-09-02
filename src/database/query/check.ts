import { Query } from '../query'
import { tokenizeCheck, tokenizeExpression } from '../tokenize'
import { BoolType, Input, isBoolExpression, NullType, Type } from '../type'
import {
  BoolExpression,
  Expression,
  ExpressionProps,
  ExpressionType,
} from './expression'

interface Props extends ExpressionProps {
  type: 'bool'
  check: Check | BoolExpression
}

export class CheckList<T extends BoolType | NullType = any> extends Expression<
  T,
  Props
> {
  constructor(check: Check | BoolExpression) {
    super({ type: 'bool', check }, tokenizeCheckList)
  }

  and(cond: BoolExpression): this
  and(cond: Expression<BoolType | NullType>): CheckList<BoolType | NullType>
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
  or(cond: Expression<BoolType | NullType>): CheckList<BoolType | NullType>
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
  ): CheckList<BoolType | Extract<T, NullType>> {
    return this.wrap(
      new Check(
        this.left,
        this.negated ? 'NOT BETWEEN' : 'BETWEEN',
        [min, max],
        true
      )
    )
  }
}

export interface CheckBuilder<T> extends CheckMethods<T>, CheckAliases<T> {}

type CheckMethods<T> = {
  [P in keyof typeof checkMapping]: (
    right: Input<T>
  ) => CheckList<BoolType | Extract<T, NullType>>
}

type CheckAliases<T> = {
  [P in keyof typeof checkAliases]: (
    right: Input<T>
  ) => CheckList<BoolType | Extract<T, NullType>>
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

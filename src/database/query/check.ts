import { tokenizeCheck } from '../tokenize'
import type { BoolType, Input } from '../type'
import { Expression } from './expression'

export function is<T>(left: T): CheckBuilder<T> {
  return new CheckBuilder(check => {
    const query = new CheckList()
    query['context'].nodes.push({
      type: 'is',
      props: { check },
      query,
    })
    return query
  }, left)
}

type Props = { check: Check }

export class CheckList extends Expression<BoolType, Props> {
  constructor() {
    super(null, (props, ctx) => tokenizeCheck(props.check, ctx))
  }

  and(cond: CheckList): this
  and<T>(left: T): CheckBuilder<T>
  and(right: any): any {
    const { props } = this
    if (right instanceof CheckList) {
      props.check = { left: props.check, op: 'AND', right }
      return this
    }
    return new CheckBuilder(right => {
      props.check = { left: props.check, op: 'AND', right }
      return this
    }, right)
  }

  or(cond: CheckList): this
  or<T>(left: T): CheckBuilder<T>
  or(right: any): any {
    const { props } = this
    if (right instanceof CheckList) {
      props.check = { left: props.check, op: 'OR', right }
      return this
    }
    return new CheckBuilder(right => {
      props.check = { left: props.check, op: 'OR', right }
      return this
    }, right)
  }
}

export class Check {
  constructor(
    readonly left: any,
    readonly op: string,
    readonly right: any,
    readonly isRange?: boolean
  ) {}
}

export class CheckBuilder<T = any> {
  constructor(
    protected wrap: (check: Check) => CheckList,
    protected left: any,
    protected negated?: boolean
  ) {}

  get not() {
    return new CheckBuilder(this.wrap, this.left, !this.negated)
  }

  /** Inclusive range matching */
  between(min: Input<T>, max: Input<T>): CheckList {
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
  [P in keyof typeof checkMapping]: (right: Input<T>) => CheckList
}

type CheckAliases<T> = {
  [P in keyof typeof checkAliases]: (right: Input<T>) => CheckList
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

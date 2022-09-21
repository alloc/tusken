import { Narrow } from '../utils/Narrow'
import { ColumnRef } from './column'
import { Expression } from './expression'
import { CallExpression } from './function'
import { kSetType } from './internal/type'
import { RawSelection, ResolveSelection, Selection } from './selection'
import { makeSelector } from './selector'
import { kSetAlias } from './symbols'
import { SetType, Type } from './type'

/** A function that returns a set of rows. */
export function defineSetFunction(callee: string): any {
  return (...args: any[]) => makeSetRef(callee, args)
}

/**
 * An expression that results in a set of rows.
 */
export declare abstract class SetExpression<
  T extends object = any
> extends Expression<SetType<T>> {}

export function makeSetRef<T extends Type, Callee extends string = any>(
  callee: Callee,
  args: any[]
): SetRef<T, Callee> {
  const type = new (SetRef as new (
    callee: Callee, // @prettier-ignore
    args: any[]
  ) => SetRef<T, Callee>)(callee, args)

  return makeSelector(type, () => type[kSetAlias])
}

/**
 * A function call that returns a set of rows.
 */
export abstract class SetRef<
  T extends Type = any,
  Callee extends string = any
> extends CallExpression<SetType<{ [P in Callee]: T }>, Callee> {
  protected [kSetAlias]: string
  constructor(callee: Callee, args: any[]) {
    super(kSetType, { callee, args })
    this[kSetAlias] = callee
  }

  /** Set an alias for use in future `.where` calls */
  as<Alias extends string>(alias: Alias): SetRef<T, Alias> {
    this.props.alias = this[kSetAlias] = alias
    return this as any
  }
}

export interface SetRef<T extends Type, Callee extends string>
  extends SetExpression<{ [P in Callee]: T }> {
  /**
   * Define a selection of columns from this set.
   */
  <Selected extends RawSelection>(
    selector: (value: ColumnRef<T, Callee>) => Narrow<Selected>
  ): Selection<ResolveSelection<Selected>, SetRef<T, Callee>>
}

export function getSetAlias(val: SetRef): string
export function getSetAlias(val: any): string | undefined
export function getSetAlias(val: any) {
  return val ? val[kSetAlias] : undefined
}

import { F } from 'ts-toolbelt'
import { CallExpression } from './function'
import {
  ColumnRef,
  makeSelector,
  RawSelection,
  ResolveSelection,
  Selection,
} from './selection'
import { kSetAlias } from './symbols'
import { SetType, Type } from './type'

/** A function that returns a set of rows. */
export function defineSetFunction(callee: string): any {
  return (...args: any[]) => makeSetRef(callee, args)
}

export function makeSetRef<T extends Type, Callee extends string = any>(
  callee: Callee,
  args: any[]
): SetRef<T, Callee> {
  const type = new SetExpression<T>(callee, args)
  return makeSelector(type, () => type[kSetAlias])
}

export interface SetRef<T extends Type = any, Callee extends string = any>
  extends SetExpression<T>,
    SetSelector<T, Callee> {}

type SetSelector<T extends Type, Callee extends string> = {
  <Selected extends RawSelection>(
    selector: (value: ColumnRef<T, Callee>) => F.Narrow<Selected>
  ): Selection<ResolveSelection<Selected>, SetRef<T, Callee>>
}

class SetExpression<
  T extends Type = any,
  Callee extends string = any
> extends CallExpression<SetType<T>, Callee> {
  protected [kSetAlias]: string
  constructor(callee: Callee, args: any[]) {
    super(callee, args, 'setof')
    this[kSetAlias] = callee
  }

  /** Set an alias for use in future `.where` calls */
  as<Alias extends string>(alias: Alias): SetRef<T, Alias> {
    this.props.alias = this[kSetAlias] = alias
    return this as any
  }
}

export function getSetAlias(val: SetExpression): string
export function getSetAlias(val: any): string | undefined
export function getSetAlias(val: any) {
  return val ? val[kSetAlias] : undefined
}

import { FunctionCall } from './function'
import { kAliasName, kAliasOf } from './symbols'
import { ColumnRef, TableRef } from './table'

export type Aliased = TableRef | ColumnRef | FunctionCall

export class Alias<T extends Aliased = any, Name extends string = any> {
  protected [kAliasOf]: T
  protected [kAliasName]: Name

  constructor(of: T, name: Name) {
    this[kAliasOf] = of
    this[kAliasName] = name
  }
}

export function isAlias(val: any): val is Alias {
  return kAliasOf in val
}

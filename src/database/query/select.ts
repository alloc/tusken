import { Alias } from '../alias'
import { FunctionCall } from '../function'
import { ColumnRef } from '../table'

export type Selection = (
  | ColumnRef
  | FunctionCall
  | Alias<ColumnRef | FunctionCall>
)[]

export class Select<T extends Selection> extends Query {
  constructor(selected: T) {}
}

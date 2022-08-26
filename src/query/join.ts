import { TableIds } from './table'

export interface InnerJoin<
  Schema,
  Left extends TableIds<Schema>,
  Right extends TableIds<Schema>
> extends NominalInnerJoin<Left, Right> {
  type: 'inner join'
}

declare const kLeft: unique symbol
declare const kRight: unique symbol

declare class NominalInnerJoin<Left, Right> {
  private [kLeft]: Left
  private [kRight]: Right
}

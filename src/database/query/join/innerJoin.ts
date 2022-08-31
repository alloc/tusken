import type { Selection } from '../../selection'
import { kJoinCheck, kJoinFrom, kJoinRelation } from '../../symbols'
import { TableType, toTableName } from '../../table'
import { Query } from '../node'
import { JoinRelation } from './relation'

declare const kInnerJoinFrom: unique symbol

export class InnerJoin<From extends TableType | Selection = any> {
  protected declare [kInnerJoinFrom]: From
  protected [kJoinRelation]: JoinRelation
  constructor(on: JoinRelation) {
    this[kJoinRelation] = on
  }
  protected tokens(props: Props) {
    return [
      'INNER JOIN',
      { id: toTableName(props.on[kJoinFrom]) },
      'ON',
      { id: props.on[kJoinCheck] },
    ]
  }
  protected inject(props: Props, ctx: Query.Context) {
    if (ctx.select) {
      ctx.select.from.push(props.on[kJoinFrom])
    }
  }
}

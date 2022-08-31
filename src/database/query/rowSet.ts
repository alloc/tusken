import { Any, Intersect } from '@alloc/types'
import { Selection } from '../selection'
import { kJoinCheck, kJoinFrom } from '../symbols'
import { TableRef } from '../table'
import { Type } from '../type'
import { JoinProps, JoinRelation } from './join'
import { Query } from './node'

export type RowType<T> = [T] extends [Any]
  ? Record<string, any>
  : Intersect<
      T extends TableRef<infer Row>
        ? Row
        : T extends Selection<infer Row>
        ? Row
        : unknown
    > extends infer Row
  ? {
      [P in keyof Row]: Row[P] extends Type<any, infer ColumnType>
        ? ColumnType
        : Row[P]
    }
  : never

type RowSetProps = {
  joins?: JoinProps[]
  limit?: number
}

export namespace RowSet {
  export type Props = RowSetProps
}

export abstract class RowSet<
    T extends (TableRef | Selection)[] = any,
    Props extends RowSetProps = any
  >
  extends Query<Props>
  implements PromiseLike<RowType<T>>
{
  limit(n: number) {
    this.props.limit = n
    return this
  }

  innerJoin<From extends TableRef | Selection>(
    on: JoinRelation<From>
  ): Omit<this, 'then'> & PromiseLike<RowType<[...T, From]>> {
    this.props.joins ||= []
    this.props.joins.push({
      type: 'inner',
      from: on[kJoinFrom],
      on: on[kJoinCheck],
    })
    return this
  }
}

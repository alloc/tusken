import { isObject } from '../utils/isObject'
import { CheckList } from './query/check'
import { Delete } from './query/delete'
import { Query, ValidQuery } from './query/node'
import { Put } from './query/put'
import { RowType } from './query/rowSet'
import { Select, WhereRefs } from './query/select'
import { Selection } from './selection'
import { kDatabaseReserved, kPrimaryKey } from './symbols'
import { PrimaryKey, RowInsertion, RowUpdate, TableRef } from './table'
import { Input } from './type'

export type ClientResult = { rows: any[]; rowCount?: number }
export type Client = { query: (query: string) => Promise<ClientResult> }

export class Database {
  protected [kDatabaseReserved]: string[]
  readonly client: Client

  constructor(config: { client: Client; reserved: string[] }) {
    this[kDatabaseReserved] = config.reserved
    this.client = config.client
  }

  delete<From extends TableRef>(from: From): Delete<From>
  delete<From extends TableRef>(
    from: From,
    pk: Input<PrimaryKey<From>>
  ): ValidQuery<number>
  delete(from: TableRef, pk?: any) {
    const query = this.query({
      type: 'delete',
      props: { from },
      query: new Delete(this),
    })
    if (arguments.length > 1) {
      query.where(from => from[kPrimaryKey].eq(pk))
    }
    return query
  }

  /**
   * Same as `select` but only one row (or null) is returned.
   */
  find<T extends TableRef | Selection>(
    from: T,
    compose: (from: WhereRefs<[T]>[0]) => CheckList
  ): ValidQuery<RowType<T> | null> {
    const query = this.select(from).where(compose).limit(1)
    query['resolve'] = p => p.then(res => res[0] || null)
    return query as any
  }

  /**
   * Get a row by its primary key.
   *
   * To get a row by any other column, use the `db.find` method instead.
   */
  get<T extends TableRef | Selection>(
    from: T,
    pk: Input<PrimaryKey<T>>
  ): ValidQuery<RowType<T> | null> {
    return this.find<any>(from, from => from[kPrimaryKey].eq(pk))
  }

  /** https://www.postgresql.org/docs/15/sql-insert.html */
  insert<T extends TableRef>(table: T) {
    throw Error('not implemented')
  }

  /** https://www.postgresql.org/docs/15/sql-merge.html */
  mergeInto<T extends TableRef>(table: T) {
    throw Error('not implemented')
  }

  /**
   * Insert a row into the table.
   */
  put<T extends TableRef>(table: T, values: RowInsertion<T>): Put<T>

  /**
   * Insert, update, or delete a row by its primary key.
   */
  put<T extends TableRef>(
    table: T,
    pk: PrimaryKey<T>,
    values: RowUpdate<T> | null
  ): Put<T>

  put(table: TableRef, pk: any, values?: any) {
    if (isObject(pk)) {
      values = pk
      pk = undefined
    } else if (values === null) {
      return this.delete(table, pk)
    }
    return this.query({
      type: 'put',
      query: new Put(this),
      props: { table, values, pk },
    })
  }

  select<T extends TableRef | Selection>(from: T) {
    return this.query({
      type: 'select',
      query: new Select<[T]>(this),
      props: { from },
    })
  }

  /** https://www.postgresql.org/docs/15/sql-update.html */
  update<T extends TableRef>(table: T): never {
    throw Error('not implemented')
  }

  protected query<T extends Query>(node: {
    type: T extends Query<any, infer Command> ? Command : never
    props: T extends Query<infer Props> ? Props : never
    query: T
  }): T

  protected query(node: any) {
    node.query.context.nodes.push(node)
    return node
  }
}

export function isDatabase(val: any): val is Database {
  return val.constructor == Database
}

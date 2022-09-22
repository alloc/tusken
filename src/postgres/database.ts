import { Client, ConnectFn, ConnectOptions } from './connection'
import { Query, QueryPromise } from './query'
import { Count } from './query/count'
import { Delete } from './query/delete'
import { Put } from './query/put'
import { Select } from './query/select'
import { Where } from './query/where'
import { Selectable, SelectedRow } from './selection'
import { QueryStream } from './stream'
import { kDatabaseQueryStream, kDatabaseReserved, kPrimaryKey } from './symbols'
import { PrimaryKey, RowInsertion, RowUpdate, TableRef } from './table'

export interface DatabaseConfig {
  client: Client
  connect: ConnectFn
  reserved: string[]
  QueryStream?: typeof QueryStream
}

export class Database {
  protected [kDatabaseReserved]: string[]
  protected [kDatabaseQueryStream]?: typeof QueryStream
  readonly connect: (opts?: ConnectOptions) => Database
  client: Client

  constructor(config: DatabaseConfig) {
    this[kDatabaseReserved] = config.reserved
    this[kDatabaseQueryStream] = config.QueryStream
    this.client = config.client
    this.connect = opts =>
      new Database({
        ...config,
        client: config.connect(opts),
      })
  }

  /**
   * Count the number of rows in a selection. You can use the
   * `where` and `innerJoin` methods to be more specific.
   *
   * You need to use `pg.count` instead if you want to check
   * a specific column for `NULL` before counting a row.
   */
  count<From extends TableRef>(from: From) {
    return this.query({
      type: 'count',
      query: new Count(this),
      props: { from },
    })
  }

  delete<From extends TableRef>(from: From): Delete<From>
  delete<From extends TableRef>(
    from: From,
    pk: PrimaryKey<From>
  ): QueryPromise<number>
  delete(from: TableRef, pk?: any) {
    const query = this.query({
      type: 'delete',
      props: { from },
      query: new Delete(this),
    })
    if (arguments.length > 1) {
      return query.where(from => from[kPrimaryKey].is.eq(pk))
    }
    return query
  }

  /**
   * Same as `select` but only one row (or null) is returned.
   */
  find<T extends Selectable>(
    from: T,
    filter: Where<[T]>
  ): QueryPromise<SelectedRow<T> | null> {
    return this.select(from).where(filter).at(0) as any
  }

  /**
   * Get a row by its primary key.
   *
   * To get a row by any other column, use the `db.find` method instead.
   */
  get<T extends Selectable>(
    from: T,
    pk: PrimaryKey<T>
  ): QueryPromise<SelectedRow<T> | null> {
    return this.find(from as Extract<T, TableRef>, from =>
      from[kPrimaryKey].is.eq(pk)
    )
  }

  /**
   * Insert a row into the table.
   */
  put<T extends TableRef>(
    table: T,
    row: RowInsertion<T> | readonly RowInsertion<T>[]
  ): Put<T>

  /**
   * Insert, update, or delete a row by its primary key.
   */
  put<T extends TableRef>(
    table: T,
    pk: PrimaryKey<T>,
    row: RowUpdate<T> | null
  ): Put<T>

  put(table: TableRef, pk: any, data?: any) {
    if (arguments.length == 2) {
      data = pk
      pk = undefined
    } else if (data === null) {
      return this.delete(table, pk)
    }
    return this.query({
      type: 'put',
      query: new Put(this),
      props: { table, data, pk },
    })
  }

  select<T extends Selectable>(from: T) {
    return this.query({
      type: 'select',
      query: new Select<[T]>(this),
      props: { from },
    })
  }

  protected query<T extends Query>(node: {
    type: string
    query: T
    props: T extends Query<infer Props> ? Props : never
  }): T

  protected query(node: any) {
    node.query.nodes.push(node)
    return node.query
  }
}

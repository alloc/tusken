import { Delete } from './query/delete'
import { kDatabaseReserved } from './symbols'
import { PrimaryKeyOf, TableRef } from './table'

export type ClientResult = { rows: any[]; rowCount: number }
export type Client = { query: (query: string) => Promise<ClientResult> }

export class Database {
  protected [kDatabaseReserved]: string[]
  readonly client: Client

  constructor(config: { client: Client; reserved: string[] }) {
    this[kDatabaseReserved] = config.reserved
    this.client = config.client
  }

  /**
   * Delete a row by its primary key.
   *
   * To delete a selection of rows, call the `db.select` method first
   * and chain a `.delete` call after it.
   */
  delete<T extends TableRef>(table: T, pk: PrimaryKeyOf<T>): Delete<T> {
    throw Error('not implemented')
  }

  /**
   * Find a row matching the given `where` clause.
   *
   *
   */
  find<T extends TableRef>(table: T, where: {}): Find<T | null> {
    throw Error('not implemented')
  }

  /**
   * Get a row by its primary key.
   *
   * To get a row by any other column, use the `db.find` method instead.
   */
  get<T extends TableRef>(table: T, pk: PrimaryKeyOf<T>): Get<T> {
    throw Error('not implemented')
  }

  insert<T extends TableRef>(table: T): Insert<T> {
    throw Error('not implemented')
  }

  mergeInto<T extends TableRef>(table: T): MergeInto<T> {
    throw Error('not implemented')
  }

  put<T extends TableRef>(table: T, pk: PrimaryKeyOf<T>): Put<T> {
    throw Error('not implemented')
  }

  select<T extends TableRef>(table: T, pk: PrimaryKeyOf<T>): Select<T> {
    throw Error('not implemented')
  }

  update<T extends TableRef>(table: T): Update<T> {
    throw Error('not implemented')
  }
}

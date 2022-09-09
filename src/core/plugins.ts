import { Database } from './database'
import { ValidQuery } from './query'
import { Delete } from './query/delete'
import { Put } from './query/put'
import { Select, Selectable, SelectedRow } from './query/select'
import { Where } from './query/where'
import { kPrimaryKey } from './symbols'
import { PrimaryKey, RowInsertion, RowUpdate, TableRef } from './table'

function _delete<From extends TableRef>(from: From): Delete<From>
function _delete<From extends TableRef>(
  from: From,
  pk: PrimaryKey<From>
): ValidQuery<number>
function _delete(this: Database, from: TableRef, pk?: any) {
  const query = this.query({
    type: 'delete',
    props: { from },
    query: new Delete(this),
  })
  if (arguments.length > 1) {
    query.where(from => {
      return from[kPrimaryKey].eq(pk)
    })
  }
  return query
}

export { _delete as delete }

/**
 * Same as `select` but only one row (or null) is returned.
 */
export function find<T extends Selectable>(
  this: Database,
  from: T,
  filter: Where<[T]>
): ValidQuery<SelectedRow<T> | null> {
  return this.select(from).where(filter).at(0) as any
}

/**
 * Get a row by its primary key.
 *
 * To get a row by any other column, use the `db.find` method instead.
 */
export function get<T extends Selectable>(
  this: Database,
  from: T,
  pk: PrimaryKey<T>
): ValidQuery<SelectedRow<T> | null> {
  return this.find(from as Extract<T, TableRef>, from =>
    from[kPrimaryKey].eq(pk)
  )
}

/** https://www.postgresql.org/docs/current/sql-insert.html */
export function insert<T extends TableRef>(table: T): never {
  throw Error('not implemented')
}

/** https://www.postgresql.org/docs/current/sql-merge.html */
export function mergeInto<T extends TableRef>(table: T): never {
  throw Error('not implemented')
}

/**
 * Insert a row into the table.
 */
export function put<T extends TableRef>(
  table: T,
  row: RowInsertion<T> | readonly RowInsertion<T>[]
): Put<T>

/**
 * Insert, update, or delete a row by its primary key.
 */
export function put<T extends TableRef>(
  table: T,
  pk: PrimaryKey<T>,
  row: RowUpdate<T> | null
): Put<T>

export function put(this: Database, table: TableRef, pk: any, data?: any) {
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

export function select<T extends Selectable>(this: Database, from: T) {
  return this.query({
    type: 'select',
    query: new Select<[T]>(this),
    props: { from },
  })
}

/** https://www.postgresql.org/docs/current/sql-update.html */
export function update<T extends TableRef>(table: T): never {
  throw Error('not implemented')
}

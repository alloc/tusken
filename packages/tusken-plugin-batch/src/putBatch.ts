import {
  Database,
  isObject,
  PrimaryKey,
  RowInsertion,
  RowUpdate,
  TableRef,
} from 'tusken'

export namespace PutBatch {
  export type Props = {
    maxBytes?: number
    maxQueries?: number
    autoFlush?: boolean
  }
}

// 1GB - null byte
// https://dba.stackexchange.com/a/131425/158034
const defaultMaxBytes = Math.pow(2, 30) - 1

export class PutBatch<T extends TableRef = any> {
  protected added = new Set()
  protected deleted = new Set()
  protected merged = new Map()
  protected queued = false
  protected promise?: Promise<void>

  constructor(
    protected db: Database,
    protected table: T,
    protected props: PutBatch.Props
  ) {}

  /**
   * Insert a row into the table.
   */
  put<T extends TableRef>(table: T, row: RowInsertion<T>): void

  /**
   * Insert, update, or delete a row by its primary key.
   */
  put<T extends TableRef>(
    table: T,
    pk: PrimaryKey<T>,
    row: RowUpdate<T> | null
  ): void

  put(table: TableRef, pk: any, row?: any) {
    const ops = this.tables.get(table) || {
      added: new Set(),
      deleted: new Set(),
      merged: new Map(),
    }

    if (row === null) {
      ops.deleted.add(pk)
    } else if (isObject(pk)) {
      ops.added.add(pk)
    } else {
      ops.merged.set(pk, row)
    }

    if (!this.queued) {
      this.queued = true
      queueMicrotask(() => {
        this.queued = false
        this.flush()
      })
    }

    const maxBytes = this.props.maxBytes || defaultMaxBytes
    this.bytes += sql.length + (this.bytes ? 1 : 0)
    if (this.bytes > maxBytes) {
      this.flush()
    }

    // DELETE queries go first.
    this.stmts[row === null ? 'unshift' : 'push'](sql)

    const maxQueries = this.props.maxQueries || Infinity
    if (this.stmts.length == maxQueries || this.bytes == maxBytes) {
      this.flush()
    }
  }

  render() {}

  /**
   * Send the current batch of queries immediately.
   */
  flush(): Promise<void> {
    let promise: Promise<void>
    if (this.tables.size) {
      const queries = Array.from(this.tables, ([table, ops]) => {
        const added = Array.from(ops.added)
        const deleted = Array.from(ops.deleted)
        const merged = Array.from(ops.merged)
        return this.db.put()
      }).flat()
      promise = this.db.client.query(sql)
    }
    if (this.promise) {
      return Promise.resolve([])
    }
    const sql = this.stmts.join(';')
    const promise: any = (this.stmts = [])
    this.bytes = 0
    return promise
  }
}

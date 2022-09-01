import { Database } from './database'
import { ValidQuery } from './query'

export namespace QueryBatch {
  export type Props = {
    maxBytes?: number
    maxQueries?: number
  }
}

// 1GB - null byte
// https://dba.stackexchange.com/a/131425/158034
const defaultMaxBytes = Math.pow(2, 30) - 1

export class QueryBatch<T extends ValidQuery | void = any> {
  protected queries: string[] = []
  protected bytes = 0

  constructor(protected db: Database, protected props: QueryBatch.Props) {}

  add(query: T extends void ? ValidQuery : T) {
    const maxBytes = this.props.maxBytes || defaultMaxBytes
    const sql = query.render()
    this.bytes += sql.length + (this.bytes ? 1 : 0)
    if (this.bytes > maxBytes) {
      this.flush()
    }
    this.queries.push(sql)
    const maxQueries = this.props.maxQueries || Infinity
    if (this.queries.length == maxQueries || this.bytes == maxBytes) {
      this.flush()
    }
    return this
  }

  /**
   * Send the current batch of queries immediately.
   */
  flush(): Promise<Awaited<T>[]> {
    if (!this.queries.length) {
      return Promise.resolve([])
    }
    const sql = this.queries.join(';')
    const promise = this.db.client.query(sql)
    this.queries = []
    this.bytes = 0
    return promise // TODO
  }
}

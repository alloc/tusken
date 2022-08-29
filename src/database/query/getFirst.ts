import { Database } from '../database'
import { TableRef, ValuesOf } from '../table'
import { Query } from './index'

export class GetFirst<T extends TableRef> extends Query<ValuesOf<T>> {
  constructor(db: Database, table: T) {
    super(parent, { table }, () => [parent, 'LIMIT 1'])
  }
}

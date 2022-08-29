import { Query } from '.'
import { Database } from '../database'
import { PrimaryKeyOf, TableRef } from '../table'

export class Delete<T extends TableRef> extends Query<
  number,
  { from: T; all: boolean }
> {
  constructor(db: Database, from: T, pk?: PrimaryKeyOf<T>) {
    super(db, { from, all: true }, props => [
      props.all ? 'TRUNCATE' : 'DELETE FROM',
      props.from,
    ])
  }

  where() {}

  returning() {
    throw Error('not implemented')
  }
}

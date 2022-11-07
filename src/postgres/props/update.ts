import { Expression } from '../expression'
import { RowRef, RowUpdate } from '../row'
import { TableRef } from '../table'
import { t } from '../typesBuiltin'

export interface UpdateProps<T extends TableRef = any> {
  from: T
  updater: (row: RowRef<T>) => RowUpdate<T>
  where?: Expression<t.bool | t.null>
}

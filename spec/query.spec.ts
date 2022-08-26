interface Schema {
  user: { id: string; name: string; streak: number }
  post: { id: string; userId: string; views: number }
  comment: { id: string; postId: string; parentId?: string }
}

import { Database } from '../src/query'
import { SelectedTable } from '../src/query/select'
import { SelectedKeys, Selection } from '../src/query/selection'
import { TableColumnIds, TableSelection } from '../src/query/table'

declare const db: Database<Schema>

type Tbl = SelectedTable<Schema, ['user.id']>

db.select('user.id', 'post.id').from(db.table('post'))
db.table('user').where('')

type SS = SelectedKeys<Selection<Schema, TableColumnIds<Schema, 'user'>[]>>

type SK = SelectedKeys<TableSelection<Schema, ['user.id']>>

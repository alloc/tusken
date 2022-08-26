import { Database } from '../src/query'
import {
  EligibleTableIds,
  ResolveSelection,
  ResolveTableSelection,
  Selection,
  SelectionArgs,
  SelectionSchema,
  SelectKey,
} from '../src/query/selection'
import { Table, TableColumnIds, TableSelection } from '../src/query/table'
import { WhereAbsoluteKeys, WhereValues } from '../src/query/where'

interface Schema {
  user: { id: string; name: string; streak: number }
  post: { id: string; userId: string; views: number }
  comment: { id: string; postId: string; authorId: string; parentId?: string }
}

declare const db: Database<Schema>

type X0 = SelectKey<Schema>
type X1 = EligibleTableIds<Schema, 'user.id' | 'post.userId'>

db.select('user.id', 'post.id').from('user').innerJoin('post', {})
db.select('user.id', 'post.id').from('post')
db.table('user').where('name', '=', 'John').and('user.streak', '>', 0)
db.table('user').where('id', 'between', 1, 2)

db.select('id').from('comment').where('authorId', '>', '1')

db.table('user').innerJoin('comment', { authorId: 'user.id' })
db.table('user').innerJoin(
  'comment',
  db.on({ authorId: 'user.id' }).and({ parentId: 'user.id' })
)

const p1 = await db.table('user').where('streak', '<', 0).or('id', '=', '')

type EI = EligibleTableIds<Schema, 'id' | 'name'>

const userQuery = db.select('name').from('user')
const p2 = await userQuery.where('streak', '>', 0)

type Joined =
  | TableSelection<Schema, 'user', [{ 'user.name': 'user' }]>
  | Table<Schema, 'comment'>

type S9 = SelectionSchema<Joined>
type W1 = WhereAbsoluteKeys<Joined, 'id'>
type W2 = WhereValues<Joined, 'user.name'>
type TS = ResolveTableSelection<Schema, 'user', 'user.name'>

type T1 = Selection<Schema, TableColumnIds<Schema, 'user'>[]>
type T3 = Awaited<TableSelection<Schema, 'user', ['name']>>

declare const selection: TableSelection<Schema, 'post'>
const joint = selection.innerJoin('user', { id: 'post.id' })
type QF = ResolveSelection<Schema, SelectionArgs<typeof joint>>

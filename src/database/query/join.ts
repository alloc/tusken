import { Selection } from '../selection'
import { TableRef } from '../table'
import { CheckList } from './check'

export type JoinProps = {
  type: 'inner'
  from: TableRef | Selection
  where: CheckList
}

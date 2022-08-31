import { Selection } from '../../selection'
import { TableRef } from '../../table'
import { Check } from '../check'

export * from './innerJoin'
export * from './relation'

export type JoinProps = {
  type: 'inner'
  from: TableRef | Selection
  on: Check
}

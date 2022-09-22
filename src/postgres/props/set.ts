import type { SortSelection } from '../query/orderBy'

export interface SetProps {
  limit?: number
  offset?: number
  orderBy?: SortSelection
  single?: boolean
}

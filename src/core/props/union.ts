import { Select } from '../query/select'
import { SetProps } from './set'

export interface UnionProps extends SetProps {
  selects: Select[]
}

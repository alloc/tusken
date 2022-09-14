import type { Type } from './type'

export declare namespace t {
  export type bool = Type<'bool', boolean>

  type NULL = Type<'null', null>
  export { NULL as null }
}

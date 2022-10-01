import type { Type } from './type'

export declare namespace t {
  export type bool = Type<'bool', boolean, never>

  type NULL = Type<'null', null, null>
  export { NULL as null }
}

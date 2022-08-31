import type { Selection } from '../../selection'
import { kJoinCheck, kJoinFrom } from '../../symbols'
import { TableType } from '../../table'
import { Check } from '../check'

/** The `ON` syntax of a SQL join. */
export class JoinRelation<From extends TableType | Selection = any> {
  protected [kJoinFrom]: From
  protected [kJoinCheck]: Check

  constructor(from: From, check: Check) {
    this[kJoinFrom] = from
    this[kJoinCheck] = check
  }
}

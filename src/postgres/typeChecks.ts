import type { CheckBuilder } from './check'
import type { ColumnExpression, ColumnRef } from './column'
import type { Expression, ExpressionType } from './expression'
import type { CallExpression } from './function'
import type { Selection } from './selection'
import {
  kColumnFrom,
  kColumnName,
  kExprProps,
  kRuntimeType,
  kSelectionFrom,
  kTableName,
  kTypeId,
} from './symbols'
import type { TableRef } from './table'
import type { Type } from './type'
import { t } from './typesBuiltin'

export function isTableRef(val: any): val is TableRef {
  return kTableName in val
}

export function isColumnRef(val: any): val is ColumnRef {
  return kColumnFrom in val
}

export function isSelection(val: any): val is Selection {
  return kSelectionFrom in val
}

export function isExpression(val: any): val is Expression {
  return kRuntimeType in val
}

/** Is this an expression that can tokenize itself? */
export function isExpressionType(val: any): val is ExpressionType {
  return kExprProps in val
}

export function isBoolExpression(val: any): val is Expression<t.bool | t.null> {
  const exprType = isExpression(val) && val[kRuntimeType]
  return !!exprType && exprType.name == 'bool'
}

export function isCallExpression(
  val: any,
  callee?: string
): val is CallExpression {
  const props = isExpressionType(val) && val[kExprProps]
  return props ? !callee || (props as any).callee == callee : false
}

/**
 * Only use this over `isColumnRef` if your value is never a `ColumnRef`
 * but it might be a `ColumnExpression` (which is more common in libraries
 * than in applications).
 */
export function isColumnExpression(val: any): val is ColumnExpression {
  return kColumnName in val
}

export function isArrayType(val: any): val is Type {
  return kTypeId in val && val.name.endsWith('[]')
}

// TODO: use symbol checking instead of duck typing
export function isCheckBuilder(val: any): val is CheckBuilder {
  return 'left' in val && 'negated' in val && 'wrap' in val
}

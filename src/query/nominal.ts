declare const kSchema: unique symbol
declare const kSelection: unique symbol

export declare class NominalSelection<Schema, Selected> {
  private [kSchema]: Schema
  private [kSelection]: Selected
}

declare const kTableId: unique symbol

export declare class NominalTable<Id> {
  private [kTableId]: Id
}

declare const kJoined: unique symbol

export declare class NominalInnerJoin<Joined> {
  private [kJoined]: Joined
}

declare const kLeft: unique symbol
declare const kRight: unique symbol

export declare class NominalJoinCondition<Left, Right> {
  private [kLeft]: Left
  private [kRight]: Right
}

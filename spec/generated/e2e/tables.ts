import { makeTableRef, RowResult, RowType, TableRef } from "tusken"
import * as t from "./primitives"

export const blah: TableRef<{
  id: t.int4
  test: t.jsonb | t.null
}, "blah", "id", "id" | "test"> = /*#__PURE__*/ makeTableRef("blah", "id", {
  id: t.int4,
  test: t.jsonb,
})

export const follow: TableRef<{
  id: t.int4
  follower: t.int4
  author: t.int4
}, "follow", "id", "id"> = /*#__PURE__*/ makeTableRef("follow", "id", {
  id: t.int4,
  follower: t.int4,
  author: t.int4,
})

export const like: TableRef<{
  id: t.int4
  tweet: t.int4
  author: t.int4
}, "like", "id", "id"> = /*#__PURE__*/ makeTableRef("like", "id", {
  id: t.int4,
  tweet: t.int4,
  author: t.int4,
})

export const tweet: TableRef<{
  id: t.int4
  author: t.int4
  text: t.text
}, "tweet", "id", "id"> = /*#__PURE__*/ makeTableRef("tweet", "id", {
  id: t.int4,
  author: t.int4,
  text: t.text,
})

export const user: TableRef<{
  id: t.int4
  name: t.text
  joinedAt: t.timestamptz
  bio: t.text | t.null
}, "user", "id", "id" | "joinedAt" | "bio"> = /*#__PURE__*/ makeTableRef("user", "id", {
  id: t.int4,
  name: t.text,
  joinedAt: t.timestamptz,
  bio: t.text,
})

// Materialized row types
export interface blah extends RowResult<RowType<typeof blah>> {}
export interface follow extends RowResult<RowType<typeof follow>> {}
export interface like extends RowResult<RowType<typeof like>> {}
export interface tweet extends RowResult<RowType<typeof tweet>> {}
export interface user extends RowResult<RowType<typeof user>> {}
import { Database } from "tusken"
import clientPlugin from "tusken/plugins/pg/client"
import connectionPlugin from "../tusken-plugin/connection"
import "tusken/plugins/pg/runtime/stream"

const db = new Database({
  reserved: ["like", "user"],
  clientPlugin,
  connectionPlugin,
  connection: {
    database: "test"
  },
})

export { db as default }
export * as t from './types'
export * as pg from './functions'
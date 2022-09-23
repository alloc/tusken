#!/usr/bin/env bash
set -e

cd `dirname $BASH_SOURCE[0]`

# 1. Generate the schema from "test" db
tusken generate -d test
cp test/schema.sql e2e

# 2. Mirror the "test" db as "e2e"
tusken wipe -d e2e -c tusken.config.ts
pg_restore -d e2e test/data.dump

# 3. Generate the client for "e2e" db
tusken generate -d e2e
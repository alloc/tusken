export const jsTypeToZod: Record<string, string> = {
  number: 'z.number',
  string: 'z.string',
  boolean: 'z.boolean',
  Date: 'z.coerce.date',
  Json: 'json',
}

// TODO: varchar to z.string().max(n)
export const pgTypeToZod: Record<string, string> = {
  uuid: 'z.string().uuid',
}

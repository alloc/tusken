import { DatePart } from './datePart'

// Customized SQL syntax for special functions
export const templateFunctions: Record<string, string | undefined> = {
  extract: `($1/${DatePart.join('|')}/ FROM $2)`,
}

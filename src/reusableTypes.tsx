/* type for an object whose properties are either unknown  
or too lengthy and complex to list */
export type ObjectType = { [key: string]: any }

export type ActionType = { type: string, payload?: any }
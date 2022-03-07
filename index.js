import { type, equals, any } from 'ramda'

export const wrapInArray = (items) => {
  return isArray(items) ? items : [items];
}

export const isArray = (items) => equals(type(items), 'Array')

export const isArrayOfArrays = any(isArray)

export const wrapInArrayOfArrays = (records) => {
  const array = wrapInArray(records);

  return isArrayOfArrays(array) ? array : [array];
}

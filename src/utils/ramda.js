import { curry, dissoc, flip, reduce } from 'ramda'

export const dissocAll = curry((fields, obj) =>
  reduce(flip(dissoc), obj, fields)
)

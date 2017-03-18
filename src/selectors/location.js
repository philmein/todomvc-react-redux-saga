import { pipe, propOr } from 'ramda'

const location =
  propOr({}, 'location')

export const locationName =
  pipe(location, propOr(void 0, 'name'))

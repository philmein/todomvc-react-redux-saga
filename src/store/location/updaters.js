import { updaters } from 'utils/updaters'
import { __, merge } from 'ramda'
import { LocationUpdateType } from 'store/location/change-requests'
import { Location } from 'store/location/state'

const update = ({ name, options }) =>
  merge(__, { name, options })

export const location = updaters({
  [LocationUpdateType]: update
}, Location())

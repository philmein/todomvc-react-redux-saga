const { expect, test } = global
import { LocationUpdate } from './change-requests'

test('LocationUpdate', () => {
  const locationUpdate = LocationUpdate({ name: 'foo', options: {} })
  const changeRequest = { msg: 'change-request', type: 'LOCATION/UPDATE', name: 'foo', options: {} }

  expect(locationUpdate).toEqual(changeRequest)
})

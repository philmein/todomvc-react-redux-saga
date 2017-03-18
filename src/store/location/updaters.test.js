const { expect, test } = global

import { location } from './updaters'

test('location', () => {
  const changeRequest = { type: 'LOCATION/UPDATE', name: 'foo', options: {} }
  const stateBefore = {}
  const stateAfter = { name: 'foo', options: {} }

  expect(
    location(changeRequest)(stateBefore)
  ).toEqual(stateAfter)
})

const { expect, test } = global
import { redirectTo, updaters } from './updaters'

test('updaters undefined state', () => {
  const updaterTable = {}
  const initialState = 'Foo'
  const changeRequest = { type: 'Bar' }
  const state = void 0

  const updater = updaters(updaterTable, initialState)
  const update = updater(changeRequest)

  expect(update(state)).toEqual(initialState)
})

test('updaters change request not in table', () => {
  const updaterTable = {}
  const initialState = 'Foo'
  const changeRequest = { type: 'Bar' }
  const state = 'Baz'

  const updater = updaters(updaterTable, initialState)
  const update = updater(changeRequest)

  expect(update(state)).toEqual(state)
})

test('redirectTo', () => {
  const property = 'foo'
  const updater = changeRequest => state => 'bar'
  const changeRequest = 'baz'
  const state = { foo: 'bat' }

  const redirect = redirectTo(property, updater, changeRequest)

  const result = { foo: 'bar' }

  expect(redirect(state)).toEqual(result)
})

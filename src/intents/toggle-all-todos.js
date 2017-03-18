import { ToggleAllTodos } from 'business-logic/intents'
import { equals } from 'ramda'
import { call, put, take } from 'redux-saga/effects'
import { CheckboxOnChangeType } from 'utils/events'

const toggleAllTodos = function * (completed) {
  yield put(ToggleAllTodos({ completed }))
}

export const onCheckboxChange = function * () {
  while (true) {
    const { checked, className } = yield take(CheckboxOnChangeType)
    if (equals(className, 'toggle-all')) {
      yield call(toggleAllTodos, checked)
    }
  }
}

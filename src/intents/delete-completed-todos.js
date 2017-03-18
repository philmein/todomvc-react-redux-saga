import { DeleteCompletedTodos } from 'business-logic/intents'
import { equals } from 'ramda'
import { call, put, take } from 'redux-saga/effects'
import { ButtonOnClickType } from 'utils/events'

const deleteTodos = function * () {
  yield put(DeleteCompletedTodos())
}

export const onButtonClick = function * () {
  while (true) {
    const { className } = yield take(ButtonOnClickType)
    if (equals(className, 'clear-completed')) {
      yield call(deleteTodos)
    }
  }
}

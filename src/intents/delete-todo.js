import { DeleteTodo } from 'business-logic/intents'
import { equals } from 'ramda'
import { call, put, take } from 'redux-saga/effects'
import { ButtonOnClickType } from 'utils/events'

const deleteTodo = function * (id) {
  yield put(DeleteTodo({ id }))
}

export const onButtonClick = function * () {
  while (true) {
    const { className, id } = yield take(ButtonOnClickType)
    if (equals(className, 'destroy')) {
      yield call(deleteTodo, id)
    }
  }
}

import { CreateNewTodo } from 'business-logic/intents'
import { and, equals } from 'ramda'
import { call, put, take } from 'redux-saga/effects'
import { TextInputOnKeyPressType } from 'utils/events'

const createNewTodo = function * (text) {
  yield put(CreateNewTodo({ text }))
}

export const onTextInputKeyPress = function * () {
  while (true) {
    const { className, key, value } = yield take(TextInputOnKeyPressType)
    if (and(equals(key, 'Enter'), equals(className, 'new-todo'))) {
      yield call(createNewTodo, value)
    }
  }
}

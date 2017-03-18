import { DeleteTodoType } from 'business-logic/intents'
import { call, put, take } from 'redux-saga/effects'
import { TodosRemove } from 'store/todos/change-requests'
import { dissocAll } from 'utils/ramda'

const removeTodo = function * (params) {
  yield put(TodosRemove(params))
}

export const onDeleteTodo = function * () {
  while (true) {
    const intent = yield take(DeleteTodoType)
    yield call(removeTodo, dissocAll(['type', 'msg'], intent))
  }
}

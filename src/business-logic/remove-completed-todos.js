import { DeleteCompletedTodosType } from 'business-logic/intents'
import { call, put, select, take } from 'redux-saga/effects'
import { completedTodosKeys } from 'selectors/todos'
import { TodosRemoveAll } from 'store/todos/change-requests'

const removeCompletedTodos = function * (ids) {
  yield put(TodosRemoveAll({ ids }))
}

export const onDeleteCompletedTodos = function * () {
  while (true) {
    yield take(DeleteCompletedTodosType)
    const ids = yield select(completedTodosKeys)
    yield call(removeCompletedTodos, ids)
  }
}

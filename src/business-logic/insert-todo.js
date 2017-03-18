import { CreateNewTodoType } from 'business-logic/intents'
import { call, put, take } from 'redux-saga/effects'
import { TodosInsert } from 'store/todos/change-requests'

const insertTodos = function * (text) {
  yield put(TodosInsert({ text }))
}

export const onCreateNewTodo = function * () {
  while (true) {
    const { text } = yield take(CreateNewTodoType)
    yield call(insertTodos, text)
  }
}

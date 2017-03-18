import { ChangeTodoType, ToggleAllTodosType } from 'business-logic/intents'
import { dissoc, map } from 'ramda'
import { call, put, select, take } from 'redux-saga/effects'
import { activeTodosKeys, completedTodosKeys } from 'selectors/todos'
import { TodosUpdate } from 'store/todos/change-requests'

const updateTodo = function * (params) {
  yield put(TodosUpdate(params))
}

export const onChangeTodo = function * () {
  while (true) {
    const intent = yield take(ChangeTodoType)
    yield call(updateTodo, dissoc('type', intent))
  }
}

export const onToggleAllTodos = function * () {
  while (true) {
    const { completed } = yield take(ToggleAllTodosType)
    const ids = yield select(completed ? activeTodosKeys : completedTodosKeys)
    yield map(id => updateTodo({ id, completed }), ids)
  }
}

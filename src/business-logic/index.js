import * as insertTodo from 'business-logic/insert-todo'
import * as removeCompletedTodos from 'business-logic/remove-completed-todos'
import * as removeTodo from 'business-logic/remove-todo'
import * as updateLocation from 'business-logic/update-location'
import * as updateTodo from 'business-logic/update-todo'
import { fork } from 'redux-saga/effects'

export const businessLogic = function * () {
  yield [
    fork(updateLocation.onNavigatedTo),
    fork(insertTodo.onCreateNewTodo),
    fork(removeCompletedTodos.onDeleteCompletedTodos),
    fork(removeTodo.onDeleteTodo),
    fork(updateTodo.onChangeTodo),
    fork(updateTodo.onToggleAllTodos)
  ]
}

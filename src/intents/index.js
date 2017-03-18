import { fork } from 'redux-saga/effects'
import * as createNewTodo from 'intents/create-new-todo'
import * as changeTodo from 'intents/change-todo'
import * as deleteCompletedTodos from 'intents/delete-completed-todos'
import * as deleteTodo from 'intents/delete-todo'
import * as toggleAllTodos from 'intents/toggle-all-todos'

export const intents = function * () {
  yield [
    fork(createNewTodo.onTextInputKeyPress),
    fork(changeTodo.onCheckboxChange),
    fork(changeTodo.onLabelDoubleClick),
    fork(changeTodo.onTextInputKeyPress),
    fork(deleteCompletedTodos.onButtonClick),
    fork(deleteTodo.onButtonClick),
    fork(toggleAllTodos.onCheckboxChange)
  ]
}

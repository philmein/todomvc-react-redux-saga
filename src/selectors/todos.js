import { filter, keys, length, pipe, propEq, propOr } from 'ramda'

const todos =
  propOr({}, 'todos')

const activeTodos =
  pipe(todos, filter(propEq('completed', false)))

export const activeTodosKeys =
  pipe(activeTodos, keys)

const completedTodos =
  pipe(todos, filter(propEq('completed', true)))

export const completedTodosKeys =
  pipe(completedTodos, keys)

export const todosKeys =
  pipe(todos, keys)

export const count =
  pipe(activeTodosKeys, length)

export const todo = id =>
  pipe(todos, propOr({}, id))

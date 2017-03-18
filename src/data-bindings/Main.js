import { activeTodosKeys, completedTodosKeys, todosKeys } from 'selectors/todos'

export const activeTodos = {
  todos: activeTodosKeys
}

export const allTodos = {
  todos: todosKeys
}

export const completedTodos = {
  todos: completedTodosKeys
}

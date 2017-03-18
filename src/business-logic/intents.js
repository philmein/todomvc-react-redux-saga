import { Intent } from 'utils/messages'

export const CreateNewTodoType = 'CREATE_NEW_TODO'
export const CreateNewTodo = Intent(CreateNewTodoType)

export const ChangeTodoType = 'CHANGE_TODO'
export const ChangeTodo = Intent(ChangeTodoType)

export const DeleteCompletedTodosType = 'DELETE_COMPLETED_TODOS'
export const DeleteCompletedTodos = Intent(DeleteCompletedTodosType)

export const DeleteTodoType = 'DELETE_TODO'
export const DeleteTodo = Intent(DeleteTodoType)

export const ToggleAllTodosType = 'TOGGLE_ALL_TODOS'
export const ToggleAllTodos = Intent(ToggleAllTodosType)

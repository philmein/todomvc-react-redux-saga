import { TodoItemEditing } from './TodoItemEditing'
import { TodoItemView } from './TodoItemView'
import React from 'react'

export const TodoItem = ({ id, completed, editing, value }) => (
  editing
  ? <TodoItemEditing id={id} value={value} completed={completed} />
  : <TodoItemView id={id} value={value} completed={completed} />
)

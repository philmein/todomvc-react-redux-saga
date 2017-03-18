import { TodoItem } from 'presentation/TodoItem'
import React from 'react'
import { connect } from 'react-redux'

const TodoPresentation = ({ completed, editing, id, text }) => (
  <TodoItem
    key={id}
    id={id}
    value={text}
    completed={completed}
    editing={editing}
  />
)

const parameterize = connect(
  (state, { bindings: { todo }, id }) => todo(id)(state)
)

export const Todo = parameterize(TodoPresentation)

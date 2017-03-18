import { TextInput } from 'presentation/TextInput'
import React from 'react'
import { connect } from 'react-redux'

const TodoItemEditingPresentation = ({ className, id, onChange, value }) => (
  <li className={className}>
    <TextInput context={{ id }} className='edit' value={value} onChange={onChange} />
  </li>
)

const parameterize = connect(
  (state, { completed, value }) => ({
    className: 'editing' + (completed ? ' completed' : '')
  }),
  (dispatch, { todoItemKey }) => ({
    onChange: () => dispatch()
  })
)

export const TodoItemEditing = parameterize(TodoItemEditingPresentation)

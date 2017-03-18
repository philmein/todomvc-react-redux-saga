import React from 'react'
import { connect } from 'react-redux'

export const TodoCountPresentation = ({ count, items }) => (
  <span className='todo-count'>
    <strong>{count}</strong> {items} left
  </span>
)

const parameterize = connect(
  (state, { bindings }) => {
    const count = bindings.count(state)
    return { count, items: count === 1 ? 'item' : 'items' }
  }
)

export const TodoCount = parameterize(TodoCountPresentation)

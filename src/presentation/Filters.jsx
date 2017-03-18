import { LinkButton } from 'presentation/LinkButton'
import { equals } from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

const FiltersPresentation = ({ active, allTodos, activeTodos, completedTodos }) => (
  <ul className='filters'>
    <li><LinkButton href={allTodos} active={equals(active, 'all')}>All</LinkButton></li>
    <li><LinkButton href={activeTodos} active={equals(active, 'active')}>Active</LinkButton></li>
    <li><LinkButton href={completedTodos} active={equals(active, 'completed')}>Completed</LinkButton></li>
  </ul>
)

const parameterize = connect(
  (state, { bindings: { active }, routes: { allTodos, activeTodos, completedTodos } }) => ({
    active: active(state),
    allTodos,
    activeTodos,
    completedTodos
  })
)

export const Filters = parameterize(FiltersPresentation)

import { Button } from 'presentation/Button'
import { Filters } from 'presentation/Filters'
import { TodoCount } from 'presentation/TodoCount'
import React from 'react'
import { connect } from 'react-redux'

const FooterPresentation = ({ filters, routes, todoCount }) => (
  <footer className='footer'>
    <TodoCount bindings={todoCount} />
    <Filters bindings={filters} routes={routes} />
    <Button className='clear-completed' text='Clear completed' />
  </footer>
)

const parameterize = connect(
  (state, { bindings: { filters, todoCount }, routes }) => ({
    filters,
    routes: routes,
    todoCount
  })
)

export const Footer = parameterize(FooterPresentation)

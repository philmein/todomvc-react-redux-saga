import { Footer } from 'presentation/Footer'
import { Header } from 'presentation/Header'
import { Main } from 'presentation/Main'
import React from 'react'
import { connect } from 'react-redux'

const TodoAppPresentation = ({ footer, main, routes }) => (
  <section className='todoapp'>
    <Header />
    <Main bindings={main} />
    <Footer bindings={footer} routes={routes} />
  </section>
)

const parameterize = connect(
  (state, { bindings: { filters, main, todo, todoCount }, routes }) => ({
    footer: { filters, todoCount },
    main: { main, todo },
    routes
  })
)

export const TodoApp = parameterize(TodoAppPresentation)

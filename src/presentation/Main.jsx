import { Checkbox } from 'presentation/Checkbox'
import { Todo } from 'presentation/Todo'
import { TodoList } from 'presentation/TodoList'
import { map } from 'ramda'
import React from 'react'
import { connect } from 'react-redux'

const MainPresentation = ({ todo, todos }) => (
  <section className='main'>
    <Checkbox className='toggle-all' />
    <TodoList>
      {map(id => <Todo key={id} id={id} bindings={todo} />)(todos)}
    </TodoList>
  </section>
)

const parameterize = connect(
  (state, {
    bindings
  }) => ({ todo: bindings.todo, todos: bindings.main.todos(state) })
)

export const Main = parameterize(MainPresentation)

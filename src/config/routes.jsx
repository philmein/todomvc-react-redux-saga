import { filters } from 'data-bindings/Filters'
import { activeTodos, allTodos, completedTodos } from 'data-bindings/Main'
import { todo } from 'data-bindings/Todo'
import { todoCount } from 'data-bindings/TodoCount'
import { App } from 'presentation/App'
import React from 'react'
import { put } from 'redux-saga/effects'
import { NavigatedTo } from 'utils/events'

export const routes = {
  * '/' () {
    yield put(NavigatedTo({ name: 'all', options: {} }))
  },
  * '/active' () {
    yield put(NavigatedTo({ name: 'active', options: {} }))
  },
  * '/completed' () {
    yield put(NavigatedTo({ name: 'completed', options: {} }))
  }
}

const screenRoutes = {
  allTodos: '#/',
  activeTodos: '#/active',
  completedTodos: '#/completed'
}

const screenBindings = main => ({
  main: main,
  filters,
  todo,
  todoCount
})

export const screens = {
  'active': <App
    bindings={screenBindings(activeTodos)}
    routes={screenRoutes}
  />,
  'all': <App
    bindings={screenBindings(allTodos)}
    routes={screenRoutes}
  />,
  'completed': <App
    bindings={screenBindings(completedTodos)}
    routes={screenRoutes}
  />
}

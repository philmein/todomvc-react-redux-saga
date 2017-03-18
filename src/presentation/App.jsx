import { Info } from 'presentation/Info'
import { TodoApp } from 'presentation/TodoApp'
import React from 'react'

import 'todomvc-app-css/index.css'

export const App = ({ bindings, routes }) => (
  <div>
    <TodoApp bindings={bindings} routes={routes} />
    <Info />
  </div>
)

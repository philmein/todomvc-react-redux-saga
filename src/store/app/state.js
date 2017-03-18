import { defaultTo } from 'ramda'
import { Location } from 'store/location/state'
import { Todos } from 'store/todos/state'

export const App = ({ location, todos } = {}) => ({
  location: defaultTo(Location(), location),
  todos: defaultTo(Todos(), todos)
})

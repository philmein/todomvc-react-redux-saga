import { App } from 'store/app/state'
import { LocationUpdateType } from 'store/location/change-requests'
import { location } from 'store/location/updaters'
import { TodosInsertType, TodosRemoveAllType, TodosRemoveType, TodosUpdateType } from 'store/todos/change-requests'
import { todos } from 'store/todos/updaters'
import { redirectTo, updaters } from 'utils/updaters'

export const app = updaters({
  [LocationUpdateType]: redirectTo('location', location),
  [TodosInsertType]: redirectTo('todos', todos),
  [TodosRemoveAllType]: redirectTo('todos', todos),
  [TodosRemoveType]: redirectTo('todos', todos),
  [TodosUpdateType]: redirectTo('todos', todos)
}, App())

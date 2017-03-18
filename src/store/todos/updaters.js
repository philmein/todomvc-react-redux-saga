import { TodosInsertType, TodosRemoveAllType, TodosRemoveType, TodosUpdateType } from 'store/todos/change-requests'
import { Todo, Todos } from 'store/todos/state'
import { __, assoc, dissoc, evolve, merge } from 'ramda'
import { dissocAll } from 'utils/ramda'
import { updaters } from 'utils/updaters'

const insert = ({ id, text, completed, editing }) => {
  const todo = Todo({ id, text, completed, editing })
  return assoc(todo.id, todo)
}

const remove = ({ id }) =>
  dissoc(id)

const removeAll = ({ ids }) =>
  dissocAll(ids)

const update = params => evolve({
  [params.id]: merge(__, dissocAll([ 'type', 'msg' ], params))
})

export const todos = updaters({
  [TodosInsertType]: insert,
  [TodosRemoveAllType]: removeAll,
  [TodosRemoveType]: remove,
  [TodosUpdateType]: update
}, Todos())

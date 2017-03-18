import { ChangeRequest } from 'utils/messages'

export const TodosInsertType = 'TODOS/INSERT'
export const TodosInsert = ChangeRequest(TodosInsertType)

export const TodosUpdateType = 'TODOS/UPDATE'
export const TodosUpdate = ChangeRequest(TodosUpdateType)

export const TodosRemoveType = 'TODOS/REMOVE'
export const TodosRemove = ChangeRequest(TodosRemoveType)

export const TodosRemoveAllType = 'TODOS/REMOVE_ALL'
export const TodosRemoveAll = ChangeRequest(TodosRemoveAllType)

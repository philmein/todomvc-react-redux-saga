import { generateUUID } from 'utils/uuid'
import { defaultTo } from 'ramda'

export const Todo = ({ id, text, completed, editing } = {}) => ({
  id: defaultTo(generateUUID(), id),
  text,
  completed: defaultTo(false, completed),
  editing: defaultTo(false, editing)
})

export const Todos = (todos = {}) => todos

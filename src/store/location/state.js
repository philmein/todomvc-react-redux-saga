import { defaultTo } from 'ramda'

export const Location = ({ name, options } = {}) => ({
  name: defaultTo('all', name),
  options: defaultTo({}, options)
})

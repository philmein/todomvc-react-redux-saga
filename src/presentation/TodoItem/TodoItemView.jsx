import { Button } from 'presentation/Button'
import { Checkbox } from 'presentation/Checkbox'
import { LabelButton } from 'presentation/LabelButton'
import React from 'react'
import { connect } from 'react-redux'

const TodoItemViewPresentation = ({ checked, id, liClassName, value }) => (
  <li className={liClassName}>
    <div className='view'>
      <Checkbox context={{ id }} className='toggle' checked={checked} />
      <LabelButton context={{ id }}>{value}</LabelButton>
      <Button context={{ id }} className='destroy' />
    </div>
  </li>
)

const parameterize = connect(
  (state, { completed, value }) => ({
    liClassName: completed ? 'completed' : void 0,
    checked: completed
  })
)

export const TodoItemView = parameterize(TodoItemViewPresentation)

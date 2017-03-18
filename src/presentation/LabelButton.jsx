import React from 'react'
import { connect } from 'react-redux'
import { LabelDoubleClick } from 'utils/events'

const LabelButtonPresentation = ({ children, onDoubleClick }) => (
  <label onDoubleClick={onDoubleClick}>{children}</label>
)

const parameterize = connect(
  () => ({}),
  (dispatch, { className, context, id }) => ({
    onDoubleClick () {
      dispatch(LabelDoubleClick({ className, id, ...context }))
    }
  })
)

export const LabelButton = parameterize(LabelButtonPresentation)

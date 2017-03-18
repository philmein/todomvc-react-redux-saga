import React from 'react'
import { connect } from 'react-redux'
import { ButtonOnClick } from 'utils/events'

const ButtonPresentation = ({ className, onClick, text }) => (
  <button className={className} onClick={onClick}>{text}</button>
)

const parameterize = connect(
  () => ({}),
  (dispatch, { className, context, id }) => ({
    onClick () {
      dispatch(ButtonOnClick({ className, id, ...context }))
    }
  })
)

export const Button = parameterize(ButtonPresentation)

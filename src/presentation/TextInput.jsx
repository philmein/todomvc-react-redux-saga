import React from 'react'
import { connect } from 'react-redux'
import { TextInputOnKeyPress } from 'utils/events'

const TextInputPresentation = ({ className, onKeyPress, placeholder, value }) => (
  <input
    type='text'
    className={className}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
    defaultValue={value}
  />
)

const parameterize = connect(
  () => ({}),
  (dispatch, { className, context, id }) => ({
    onKeyPress (event) {
      const key = event.key
      const value = event.target.value
      dispatch(TextInputOnKeyPress({ className, id, key, value, ...context }))
    }
  })
)

export const TextInput = parameterize(TextInputPresentation)

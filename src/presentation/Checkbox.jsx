import React from 'react'
import { connect } from 'react-redux'
import { CheckboxOnChange } from 'utils/events'

const CheckboxPresentation = ({ checked, className, onChange }) => (
  <input type='checkbox' className={className} onChange={onChange} checked={checked} />
)

const parameterize = connect(
  (state, { checked }) => ({}),
  (dispatch, { className, context, id }) => ({
    onChange (event) {
      const checked = event.target.checked
      dispatch(CheckboxOnChange({ className, id, checked, ...context }))
    }
  })
)

export const Checkbox = parameterize(CheckboxPresentation)

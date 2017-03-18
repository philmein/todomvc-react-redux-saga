import { screens } from 'config/routes'
import { connect } from 'react-redux'

const RouterPresentation = ({ jsxElement }) => jsxElement

const parameterize = connect(
  (state, { bindings }) => {
    const locationName = bindings.locationName(state)
    const jsxElement = screens[locationName]
    return { jsxElement }
  },
  () => ({})
)

export const Router = parameterize(RouterPresentation)

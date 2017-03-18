import { applyMiddleware, compose as reduxCompose, createStore } from 'redux'
import { app } from 'store/app/updaters'

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose

export const configureStore = saga => {
  const reducer = (state, action) => app(action)(state)
  const middleware = applyMiddleware(saga)
  return createStore(reducer, compose(middleware))
}

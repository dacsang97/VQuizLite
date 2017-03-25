import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { middleware as awaitMiddleware }from 'redux-await';
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, awaitMiddleware)
)

export default configureStore

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './store/user'
import product from './store/product'
import cart from './store/cart'

const reducer = combineReducers({user, product, cart})
const middleware =
  process.env.NODE_ENV !== 'production'
    ? composeWithDevTools(
        applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
      )
    : composeWithDevTools(applyMiddleware(thunkMiddleware))
// applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))

const store = createStore(reducer, middleware)

export default store
export * from './store/user'
export * from './store/product'
export * from './store/cart'

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers/root_reducer';
//
// const middleware = [];
//
// middleware.push(thunk);
//
// if (process.env.NODE_ENV !== 'production') {
//   const logger = require('redux-logger');
//   middleware.push(logger());
// }
//
// const configureStore = (preloadedState = {}) => {
//   return createStore(rootReducer, preloadedState, applyMiddleware(...middleware));
// }
//
// export default configureStore;

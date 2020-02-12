/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import thunk from 'redux-thunk'
import throttle from 'lodash.throttle'
import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import createReducer from 'reducers/Index'

const INIT_STATE = localStorage.nasas ? localStorage.nasas : {}
const enhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const composeEnhancers = enhancer(applyMiddleware(thunk))

const store = createStore(createReducer(), fromJS(INIT_STATE), composeEnhancers)

// Save state to localstore
store.subscribe(
  throttle(() => {
    try {
      const state = store.getState()
      const serializedState = JSON.stringify({ main: state.get('MainApp').toJS() })
      localStorage.setItem('state', serializedState)
    } catch (err) {
      // Hanle errors
      // console.warn('Cannot log store to localstore', err)
    }
  }),
)

export default store

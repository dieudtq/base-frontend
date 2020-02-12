/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import { combineReducers } from 'redux-immutable'
import MainApp from './NASAReducer'

const createReducer = injectedReducers =>
  combineReducers({
    MainApp,
    ...injectedReducers,
  })

export default createReducer

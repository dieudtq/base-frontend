/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */
import _ from 'lodash'
import { fromJS } from 'immutable'

import {
  ADD,
  EDIT,
  ADD_NASA,
  DELETE_NASA,
  LIKE_NASA,
  EDIT_NASA,
  SEARCH,
  LOADDING,
} from 'actions/ActionType'

const INIT_STATE = !_.isEmpty(localStorage.state)
  ? JSON.parse(localStorage.state).main
  : {
      detail: [],
      action: 'ADD',
      nasa: [],
      items: [],
      total: 0,
      loadding: false,
    }

const NasaReducer = (state = fromJS(INIT_STATE), action) => {
  switch (action.type) {
    case ADD: {
      return state.set('detail', action.data).set('action', action.action)
    }
    case EDIT: {
      return state.set('detail', action.data).set('action', action.action)
    }
    case ADD_NASA: {
      return state
        .updateIn(['nasa'], arr => arr.push(fromJS(action.data)))
        .set('items', [])
        .set('total', 0)
        .set('loadding', false)
    }
    case EDIT_NASA: {
      return state.set(
        'nasa',
        state
          .get('nasa')
          .map(item =>
            item.get('id') === action.data.id ? fromJS({ like: item.like, ...action.data }) : item,
          ),
      )
    }
    case DELETE_NASA: {
      return state.set(
        'nasa',
        state.get('nasa').filter(item => item.get('id') !== action.id),
      )
    }
    case LIKE_NASA: {
      return state.set(
        'nasa',
        state
          .get('nasa')
          .map(item =>
            item.get('id') === action.id
              ? fromJS({ ...item.toJS(), like: !item.get('like') })
              : item,
          ),
      )
    }
    case SEARCH: {
      return state
        .set('items', action.data.items)
        .set('total', action.data.total)
        .set('loadding', action.data.loadding)
    }
    case LOADDING: {
      return state.set('loadding', action.data.loadding)
    }
    default:
      return state
  }
}

export default NasaReducer

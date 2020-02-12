/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */
import axios from 'axios'
import { apiServer } from 'Config'
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

export const add = (data, action) => dispatch => {
  dispatch({
    type: ADD,
    data,
    action,
  })
}

export const addNasa = data => dispatch => {
  dispatch({
    type: ADD_NASA,
    data,
  })
}

export const deleteNasa = id => dispatch => {
  dispatch({
    type: DELETE_NASA,
    id,
  })
}

export const likeNasa = id => dispatch => {
  dispatch({
    type: LIKE_NASA,
    id,
  })
}

export const editNasa = (data, action) => dispatch => {
  dispatch({
    type: EDIT,
    data,
    action,
  })
}
export const handleEditNasa = data => dispatch => {
  dispatch({
    type: EDIT_NASA,
    data,
  })
}

export const search = term => dispatch => {
  term &&
    dispatch({
      type: LOADDING,
      data: {
        loadding: true,
      },
    })
  term &&
    axios.get(`${apiServer}search?q=${term}`).then(data =>
      dispatch({
        type: SEARCH,
        data: {
          items: data.data.collection.items,
          total: data.data.collection.metadata.total_hits,
          loadding: false,
        },
      }),
    )
}

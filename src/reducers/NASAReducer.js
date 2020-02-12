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
      nasa: [
        {
          time: '2019-05-31T00:00:00Z',
          like: true,
          title: 'Mars Celebration',
          type: 'video',
          video: '',
          id: '6f1ed651-d195-4b89-a1d9-62be47aa1f0b',
          image: 'https://images-assets.nasa.gov/image/NHQ201905310039/NHQ201905310039~thumb.jpg',
          description:
            'The Mars celebration Friday, May 31, 2019, in Mars, Pennsylvania. NASA is in the small town to celebrate Mars exploration and share the agency’s excitement about landing astronauts on the Moon in five years. The celebration includes a weekend of Science, Technology, Engineering, Arts and Mathematics (STEAM) activities. Photo Credit: (NASA/Bill Ingalls)',
          category: 'HQ',
        },
        {
          time: '2018-04-19T00:00:00Z',
          like: false,
          title: 'MISSE-FF',
          type: '2',
          video: '',
          id: 'd6b81312-b225-4318-8593-e7f7134ebb1c',
          image: 'https://images-assets.nasa.gov/image/iss055e026913/iss055e026913~thumb.jpg',
          description:
            'iss055e026913 (4/19/2018) --- View of the Materials ISS Experiment Flight Facility (MISSE-FF) taken by the External High Definition Camera (EHDC1). The MISSE-FF platform provides the ability to test materials, coatings, and components or other larger experiments in the harsh environment of space, which is virtually impossible to do collectively on Earth.',
          category: 'JSC',
        },
        {
          time: '1977-10-26T00:00:00Z',
          like: false,
          title:
            'Approach & Landing Test (ALT) - Shuttle - Public Affairs Office (PAO) News Release - Free-Flight (FF)-5 Photography',
          type: 1,
          video: '',
          id: 'a59c8369-2d05-4566-8999-861825fedb98',
          image: 'https://images-assets.nasa.gov/image/S77-30022/S77-30022~thumb.jpg',
          description:
            'PAO news release material for the 5th and final FF of the ALT series.   Precise moment of separation captured by camera from a T-38 chase plane.',
          category: 'JSC',
        },
      ],
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
      return state.updateIn(['nasa'], arr => arr.push(fromJS(action.data)))
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

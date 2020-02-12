/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 * @Sumary Connect Home page with store
 */

import { connect } from 'react-redux'
import Home from 'components/Pages/Home'
import { add, deleteNasa, likeNasa, editNasa } from 'actions/NASAAction'

const mapStateToProps = state => {
  const data = state.get('MainApp').toJS()
  return data
}

export default connect(mapStateToProps, {
  add,
  deleteNasa,
  likeNasa,
  editNasa,
})(Home)

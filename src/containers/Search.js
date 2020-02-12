/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import { connect } from 'react-redux'
import Search from 'components/Pages/Search'
import { add, search } from 'actions/NASAAction'

const mapStateToProps = state => {
  const data = state.get('MainApp').toJS()
  return data
}

export default connect(mapStateToProps, { add, search })(Search)

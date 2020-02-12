/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-11
 * @Sumary Connect modal with store to reuse component Modal
 */

import { connect } from 'react-redux'
import DetailModal from 'components/Organisms/DetailForm'
import { addNasa, handleEditNasa } from 'actions/NASAAction'

const DetailModalContainer = props => <DetailModal {...props} />

const mapStateToProps = state => {
  const data = state.get('MainApp').toJS()
  return data
}

export default connect(mapStateToProps, { addNasa, handleEditNasa })(DetailModalContainer)

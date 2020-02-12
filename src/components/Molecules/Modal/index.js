/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@nexlesoft.com
 * @LastModifiedTime 2020-02-09
 */

import { memo } from 'react'

import cssModuleNameTag from 'utils/cssModuleNameTag'
import Close from '../../../../assets/svg/ic_close.svg'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

export default memo(props => {
  const { isOpen, onClose, children } = props

  return (
    <div className={cssModules`root ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={cssModules`modal-box`} onClick={e => e.stopPropagation()}>
        <div className={cssModules`close`} onClick={onClose}>
          <Close />
        </div>
        {children}
      </div>
    </div>
  )
})

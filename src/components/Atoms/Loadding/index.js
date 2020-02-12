/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import React, { memo } from 'react'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './Styles.scss'

const cssModules = cssModuleNameTag(styles)

function Loadding() {
  return <div className={cssModules`loadding`} />
}

export default memo(Loadding)

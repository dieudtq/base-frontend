/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import React, { memo } from 'react'
import { func, node, element } from 'prop-types'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './Styles.scss'

const cssModules = cssModuleNameTag(styles)

function Button({ children, handleClick, theme, icon, ...rest }) {
  return (
    <button
      type="button"
      className={cssModules`root`}
      data-theme={theme}
      onClick={handleClick}
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
}

Button.propTypes = {
  icon: node,
  handleClick: func,
  children: element,
}

Button.defaultProps = {
  handleClick: null,
}

export default memo(Button)

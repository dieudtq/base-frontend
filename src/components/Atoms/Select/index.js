/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import React, { memo } from 'react'
import { string, func, oneOfType, number } from 'prop-types'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Option = memo(({ index, value, children, ...rest }) => (
  <option key={index} value={value} {...rest}>
    {children}
  </option>
))

function Select({ name, onChange, value, label, children, ...rest }) {
  return (
    <div className={cssModules`root`}>
      <select value={value} onChange={onChange} {...rest}>
        {children}
      </select>
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

Select.propTypes = {
  name: string,
  label: string,
  value: oneOfType([string, number]),
  onChange: func,
}

Select.defaultProps = {
  value: '',
}

export { Option }
export default memo(Select)

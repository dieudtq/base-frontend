/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 * @Summary Input component for reuse
 */

import React, { memo } from 'react'
import { string, func } from 'prop-types'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Input({ name, onChange, value, label, ...rest }) {
  return (
    <div className={cssModules`root`}>
      <input id={name} name={name} onChange={onChange} value={value} {...rest} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

Input.propTypes = {
  name: string.isRequired,
  label: string,
  value: string,
  onChange: func.isRequired,
}

Input.defaultProps = {
  value: '',
}

export default memo(Input)

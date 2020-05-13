import React from 'react'
import '../../style/default.scss'

const Alert = props => {
  const defaultClasses = ["alert"]
  const classProp = props.className || ''
  return (
  <div className={[...defaultClasses, ...(classProp.split(' '))].join(' ')} >
    {props.children}
  </div>)
}
export default Alert
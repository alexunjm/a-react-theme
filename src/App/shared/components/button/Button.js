import React from 'react'
import '../../style/default.scss'
import './Button.scss'

const Button = props => {
  const defaultClasses = ["btn"]
  const classProp = props.className || ''
  return (
  <div className={[...defaultClasses, ...(classProp.split(' '))].join(' ')}>
    <button>{props.children}</button>
  </div>)
}
export default Button
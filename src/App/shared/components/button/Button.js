import React from 'react'
import '../../style/default.scss'
import './Button.scss'

const Button = props => {
  const defaultClasses = ["btn"]
  const classProp = props.className || ''
  return (
  <div 
    className={[...defaultClasses, ...(classProp.split(' '))].join(' ')} 
    onClick={props.onClick} >
    <button>{props.children}</button>
  </div>)
}
export default Button
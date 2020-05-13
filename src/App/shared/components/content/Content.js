import React from 'react'
import '../../style/default.scss'

const Content = props => {
  const defaultClasses = ["content"]
  const classProp = props.className || ''
  return (
  <div className={[...defaultClasses, ...(classProp.split(' '))].join(' ')} >
    {props.children}
  </div>)
}
export default Content
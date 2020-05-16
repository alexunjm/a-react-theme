import React from 'react'
import '../../style/default.scss'

const Container = props => {
  const defaultClasses = ["container"]
  const classProp = props.className || ''
  return (
  <div className={[...defaultClasses, ...(classProp.split(' '))].join(' ')} >
    {props.children}
  </div>)
}
export default Container
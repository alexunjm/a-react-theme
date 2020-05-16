import React from 'react'
import '../../style/default.scss'

const Alert = props => {
  const defaultClasses = ["alert"]
  return (
  <div id={props.data.id} className={[...defaultClasses, ...(props.data.classes || [])].join(' ')} onClick={props.onClick} >
    {props.children}
  </div>)
}
export default Alert
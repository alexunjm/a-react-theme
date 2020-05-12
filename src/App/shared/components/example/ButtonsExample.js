import React, { useState } from 'react'
import Button from '../button'

const ButtonGroup = props => {
  const defaultClasses = ["btn-group"]
  const defaultClassBtn = ["btn"]
  const [outline, setOutline] = useState(props.outline)
  if (outline) {
    defaultClassBtn.push("outline")
  }
  console.log("outline", outline)
  const classProp = props.className || ''
  return (
  <div className={[...defaultClasses, ...(classProp.split(' '))].join(' ')}>
    {[
      "primary", "secondary", "tertiary", 
      "success", "info", "warning", "danger", 
      "light", "dark"
    ].map((type, i) => {
      return <Button key={i} className={[...defaultClassBtn, type].join('-')}>{type}</Button>
    })}
  </div>)
}
export default ButtonGroup
import React, { useState } from 'react'
import Button from '../button'

const ButtonGroup = props => {

  const outlineChange = outline => outline ? 'btn-outline' : 'btn'
  const [outline, setOutline] = useState(props.outline ? true : false)
  const [prefix, setPrefix] = useState(outlineChange(outline))

  const buttons = [
    "primary", "secondary", "tertiary", 
    "success", "info", "warning", "danger", 
    "light", "dark"
  ]

  const handleBtnClick = evt => {
    const newVal = !outline
    setOutline(newVal)
    setPrefix(outlineChange(newVal))
  }

  return (
  <div className="btn-group">
    {buttons.map((type, i) => {
      return (
        <Button 
          className={[prefix, type].join('-')} 
          key={i} 
          onClick={handleBtnClick}
        >{type}</Button>
      )
    })}
  </div>)
}
export default ButtonGroup
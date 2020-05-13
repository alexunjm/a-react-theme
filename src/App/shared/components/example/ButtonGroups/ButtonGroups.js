import React, { useState } from 'react'
import Button from '../../button'
import './ButtonGroups.scss';

const ButtonGroup = props => {
  return (
    <div className="group">
      {props.group.map((type, i) => (
        <Button 
          className={[props.prefix, type].join('-')} 
          key={i} 
          onClick={props.handleBtnClick}
        >{type}</Button>
      ))}
    </div>
  )
}

const ButtonGroups = props => {

  const outlineChange = outline => outline ? 'btn-outline' : 'btn'
  const [outline, setOutline] = useState(props.outline ? true : false)
  const [prefix, setPrefix] = useState(outlineChange(outline))

  const groups = [
    ["primary", "secondary", "tertiary"],
    ["success", "info", "warning", "danger"],
    ["light", "dark"]
  ]

  const handleBtnClick = evt => {
    const newVal = !outline
    setOutline(newVal)
    setPrefix(outlineChange(newVal))
  }

  return (
    <div className="groups">
      {groups.map((group, i) => 
        <ButtonGroup group={group} handleBtnClick={handleBtnClick} key={i} prefix={prefix}/>
      )}
    </div>
  )
}
export default ButtonGroups
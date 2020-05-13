import React/* , { useState } */ from 'react'
import Alert from '../../alert'
import './AlertStack.scss';

const AlertStack = props => {

  const stack = [
    "primary", "secondary", "tertiary",
    "success", "info", "warning", "danger",
    "light", "dark"
  ]

  const handleClick = evt => {
    console.log("evt", evt)
  }

  return (
    <div className="alert-stack">
      {stack.map((type, i) => 
        <Alert className={`alert-${type}`} handleClick={handleClick} key={i}>{type} alert</Alert>
      )}
    </div>
  )
}
export default AlertStack
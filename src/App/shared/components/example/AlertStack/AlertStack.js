import React, { useState } from 'react'
import Alert from '../../alert'
import './AlertStack.scss';

const AlertStack = props => {

  const [stack, updateStack] = useState(
    [
      "primary", "secondary", "tertiary",
      "success", "info", "warning", "danger",
      "light", "dark"
    ].map((type, id) => ({type, id, classes: [`alert-${type}`]}))
  )
  const handleClick = evt => {
    // console.log("evt.target", {target: evt.target, currentTarget: evt.currentTarget, id: evt.id})
    // evt.currentTarget.style.backgroundColor = '#ccc'
    const removeId = evt.target.dataset.remove;
  }

  return (
    <div className="alert-stack">
      {stack.map((elm) => 
        <Alert data={elm} onClick={handleClick} key={elm.id}>{elm.type} alert</Alert>
      )}
    </div>
  )
}
export default AlertStack
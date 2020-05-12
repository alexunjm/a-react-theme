import React from 'react'
import '../../style/default.scss'
import './Button.scss'

const Button = props => <div className="color-80">
  <button className="btn">{props.children}</button>
</div>

export default Button
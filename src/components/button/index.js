import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} className="btn btn-primary" onclick={props.onclick}
    >{props.title}</button>
  )
}

export default Button
import React from 'react'

const Input= (props) => {
  return (
    <div className="mb-3">
    <label htmlFor={props.id} className="form-label">{props.title}</label>
    <input type={props.type}  className="form-control" name={props.name} onChange={props.onChange} id={props.id} aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  )
}

export default Input
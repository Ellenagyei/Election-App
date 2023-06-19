import React from 'react';

const Button = (props) => {
    const btnStyle = {
        marginTop: "20px",
    };
  return (
    <button type={props.type} className="btn btn-primary" onclick={props.onclick} style={btnStyle}
    >{props.title}</button>
  );
};

export default Button;
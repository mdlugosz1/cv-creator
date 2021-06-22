import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.click} data-id={props.data}>
      {props.name}
    </button>
  );
};

export default Button;

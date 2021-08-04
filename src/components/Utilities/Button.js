import React from 'react';
import '../../styles/Buttons.css';

const Button = (props) => {
    return (
        <button onClick={props.click} data-id={props.data} className={props.class}>
            {props.name}
        </button>
    );
};

export default Button;

import React from 'react';
import '../../styles/Headers.css';

const Headers = (props) => {
  return (
    <div className="headers">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Headers;

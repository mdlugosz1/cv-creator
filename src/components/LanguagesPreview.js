import React from 'react';
import Headers from '../components/Utilities/Headers';

const Languages = (props) => {
  return (
    <div>
      <Headers title={'Languages'} />
      <ul>
        {props.languages.map((element) => {
          return <li key={element.id}>{element.language}</li>;
        })}
      </ul>
    </div>
  );
};

export default Languages;

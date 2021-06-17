import React from 'react';
import Headers from '../components/Utilities/Headers';

const Skills = (props) => {
  return (
    <div>
      <Headers title={'Skills'} />
      <ul>
        {props.skill.map((element) => {
          return <li key={element.id}>{element.skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;

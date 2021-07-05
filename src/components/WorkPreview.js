import React from 'react';
import Headers from './Utilities/Headers';

const WorkPreview = (props) => {
  return (
    <div className="work-experience">
      <Headers title={'Work experience'} />
      {props.experience.map((exp) => {
        return (
          <div key={exp.id}>
            <h2>{exp.position}</h2>
            <div>
              <h3>{exp.company}</h3>
              <h3>{exp.startDate}</h3>
              <h3>{exp.endDate}</h3>
            </div>
            <p>{exp.responsibilities}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkPreview;

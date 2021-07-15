import React from 'react';
import Headers from './Utilities/Headers';

const EducationPreview = (props) => {
  return (
    <div className="education">
      <Headers title={'Education'} />
      {props.education.map((edu) => {
        return (
          <div key={edu.id}>
            <h2>{edu.university}</h2>
            <div>
              <h3>{edu.degree}</h3>
              <h3>{edu.startDate}</h3>
              <h3>{edu.endDate}</h3>
            </div>
            <p>{edu.responsibilities}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EducationPreview;

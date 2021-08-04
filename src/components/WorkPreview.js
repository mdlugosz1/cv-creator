import React from 'react';
import Headers from './Utilities/Headers';

const WorkPreview = (props) => {
    return (
        <div className="work-experience">
            <Headers title={'Work experience'} />
            {props.experience.map((exp) => {
                return (
                    <div key={exp.id} className="work-content">
                        <h2>{exp.position}</h2>
                        <div>
                            <h4>{exp.company}</h4>
                            <h4>{exp.startDate}</h4>
                            <h4>{exp.endDate}</h4>
                        </div>
                        <p>{exp.responsibilities}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default WorkPreview;

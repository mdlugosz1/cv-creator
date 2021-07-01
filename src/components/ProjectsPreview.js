import React from 'react';
import Headers from './Utilities/Headers';

const Projects = (props) => {
  return (
    <div>
      <Headers title="Projects" />
      {props.projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <div>
            <h3>
              <a href={project.demo}>Demo</a>
            </h3>
            <h3>
              <a href={project.repository}>Repository</a>
            </h3>
          </div>
          <div>
            <p>{project.descripiton}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

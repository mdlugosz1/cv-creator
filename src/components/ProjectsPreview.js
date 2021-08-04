import React from 'react';
import Headers from './Utilities/Headers';

const Projects = (props) => {
    return (
        <div>
            <Headers title="Projects" />
            {props.projects.map((project) => (
                <div key={project.id} className="projects-content">
                    <h2>{project.name}</h2>
                    <div className="links">
                        <h4>
                            <a href={project.demo}>Demo</a>
                        </h4>
                        <h4>
                            <a href={project.repository}>Repository</a>
                        </h4>
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

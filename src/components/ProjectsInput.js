import React, { useState } from 'react';
import Form from './Utilities/Form';
import uniqid from 'uniqid';

const ProjectsInput = (props) => {
  const [projectsInput, setProjectsInput] = useState({
    projects: [
      {
        mainID: uniqid(),
        inputs: [
          {
            id: uniqid(),
            type: 'text',
            name: 'name',
            placeholder: 'Project name',
          },
          {
            id: uniqid(),
            type: 'text',
            name: 'demo',
            placeholder: 'Live version link',
          },
          {
            id: uniqid(),
            type: 'text',
            name: 'repository',
            placeholder: 'Repository link',
          },
          {
            id: uniqid(),
            name: 'descripiton',
            tag: 'textarea',
            placeholder: 'Project description',
          },
        ],
      },
    ],
    button: 'Add',
  });

  const inputTemplate = () => {
    return {
      mainID: uniqid(),
      inputs: [
        {
          id: uniqid(),
          type: 'text',
          name: 'name',
          placeholder: 'Project name',
        },
        {
          id: uniqid(),
          type: 'text',
          name: 'demo',
          placeholder: 'Live version link',
        },
        {
          id: uniqid(),
          type: 'text',
          name: 'repository',
          placeholder: 'Repository link',
        },
        {
          id: uniqid(),
          name: 'descripiton',
          tag: 'textarea',
          placeholder: 'Project description',
        },
      ],
    };
  };

  const handleChange = (e) => {
    const key = props.getMainKey(projectsInput);
    props.onInputChange({
      [key]: {
        [e.target.name]: e.target.value,
        id: e.target.closest('div').dataset.mainId,
      },
    });
  };

  const removeInputBlock = (e) => {
    props.removeInput(projectsInput, props, setProjectsInput, e);
  };

  const createNewInputs = () => {
    const newInput = inputTemplate();
    props.addInput(newInput, props, projectsInput, setProjectsInput);
  };

  return (
    <div>
      <Form
        inputs={projectsInput.projects}
        button={projectsInput.button}
        handleChange={handleChange}
        deleteInput={removeInputBlock}
        createInput={createNewInputs}
      />
    </div>
  );
};

export default ProjectsInput;

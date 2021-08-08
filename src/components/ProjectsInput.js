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

  const getMainStateKey = () => {
    return Object.keys(projectsInput)
      .filter((key) => key !== 'button')
      .toString();
  };

  const handleChange = (e) => {
    props.onInputChange({
      [getMainStateKey()]: {
        [e.target.name]: e.target.value,
        id: e.target.closest('div').dataset.mainId,
      },
    });
  };

  const removeInputBlock = (e) => {
    const mainId = e.target.closest('div').dataset.mainId;
    const key = getMainStateKey();

    const index = projectsInput[key].indexOf(
      projectsInput[key].find(({ mainID }) => mainID === mainId)
    );

    setProjectsInput((prevState) => {
      const newState = prevState[key];
      newState.splice(index, 1);
      return { [key]: newState, button: 'Add' };
    });

    props.removeData(index, key);
  };

  const createNewInputs = () => {
    const key = getMainStateKey();
    const newInputs = inputTemplate();

    setProjectsInput((prevState) => {
      const newState = prevState[key];
      newState.push(newInputs);
      return { [key]: newState, button: 'Add' };
    });
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

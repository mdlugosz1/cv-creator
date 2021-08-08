import React, { useState } from 'react';
import uniqid from 'uniqid';
import Form from './Utilities/Form';

const SkillsInput = (props) => {
  const [input, setInput] = useState({
    inputs: [
      {
        id: uniqid(),
        type: 'text',
        button: 'Remove',
        name: 'skill',
        placeholder: 'Skill',
        section: 'skills',
      },
    ],
    button: 'Add',
  });

  const inputTemplate = () => {
    return {
      id: uniqid(),
      type: 'text',
      button: 'Remove',
      name: 'skill',
      placeholder: 'Skill',
      section: 'skills',
    };
  };

  const handleChange = (e) => {
    const target = e.target;
    const data = target.dataset.id;
    const value = target.value;

    props.onInputChange({
      skills: {
        [target.name]: value,
        id: data,
      },
    });
  };

  const removeInput = (e) => {
    props.removeInput(input, props, setInput, e);
  };

  const createInput = () => {
    const setNewInput = inputTemplate();
    props.addInput(setNewInput, setInput);
  };

  return (
    <div>
      <Form
        inputs={input.inputs}
        button={input.button}
        handleChange={handleChange}
        createInput={createInput}
        deleteInput={removeInput}
      />
    </div>
  );
};

export default SkillsInput;

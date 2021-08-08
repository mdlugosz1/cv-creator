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

  const createInput = () => {
    const newInput = inputTemplate();

    console.log(input);
    setInput((prevState) => {
      const currentInputs = [...prevState.inputs];
      currentInputs.push(newInput);

      return {
        inputs: currentInputs,
        button: 'Add',
      };
    });
  };

  const removeInput = (e) => {
    const currentInput = input.inputs.find(({ id }) => id === e.target.dataset.id);
    const inputIndex = input.inputs.indexOf(currentInput);

    setInput((prevState) => {
      const newInputs = [...prevState.inputs];
      newInputs.splice(inputIndex, 1);

      return {
        inputs: newInputs,
        button: 'Add',
      };
    });

    props.removeData(inputIndex, currentInput.section);
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

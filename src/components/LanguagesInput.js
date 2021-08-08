import React, { useState } from 'react';
import Form from './Utilities/Form';
import uniqid from 'uniqid';

const LanguagesInput = (props) => {
  const [input, setInput] = useState({
    inputs: [
      {
        id: uniqid(),
        type: 'text',
        button: 'Remove',
        name: 'language',
        placeholder: 'Language',
        section: 'languages',
      },
    ],
    button: 'Add',
  });

  const inputTemplate = () => {
    return {
      id: uniqid(),
      type: 'text',
      button: 'Remove',
      name: 'language',
      placeholder: 'Language',
      section: 'languages',
    };
  };

  const handleChange = (e) => {
    const target = e.target;
    const data = target.dataset.id;
    const value = target.value;

    props.onInputChange({
      languages: {
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
    props.addInput(setNewInput, props, input, setInput);
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

export default LanguagesInput;

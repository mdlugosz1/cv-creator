import React, { useState } from 'react';
import uniqid from 'uniqid';
import Form from './Utilities/Form';

const EducationInput = (props) => {
  const [educationInput, setEducationInput] = useState({
    education: [
      {
        mainID: uniqid(),
        inputs: [
          {
            id: uniqid(),
            type: 'text',
            name: 'university',
            placeholder: 'University',
          },
          {
            id: uniqid(),
            type: 'text',
            name: 'degree',
            placeholder: 'Degree',
          },
          {
            id: uniqid(),
            type: 'text',
            name: 'startDate',
            placeholder: 'Start date MM/YYYY',
          },
          {
            id: uniqid(),
            name: 'endDate',
            type: 'text',
            placeholder: 'End date MM/YYYY',
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
          name: 'university',
          placeholder: 'University',
        },
        {
          id: uniqid(),
          type: 'text',
          name: 'degree',
          placeholder: 'Degree',
        },
        {
          id: uniqid(),
          type: 'text',
          name: 'startDate',
          placeholder: 'Start date MM/YYYY',
        },
        {
          id: uniqid(),
          name: 'endDate',
          type: 'text',
          placeholder: 'End date MM/YYYY',
        },
      ],
    };
  };

  const handleChange = (e) => {
    const key = props.getMainKey(educationInput);
    props.onInputChange({
      [key]: {
        [e.target.name]: e.target.value,
        id: e.target.closest('div').dataset.mainId,
      },
    });
  };

  const removeInputBlock = (e) => {
    props.removeInput(educationInput, props, setEducationInput, e);
  };

  const createNewInputs = () => {
    const newInput = inputTemplate();
    props.addInput(newInput, props, educationInput, setEducationInput);
  };

  return (
    <div>
      <Form
        inputs={educationInput.education}
        button={educationInput.button}
        handleChange={handleChange}
        deleteInput={removeInputBlock}
        createInput={createNewInputs}
      />
    </div>
  );
};

export default EducationInput;

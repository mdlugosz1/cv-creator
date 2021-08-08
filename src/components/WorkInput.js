import React, { useState } from 'react';
import uniqid from 'uniqid';
import Form from './Utilities/Form';

const WorkInput = (props) => {
  const [workInputs, setWorkInputs] = useState({
    work: [
      {
        mainID: uniqid(),
        inputs: [
          {
            id: uniqid(),
            type: 'text',
            name: 'position',
            placeholder: 'Position',
          },
          {
            id: uniqid(),
            type: 'text',
            name: 'company',
            placeholder: 'Company',
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
          {
            id: uniqid(),
            name: 'responsibilities',
            tag: 'textarea',
            placeholder: 'Responsibilities/goals reached',
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
          name: 'position',
          placeholder: 'Position',
        },
        {
          id: uniqid(),
          type: 'text',
          name: 'company',
          placeholder: 'Company',
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
        {
          id: uniqid(),
          name: 'responsibilities',
          tag: 'textarea',
          placeholder: 'Responsibilities/goals reached',
        },
      ],
    };
  };

  const handleChange = (e) => {
    const key = props.getMainKey(workInputs);
    props.onInputChange({
      [key]: {
        [e.target.name]: e.target.value,
        id: e.target.closest('div').dataset.mainId,
      },
    });
  };

  const removeInputBlock = (e) => {
    props.removeInput(workInputs, props, setWorkInputs, e);
  };

  const createNewInputs = () => {
    const newInput = inputTemplate();
    props.addInput(newInput, props, workInputs, setWorkInputs);
  };

  return (
    <div>
      <Form
        inputs={workInputs.work}
        button={workInputs.button}
        handleChange={handleChange}
        deleteInput={removeInputBlock}
        createInput={createNewInputs}
      />
    </div>
  );
};

export default WorkInput;

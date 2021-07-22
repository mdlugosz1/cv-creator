import React from 'react';
import ProjectsInput from './ProjectsInput';
import uniqid from 'uniqid';
import Form from './Utilities/Form';

export default class WorkInput extends ProjectsInput {
  constructor(props) {
    super(props);
    this.state = {
      work: [this.inputTemplate()],
      button: 'Add work experience',
    };
  }

  inputTemplate() {
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
  }

  render() {
    const { work, button } = this.state;
    return (
      <div>
        <Form
          inputs={work}
          button={button}
          handleChange={this.handleChange}
          deleteInput={this.removeInputBlock}
          createInput={this.createNewInputs}
        />
      </div>
    );
  }
}

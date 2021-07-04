import React from 'react';
import ProjectsInput from './ProjectsInput';
import uniqid from 'uniqid';
import Form from './Utilities/Form';

export default class WorkInput extends ProjectsInput {
  constructor(props) {
    super(props);
    this.state = {
      work: [this.inputTemplate()],
      button: 'Add new work experience',
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
          type: 'date',
          name: 'startDate',
          placeholder: 'Start date',
        },
        {
          id: uniqid(),
          name: 'endDate',
          type: 'date',
          placeholder: 'End date',
        },
      ],
    };
  }

  render() {
    const { work, button } = this.state;
    return (
      <Form
        inputs={work}
        button={button}
        handleChange={this.handleChange}
        deleteInput={this.removeInputBlock}
        createInput={this.createNewInputs}
      />
    );
  }
}

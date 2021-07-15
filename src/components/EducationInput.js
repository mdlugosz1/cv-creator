import ProjectsInput from './ProjectsInput';
import uniqid from 'uniqid';
import Form from './Utilities/Form';

export default class EducationInput extends ProjectsInput {
  constructor(props) {
    super(props);
    this.state = {
      education: [this.inputTemplate()],
      button: 'Add education',
    };
  }

  inputTemplate() {
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
  }

  render() {
    const { education, button } = this.state;
    return (
      <Form
        inputs={education}
        button={button}
        handleChange={this.handleChange}
        deleteInput={this.removeInputBlock}
        createInput={this.createNewInputs}
      />
    );
  }
}

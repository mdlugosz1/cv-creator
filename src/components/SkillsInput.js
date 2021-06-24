import React from 'react';
import uniqid from 'uniqid';
import Form from './Utilities/Form';

export default class SkillsInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createInput = this.createInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.inputTemplate = {
      id: uniqid(),
      type: 'text',
      button: 'X',
      name: 'skill',
      placeholder: 'Skill',
      section: 'skills',
    };
    this.state = {
      inputs: [this.inputTemplate],
      button: 'Add',
    };
  }

  handleChange(e) {
    const target = e.target;
    const data = target.dataset.id;
    const value = target.value;

    this.props.onInputChange({
      skills: {
        [target.name]: value,
        id: data,
      },
    });
  }

  createInput() {
    this.setState({
      inputs: [
        ...this.state.inputs,
        {
          type: this.inputTemplate.type,
          id: uniqid(),
          button: this.inputTemplate.button,
          name: this.inputTemplate.name,
          placeholder: this.inputTemplate.placeholder,
          section: this.inputTemplate.section,
        },
      ],
    });
  }

  removeInput(e) {
    const currentInput = this.state.inputs.find(
      ({ id }) => id === e.target.dataset.id
    );
    const inputIndex = this.state.inputs.indexOf(currentInput);

    this.setState((prevState) => {
      const newInputs = [...prevState.inputs];
      newInputs.splice(inputIndex, 1);

      return {
        inputs: newInputs,
      };
    });

    this.props.removeData(inputIndex, currentInput.section);
  }

  render() {
    const { inputs, button } = this.state;

    return (
      <div>
        <Form
          inputs={inputs}
          button={button}
          handleChange={this.handleChange}
          createInput={this.createInput}
          deleteInput={this.removeInput}
        />
      </div>
    );
  }
}

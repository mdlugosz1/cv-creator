import React from 'react';
import uniqid from 'uniqid';
import Form from './Utilities/Form';

export default class SkillsInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setSkill = this.setSkill.bind(this);
    this.createInput = this.createInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.state = {
      inputs: [
        {
          id: uniqid(),
          type: 'text',
          button: 'X',
          name: 'skill',
          placeholder: 'Skill',
        },
      ],
      button: 'Add',
    };
  }

  handleChange(e) {
    const target = e.target;
    const data = target.dataset.id;
    const value = target.value;

    if (value !== '') {
      this.props.onInputChange({
        [target.name]: value,
        id: data,
      });
    }
  }

  setSkill() {
    this.props.onFocusLost();
  }

  createInput() {
    this.setState({
      inputs: [
        ...this.state.inputs,
        {
          type: 'text',
          id: uniqid(),
          button: 'X',
          name: 'skill',
          placeholder: 'Skill',
        },
      ],
    });
  }

  removeInput(e) {
    const inputIndex = this.state.inputs.indexOf(
      this.state.inputs.find(({ id }) => id === e.target.dataset.id)
    );

    this.setState((prevState) => {
      const newInputs = [...prevState.inputs];
      newInputs.splice(inputIndex, 1);

      return {
        inputs: newInputs,
      };
    });

    this.props.removeSkill(inputIndex);
  }

  render() {
    const { inputs, button } = this.state;

    return (
      <div>
        <Form
          inputs={inputs}
          button={button}
          handleChange={this.handleChange}
          focusLost={this.setSkill}
          createInput={this.createInput}
          deleteInput={this.removeInput}
        />
      </div>
    );
  }
}

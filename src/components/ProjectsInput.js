import React from 'react';
import Form from './Utilities/Form';
import uniqid from 'uniqid';

export default class ProjectsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [this.inputTemplate()],
      button: 'Add new project',
    };

    this.handleChange = this.handleChange.bind(this);
    this.removeInputBlock = this.removeInputBlock.bind(this);
    this.createNewInputs = this.createNewInputs.bind(this);
  }

  inputTemplate() {
    return {
      mainID: uniqid(),
      inputs: [
        {
          id: uniqid(),
          type: 'text',
          name: 'name',
          placeholder: 'Project name',
        },
        {
          id: uniqid(),
          type: 'text',
          name: 'demo',
          placeholder: 'Live version link',
        },
        {
          id: uniqid(),
          type: 'text',
          name: 'repository',
          placeholder: 'Repository link',
        },
        {
          id: uniqid(),
          name: 'descripiton',
          tag: 'textarea',
          placeholder: 'Project description',
        },
      ],
    };
  }

  getMainStateKey() {
    return Object.keys(this.state)
      .filter((key) => key !== 'button')
      .toString();
  }

  handleChange(e) {
    this.props.onInputChange({
      [this.getMainStateKey()]: {
        [e.target.name]: e.target.value,
        id: e.target.closest('div').dataset.mainId,
      },
    });
  }

  removeInputBlock(e) {
    const mainId = e.target.closest('div').dataset.mainId;
    const key = this.getMainStateKey();

    const index = this.state[key].indexOf(
      this.state[key].find(({ mainID }) => mainID === mainId)
    );

    this.setState((prevState) => {
      const newState = prevState[key];
      newState.splice(index, 1);
      return { [key]: newState };
    });

    this.props.removeData(index, key);
  }

  createNewInputs() {
    const key = this.getMainStateKey();
    const newInputs = this.inputTemplate();
    console.log(newInputs);
    this.setState({
      [key]: [...this.state[key], newInputs],
    });
  }

  render() {
    const { projects, button } = this.state;
    return (
      <div>
        <Form
          inputs={projects}
          button={button}
          handleChange={this.handleChange}
          deleteInput={this.removeInputBlock}
          createInput={this.createNewInputs}
        />
      </div>
    );
  }
}

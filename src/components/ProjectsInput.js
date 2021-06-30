import React from 'react';
import Form from './Utilities/Form';
import uniqid from 'uniqid';

export default class ProjectsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          mainID: uniqid(),
          inputs: [
            {
              id: uniqid(),
              type: 'text',
              name: 'project-name',
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
              name: 'live',
              placeholder: 'Repository link',
            },
            {
              id: uniqid(),
              name: 'descripiton',
              tag: 'textarea',
              placeholder: 'Project description',
            },
          ],
        },
        {
          mainID: uniqid(),
          inputs: [
            {
              id: uniqid(),
              type: 'text',
              name: 'project-name',
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
              name: 'live',
              placeholder: 'Repository link',
            },
            {
              id: uniqid(),
              name: 'descripiton',
              tag: 'textarea',
              placeholder: 'Project description',
            },
          ],
        },
      ],
      button: 'Add new project',
    };

    this.handleChange = this.handleChange.bind(this);
    this.removeProject = this.removeProject.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange({
      projects: {
        [e.target.name]: e.target.value,
        id: e.target.closest('div').dataset.mainId,
      },
    });
  }

  removeProject(e) {
    const mainId = e.target.closest('div').dataset.mainId;
    const index = this.state.projects.indexOf(
      this.state.projects.find(({ mainID }) => mainID === mainId)
    );

    const key = 'projects';
    this.setState((prevState) => {
      const newProjects = prevState.projects;
      newProjects.splice(index, 1);
      return { projects: newProjects };
    });

    this.props.removeData(mainId, key);
  }

  /* createProjectInputs() {
    this.setState({});
  } */

  render() {
    const { projects, button } = this.state;
    return (
      <Form
        inputs={projects}
        button={button}
        handleChange={this.handleChange}
        deleteInput={this.removeProject}
      />
    );
  }
}

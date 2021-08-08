import React from 'react';
import './App.css';
import PersonalInput from './components/PersonalInput';
import Personal from './components/PersonalPreview';
import SkillsInput from './components/SkillsInput';
import Skills from './components/SkillsPreview';
import LanguagesInput from './components/LanguagesInput';
import Languages from './components/LanguagesPreview';
import Projects from './components/ProjectsPreview';
import ProjectsInput from './components/ProjectsInput';
import WorkInput from './components/WorkInput';
import WorkPreview from './components/WorkPreview';
import EducationInput from './components/EducationInput';
import EducationPreview from './components/EducationPreview';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: { name: '', lastname: '', webpage: '' },
      skills: [],
      languages: [],
      projects: [],
      work: [],
      education: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.removeData = this.removeData.bind(this);
  }

  addUserInputToArray(key, currStateObj, userObject) {
    let currentObject = currStateObj.find(({ id }) => id === userObject.id);

    if (currentObject) {
      this.setState((prevState) => {
        Object.assign(currentObject, userObject);
        return { [key]: prevState[key] };
      });
    } else {
      this.setState({
        [key]: [...currStateObj, Object.assign({}, userObject)],
      });
    }
  }

  handleChange(data) {
    const dataKey = Object.keys(data);
    const userObject = data[dataKey];
    const stateObject = this.state[dataKey];

    if (Array.isArray(stateObject)) {
      this.addUserInputToArray(dataKey, stateObject, userObject);
    } else {
      this.setState({
        [dataKey]: Object.assign(stateObject, userObject),
      });
    }
  }

  removeData(itemIndex, key) {
    this.setState((prevState) => {
      const newState = prevState[key];
      newState.splice(itemIndex, 1);
      return { [key]: newState };
    });
  }

  //Get property name in components that have blocks of inputs
  getMainStateKey(state) {
    return Object.keys(state)
      .filter((key) => key !== 'button')
      .toString();
  }

  createInput(template, props, state, stateFn) {
    const newInput = template;
    const key = props.getMainKey(state);

    stateFn((prevState) => {
      const newState = prevState[key];
      newState.push(newInput);
      return { [key]: newState, button: 'Add' };
    });
  }

  removeSingleInput(input, props, stateFn, e) {
    const currentInput = input.inputs.find(({ id }) => id === e.target.dataset.id);
    const inputIndex = input.inputs.indexOf(currentInput);

    stateFn((prevState) => {
      const newInputs = [...prevState.inputs];
      newInputs.splice(inputIndex, 1);

      return {
        inputs: newInputs,
        button: 'Add',
      };
    });

    props.removeData(inputIndex, currentInput.section);
  }

  removeInputBlock(state, props, stateFn, e) {
    const mainId = e.target.closest('div').dataset.mainId;
    const key = props.getMainKey(state);

    const index = state[key].indexOf(state[key].find(({ mainID }) => mainID === mainId));

    stateFn((prevState) => {
      const newState = prevState[key];
      newState.splice(index, 1);
      return { [key]: newState, button: 'Add' };
    });

    props.removeData(index, key);
  }

  setInputs() {
    return (
      <section className="inputs">
        <h1>Personal Information</h1>
        <PersonalInput onInputChange={this.handleChange} />
        <h1>Skills</h1>
        <SkillsInput
          onInputChange={this.handleChange}
          addInput={this.createInput}
          removeInput={this.removeSingleInput}
          getMainKey={this.getMainStateKey}
          removeData={this.removeData}
        />
        <h1>Languages</h1>
        <LanguagesInput
          onInputChange={this.handleChange}
          addInput={this.createInput}
          removeInput={this.removeSingleInput}
          getMainKey={this.getMainStateKey}
          removeData={this.removeData}
        />
        <h1>Projects</h1>
        <ProjectsInput
          onInputChange={this.handleChange}
          removeData={this.removeData}
          getMainKey={this.getMainStateKey}
          removeInput={this.removeInputBlock}
          addInput={this.createInput}
        />
        <h1>Work experience</h1>
        <WorkInput
          onInputChange={this.handleChange}
          removeData={this.removeData}
          getMainKey={this.getMainStateKey}
          removeInput={this.removeInputBlock}
          addInput={this.createInput}
        />
        <h1>Education</h1>
        <EducationInput
          onInputChange={this.handleChange}
          removeData={this.removeData}
          getMainKey={this.getMainStateKey}
          removeInput={this.removeInputBlock}
          addInput={this.createInput}
        />
      </section>
    );
  }

  setPreview() {
    const { name, lastname, phone, city, mail, position, webpage } = this.state.personal;

    const { skills, languages, projects, work, education } = this.state;

    return (
      <div className="cv">
        <section className="left-panel">
          <Personal
            name={name}
            lastname={lastname}
            phone={phone}
            city={city}
            mail={mail}
            position={position}
            webpage={webpage}
          />
          <Skills skill={skills} />
          <Languages languages={languages} />
        </section>
        <section className="right-panel">
          <Projects projects={projects} />
          <WorkPreview experience={work} />
          <EducationPreview education={education} />
        </section>
      </div>
    );
  }

  render() {
    return (
      <div className="content">
        {this.setInputs()}
        {this.setPreview()}
      </div>
    );
  }
}

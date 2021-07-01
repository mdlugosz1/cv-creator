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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: { name: '', lastname: '', webpage: '' },
      skills: [],
      languages: [],
      projects: [],
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

    console.log(this.state);
  }

  removeData(itemIndex, key) {
    this.setState((prevState) => {
      const newState = prevState[key];
      newState.splice(itemIndex, 1);
      return { [key]: newState };
    });
  }

  setInputs() {
    return (
      <section className="inputs">
        <PersonalInput onInputChange={this.handleChange} />
        <h1>Skills</h1>
        <SkillsInput
          onInputChange={this.handleChange}
          removeData={this.removeData}
        />
        <h1>Languages</h1>
        <LanguagesInput
          onInputChange={this.handleChange}
          removeData={this.removeData}
        />
        <h1>Projects</h1>
        <ProjectsInput
          onInputChange={this.handleChange}
          removeData={this.removeData}
        />
      </section>
    );
  }

  setPreview() {
    const { name, lastname, phone, city, mail, position, webpage } =
      this.state.personal;

    const { skills, languages, projects } = this.state;

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

import React from 'react';
import './App.css';
import PersonalInput from './components/PersonalInput';
import Personal from './components/PersonalPreview';
import SkillsInput from './components/SkillsInput';
import Skills from './components/SkillsPreview';
import LanguagesInput from './components/LanguagesInput';
import Languages from './components/LanguagesPreview';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: { name: '', lastname: '', webpage: '' },
      skills: [],
      languages: [],
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

  render() {
    const { name, lastname, phone, city, mail, position, webpage } =
      this.state.personal;

    const { skills } = this.state;
    const { languages } = this.state;

    return (
      <div className="content">
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
        </section>
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
          <section className="right-panel"></section>
        </div>
      </div>
    );
  }
}

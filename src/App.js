import React from 'react';
import './App.css';
import PersonalInput from './components/PersonalInput';
import Personal from './components/PersonalPreview';
import SkillsInput from './components/SkillsInput';
import Skills from './components/SkillsPreview';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: { name: '', lastname: '', webpage: '' },
      skills: [],
      userInput: '',
    };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
  }

  handlePersonalChange(info) {
    this.setState({
      personal: Object.assign({}, this.state.personal, info),
    });
  }

  handleSkillsChange(info) {
    this.setState({
      userInput: Object.assign({}, this.state.skills, info),
    });
    console.log(this.state);
  }

  addSkill() {
    const skillObject = this.state.skills.find(
      ({ id }) => id === this.state.userInput.id
    );

    if (!skillObject && this.state.userInput !== '') {
      this.setState({
        skills: [...this.state.skills, Object.assign({}, this.state.userInput)],
        userInput: '',
      });
    } else if (this.state.userInput !== '') {
      this.setState((prevState) => {
        let newSkills = prevState.skills;
        Object.assign(skillObject, this.state.userInput);
        return { skills: newSkills, userInput: '' };
      });
    }
  }

  removeSkill(skillIndex) {
    this.setState((prevState) => {
      const newSkills = prevState.skills;
      newSkills.splice(skillIndex, 1);

      return { skills: newSkills };
    });
  }

  render() {
    const { name, lastname, phone, city, mail, position, webpage } =
      this.state.personal;

    const { skills } = this.state;

    return (
      <div className="content">
        <section className="inputs">
          <PersonalInput onInputChange={this.handlePersonalChange} />
          <h1>Skills</h1>
          <SkillsInput
            onInputChange={this.handleSkillsChange}
            onFocusLost={this.addSkill}
            removeSkill={this.removeSkill}
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
          </section>
          <section className="right-panel"></section>
        </div>
      </div>
    );
  }
}

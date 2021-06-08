import React from 'react';
import './App.css';
import PersonalInput from './components/PersonalInput';
import Personal from './components/PersonalPreview';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personal: { name: '', lastname: '', webpage: '' } };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
  }

  handlePersonalChange(info) {
    this.setState({
      personal: Object.assign({}, this.state.personal, info),
    });
    console.log(this.state);
  }

  render() {
    const { name, lastname, phone, city, mail, position } = this.state.personal;
    return (
      <div>
        <section className="inputs">
          <PersonalInput onInputChange={this.handlePersonalChange} />
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
            />
          </section>
          <section className="right-panel"></section>
        </div>
      </div>
    );
  }
}

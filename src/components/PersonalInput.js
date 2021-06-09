import React from 'react';

export default class PersonalInput extends React.Component {
  constructor(props) {
    super(props);
    this.whenChange = this.whenChange.bind(this);
  }

  whenChange(e) {
    const target = e.target;
    const value = target.value;
    const key = target.name;

    this.props.onInputChange({ [key]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="First Name"
            onChange={this.whenChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={this.whenChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Title"
            onChange={this.whenChange}
          />
          <input
            type="text"
            name="mail"
            placeholder="E-mail"
            onChange={this.whenChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={this.whenChange}
          />
          <input
            type="text"
            name="webpage"
            placeholder="Webpage url"
            onChange={this.whenChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={this.whenChange}
          />
        </form>
      </div>
    );
  }
}

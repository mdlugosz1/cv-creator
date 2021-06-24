import React from 'react';
import Form from './Utilities/Form';
import uniqid from 'uniqid';

export default class PersonalInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputs: [
        { type: 'text', name: 'name', placeholder: 'First Name', id: uniqid() },
        {
          type: 'text',
          name: 'lastname',
          placeholder: 'Last Name',
          id: uniqid(),
        },
        { type: 'text', name: 'position', placeholder: 'Title', id: uniqid() },
        { type: 'text', name: 'mail', placeholder: 'E-mail', id: uniqid() },
        {
          type: 'text',
          name: 'phone',
          placeholder: 'Phone Number',
          id: uniqid(),
        },
        {
          type: 'text',
          name: 'webpage',
          placeholder: 'Webpage URL',
          id: uniqid(),
        },
        { type: 'text', name: 'city', placeholder: 'City', id: uniqid() },
      ],
    };
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const key = target.name;

    this.props.onInputChange({ personal: { [key]: value } });
  }

  render() {
    const { inputs } = this.state;
    return (
      <div>
        <Form inputs={inputs} handleChange={this.handleChange} />
      </div>
    );
  }
}

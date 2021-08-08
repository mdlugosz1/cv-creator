import React, { useState } from 'react';
import Form from './Utilities/Form';
import uniqid from 'uniqid';

const PersonalInput = (props) => {
  const [inputs] = useState([
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
  ]);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const key = target.name;

    props.onInputChange({ personal: { [key]: value } });
  };

  return (
    <div>
      <Form inputs={inputs} handleChange={handleChange} />
    </div>
  );
};

export default PersonalInput;

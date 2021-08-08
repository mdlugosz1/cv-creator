import React from 'react';
import Button from './Button';
import '../../styles/Form.css';

const Form = (props) => {
  const addInput = (e) => {
    e.preventDefault();
    props.createInput();
  };

  const removeInput = (e) => {
    e.preventDefault();
    props.deleteInput(e);
  };

  const setInputType = (input) => {
    let inputType;

    if (input.tag) {
      inputType = (
        <input.tag
          name={input.name}
          key={input.id}
          placeholder={input.placeholder}
          onChange={props.handleChange}
          data-parent-id={input.parentID}
          onKeyPress={(e) => {
            e.key === 'Enter' && e.preventDefault();
          }}
        />
      );
    } else {
      inputType = (
        <input
          name={input.name}
          key={input.id}
          type={input.type}
          placeholder={input.placeholder}
          onChange={props.handleChange}
          data-parent-id={input.parentID}
          onKeyPress={(e) => {
            e.key === 'Enter' && e.preventDefault();
          }}
        />
      );
    }

    return inputType;
  };

  return (
    <form>
      {props.inputs.map((element) => {
        if (Object.keys(element).includes('inputs')) {
          return (
            <div data-main-id={element.mainID} key={element.mainID}>
              {element.inputs.map((input) => {
                return setInputType(input);
              })}
              <Button name={'Remove'} click={removeInput} />
            </div>
          );
        } else {
          return (
            <div key={element.id}>
              <input
                name={element.name}
                type={element.type}
                data-id={element.id}
                onChange={props.handleChange}
                placeholder={element.placeholder}
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault();
                }}
              />
              {element.button && (
                <Button name={element.button} click={removeInput} data={element.id} />
              )}
            </div>
          );
        }
      })}
      {props.button && (
        <div>
          <Button name={props.button} click={addInput} class="add-input" />
        </div>
      )}
    </form>
  );
};

export default Form;

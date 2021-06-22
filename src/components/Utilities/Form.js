import React from 'react';
import Button from './Button';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  addInput(e) {
    e.preventDefault();
    this.props.createInput();
  }

  removeInput(e) {
    e.preventDefault();
    this.props.deleteInput(e);
  }

  render() {
    return (
      <form>
        {this.props.inputs.map((element) => {
          return (
            <div key={element.id}>
              <input
                name={element.name}
                type={element.type}
                data-id={element.id}
                onChange={this.props.handleChange}
                onBlur={this.props.focusLost}
                placeholder={element.placeholder}
              />
              {element.button && (
                <Button
                  name={element.button}
                  click={this.removeInput}
                  data={element.id}
                />
              )}
            </div>
          );
        })}
        {this.props.button && (
          <Button name={this.props.button} click={this.addInput} />
        )}
      </form>
    );
  }
}

import React from 'react';
import Button from '../components/Utilities/Button';
import uniqid from 'uniqid';

export default class SkillsInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setSkill = this.setSkill.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.state = { inputs: [{ id: uniqid() }] };
  }

  handleChange(e) {
    const target = e.target;
    const data = target.dataset.id;
    const value = target.value;

    if (value !== '') {
      this.props.onInputChange({
        [target.name]: value,
        id: data,
      });
    }
    console.log(this.props);
  }

  setSkill() {
    this.props.onFocusLost();
  }

  addInput(e) {
    e.preventDefault();
    this.setState({
      inputs: [...this.state.inputs, { id: uniqid() }],
    });
  }

  removeInput(e) {
    e.preventDefault();

    const inputIndex = this.state.inputs.indexOf(
      this.state.inputs.find(({ id }) => id === e.target.dataset.id)
    );

    this.setState((prevState) => {
      const newInputs = [...prevState.inputs];
      newInputs.splice(inputIndex, 1);

      return {
        inputs: newInputs,
      };
    });

    this.props.removeSkill(inputIndex);
  }

  render() {
    return (
      <div>
        <form>
          {this.state.inputs.map((element) => {
            return (
              <div key={element.id}>
                <input
                  type="text"
                  placeholder="Skill"
                  name="skill"
                  onChange={this.handleChange}
                  data-id={element.id}
                  onBlur={this.setSkill}
                />
                <button onClick={this.removeInput} data-id={element.id}>
                  X
                </button>
              </div>
            );
          })}

          <Button name="Add" click={this.addInput} />
        </form>
      </div>
    );
  }
}

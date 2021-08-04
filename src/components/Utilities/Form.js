import React from 'react';
import Button from './Button';
import '../../styles/Form.css';

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

    setInputType(input) {
        let inputType;

        if (input.tag) {
            inputType = (
                <input.tag
                    name={input.name}
                    key={input.id}
                    placeholder={input.placeholder}
                    onChange={this.props.handleChange}
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
                    onChange={this.props.handleChange}
                    data-parent-id={input.parentID}
                    onKeyPress={(e) => {
                        e.key === 'Enter' && e.preventDefault();
                    }}
                />
            );
        }

        return inputType;
    }

    render() {
        return (
            <form>
                {this.props.inputs.map((element) => {
                    if (Object.keys(element).includes('inputs')) {
                        return (
                            <div data-main-id={element.mainID} key={element.mainID}>
                                {element.inputs.map((input) => {
                                    return this.setInputType(input);
                                })}
                                <Button name={'Remove'} click={this.removeInput} />
                            </div>
                        );
                    } else {
                        return (
                            <div key={element.id}>
                                <input
                                    name={element.name}
                                    type={element.type}
                                    data-id={element.id}
                                    onChange={this.props.handleChange}
                                    placeholder={element.placeholder}
                                    onKeyPress={(e) => {
                                        e.key === 'Enter' && e.preventDefault();
                                    }}
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
                    }
                })}
                {this.props.button && (
                    <div>
                        <Button name={this.props.button} click={this.addInput} class="add-input" />
                    </div>
                )}
            </form>
        );
    }
}

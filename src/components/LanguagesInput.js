import SkillsInput from './SkillsInput';
import uniqid from 'uniqid';

export default class LanguagesInput extends SkillsInput {
  constructor(props) {
    super(props);
    this.state = { inputs: [this.inputTemplate()], button: 'Add' };
  }

  inputTemplate() {
    return {
      id: uniqid(),
      type: 'text',
      button: 'X',
      name: 'language',
      placeholder: 'Language',
      section: 'languages',
    };
  }

  handleChange(e) {
    const target = e.target;
    const data = target.dataset.id;
    const value = target.value;

    this.props.onInputChange({
      languages: {
        [target.name]: value,
        id: data,
      },
    });
  }
}

import React, { Component, PropTypes } from 'react';

const ENTER_KEY_CODE = 13;

class SubmittableInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.defaultValue };
  }
  handleChange(event) {
    const newValue = event.target.value;
    this.setState({ value: newValue });
  }
  handleKeyDown(event) {
    if (event.which === ENTER_KEY_CODE) {
      this.submit();
    }
  }
  handleBlur() {
    if (this.props.submitOnBlur) {
      this.submit();
    }
  }
  submit() {
    const value = this.state.value || this.props.defaultValue;
    this.props.onSubmit(value);
    this.reset();
  }
  reset() {
    this.setState({ value: this.props.defaultValue || '' });
  }
  render() {
    return (
      <input
        {...this.props}
        value={this.state.value}
        onChange={e => this.handleChange(e)}
        onKeyDown={e => this.handleKeyDown(e)}
        onBlur={e => this.handleBlur(e)}
      />
    );
  }
}

SubmittableInput.propTypes = {
  defaultValue: PropTypes.string,
  submitOnBlur: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

export default SubmittableInput;

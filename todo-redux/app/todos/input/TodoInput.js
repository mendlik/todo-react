import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import SubmittableInput from '../components/SubmittableInput';

const TodoInput = ({ onSubmit }) => (
  <SubmittableInput
    className="new-todo"
    placeholder="What needs to be done?"
    onSubmit={onSubmit}
  />
);

TodoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(TodoInput);

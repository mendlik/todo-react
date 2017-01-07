import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions';
import SubmittableInput from '../components/SubmittableInput';
import ToggleInput from '../components/ToggleInput';

const EditableTodoItem = ({ text, completed, onUpdate }) => (
  <div className="editing">
    <ToggleInput toggled={completed} />
    <SubmittableInput
      className="edit"
      autoFocus
      submitOnBlur
      defaultValue={text}
      onSubmit={onUpdate}
    />
  </div>
);

EditableTodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired
};

const mapStateToProps = ({ todos }, { id }) =>
  todos.items
    .filter(todo => todo.id === id)
    .pop();

const mapDispatchToProps = (dispatch, { id }) => ({
  onUpdate: text => dispatch(updateTodo(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditableTodoItem);

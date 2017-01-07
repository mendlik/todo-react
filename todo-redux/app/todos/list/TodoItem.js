import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, editTodo } from '../actions';
import ToggleInput from '../components/ToggleInput';

const TodoItem = ({ text, completed, onToggle, onEnterEditMode, onRemove }) => {
  const className = completed ? 'completed' : 'uncompleted';
  return (
    <div className={className}>
      <ToggleInput onToggle={onToggle} toggled={completed} />
      <label onDoubleClick={onEnterEditMode}>{text}</label>
      <button className="destroy" onClick={onRemove} />
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEnterEditMode: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

const mapStateToProps = ({ todos }, { id }) =>
  todos.items
    .filter(todo => todo.id === id)
    .pop();

const mapDispatchToProps = (dispatch, { id }) => ({
  onToggle: () => dispatch(toggleTodo(id)),
  onEnterEditMode: () => dispatch(editTodo(id)),
  onRemove: () => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

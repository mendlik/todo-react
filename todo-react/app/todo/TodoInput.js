import React from 'react';
import SubmittableInput from './SubmittableInput';

const TodoInput = ({ onNewTodo }) => (
  <SubmittableInput
    className="new-todo"
    placeholder="What needs to be done?"
    onSubmit={onNewTodo}
  />
);

export default TodoInput;

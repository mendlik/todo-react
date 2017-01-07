import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import EditableTodoItem from './EditableTodoItem';

const TodoList = ({ todos, todoInEditMode }) => {
  const items = todos
    .map(todo => (
      todoInEditMode === todo.id ?
        <EditableTodoItem id={todo.id} /> :
        <TodoItem id={todo.id} />
    ))
    .map(c => <li>{c}</li>);
  return (
    <ul className="todo-list">
      {items}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  todoInEditMode: PropTypes.string.isRequired
};

const filters = {
  all: () => true,
  active: todo => !todo.completed,
  completed: todo => !!todo.completed
};

const mapStateToProps = ({ todos }) => {
  const visibleTodos = todos.items
    .filter(filters[todos.filter]);
  return {
    todos: visibleTodos,
    todoInEditMode: todos.edit
  };
};

export default connect(mapStateToProps)(TodoList);

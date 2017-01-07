import React from 'react';
import TodoCounter from './TodoCounter';
import TodoFilters from './TodoFilters';
import RemoveCompletedTodos from './RemoveCompletedTodos';

const TodosSummary = () => (
  <footer className="todo-summary">
    <TodoCounter />
    <TodoFilters />
    <RemoveCompletedTodos />
  </footer>
);

export default TodosSummary;

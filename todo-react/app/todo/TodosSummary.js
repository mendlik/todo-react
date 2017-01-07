import React from 'react';

const filters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
};

const TodoFilter = ({ label, selected, onSelect }) => (
  <li>
    <button
      onClick={onSelect}
      className={selected ? 'selected' : ''}
    >
      {label}
    </button>
  </li>
);

const TodoFilters = ({ selectedFilter, onFilterChange }) => {
  const filterItems = Object.entries(filters)
    .map(([label, value]) => (
      <TodoFilter
        label={label}
        onSelect={() => onFilterChange(value)}
        selected={selectedFilter === value}
      />
    ));
  return (
    <ul className="filters">
      {filterItems}
    </ul>
  );
};

const TodoCounter = ({ count }) => {
  const text = count === 1 ? 'item left' : 'items left';
  return (<span className="todo-count">{count} {text}</span>);
};

const TodosSummary = ({ todosLeft, selectedFilter, onFilterChange, onRemoveCompleted }) => (
  <footer className="todo-summary">
    <TodoCounter count={todosLeft} />
    <TodoFilters selectedFilter={selectedFilter} onFilterChange={onFilterChange} />
    <button className="clear-completed" onClick={onRemoveCompleted}>Remove completed</button>
  </footer>
);

export default TodosSummary;

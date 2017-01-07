import React from 'react';
import TodoInput from './input/TodoInput';
import TodoList from './list/TodoList';
import TodosSummary from './summary/TodosSummary';

const Todos = () => (
  <section className="todos">
    <TodoInput />
    <TodoList />
    <TodosSummary />
  </section>
);

export default Todos;

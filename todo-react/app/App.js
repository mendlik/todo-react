import React from 'react';
import Header from './Header';
import TodoContainer from './todo/TodoContainer';

const App = () => (
  <div className="todoapp">
    <Header />
    <TodoContainer />
  </div>
);

export default App;

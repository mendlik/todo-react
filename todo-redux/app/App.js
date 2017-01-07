import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';
import Todos from './todos/Todos';

const App = () => (
  <Provider store={store}>
    <div className="todoapp">
      <Header />
      <Todos />
    </div>
  </Provider>
);

export default App;

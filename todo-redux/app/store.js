/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import todos from './todos/reducer';

const reducer = combineReducers({ todos });

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

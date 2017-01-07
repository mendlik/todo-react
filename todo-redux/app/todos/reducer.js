import { combineReducers } from 'redux';

const itemsActionHandlers = {
  ADD_TODO: (items, action) => ([
    ...items,
    {
      id: action.id,
      text: action.text,
      completed: false
    }
  ]),
  REMOVE_TODO: (items, action) =>
    items.filter(todo => todo.id !== action.id),
  REMOVE_COMPLETED_TODOS: items =>
    items.filter(todo => !todo.completed),
  UPDATE_TODO: (items, action) =>
    items.map((todo) => {
      if (todo.id !== action.id) return todo;
      return Object.assign({}, todo, {
        text: action.text
      });
    }),
  TOGGLE_TODO: (items, action) =>
    items.map((todo) => {
      if (todo.id !== action.id) return todo;
      return Object.assign({}, todo, {
        completed: !todo.completed
      });
    })
};

const filterActionHandlers = {
  CHANGE_FILTER: (filter, action) => action.filter
};

const editActionHandlers = {
  EDIT_TODO: (edit, action) => action.id,
  UPDATE_TODO: () => null
};


const createReducer = (defaultState, handlers) =>
  (state = defaultState, action) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };

const startupItems = [
  {
    id: -1,
    text: 'Learn React'
  },
  {
    id: -2,
    text: 'Do cool stuff'
  }
];

export default combineReducers({
  items: createReducer(startupItems, itemsActionHandlers),
  filter: createReducer('all', filterActionHandlers),
  edit: createReducer(null, editActionHandlers)
});

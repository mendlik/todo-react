let lastTodoId = 0;

const nextTodoId = () => {
  lastTodoId += 1;
  return lastTodoId;
};

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId(),
  text
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});

export const removeCompletedTodos = () => ({
  type: 'REMOVE_COMPLETED_TODOS'
});

export const editTodo = id => ({
  type: 'EDIT_TODO',
  id
});

export const updateTodo = (id, text) => ({
  type: 'UPDATE_TODO',
  id,
  text
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter
});

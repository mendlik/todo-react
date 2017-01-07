import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodosSummary from './TodosSummary';

const filters = {
  all: () => true,
  active: todo => !todo.completed,
  completed: todo => !!todo.completed
};

const findIndexById = (items, id) => {
  const index = items
    .findIndex(item => item.id === id);
  if (index < 0) {
    throw new Error(`Item not found: ${id}`);
  }
  return index;
};

const createTodo = (id, message) => ({
  id,
  message,
  completed: false
});

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      todos: [
        createTodo(1, 'Learn React'),
        createTodo(2, 'Do cool stuff')
      ]
    };
  }
  addNewTodo(todo) {
    this.setState((prevState) => {
      const prevTodos = prevState.todos;
      const lastTodo = prevTodos[prevTodos.length - 1];
      const newTodo = createTodo(lastTodo.id + 1, todo);
      return {
        todos: [...prevTodos, newTodo]
      };
    });
  }
  toggleTodo(id) {
    this.updateTodo(id, prevTodo => ({
      ...prevTodo,
      completed: !prevTodo.completed
    }));
  }
  updateTodoMessage(id, newMessage) {
    this.updateTodo(id, prevTodo => ({
      ...prevTodo,
      message: newMessage
    }));
  }
  updateTodo(id, update) {
    this.setState((prevState) => {
      const prevTodos = prevState.todos;
      const prevTodoIdx = findIndexById(prevTodos, id);
      const prevTodo = prevTodos[prevTodoIdx];
      const newTodo = update(prevTodo);
      const newTodos = [
        ...prevTodos.slice(0, prevTodoIdx),
        newTodo,
        ...prevTodos.slice(prevTodoIdx + 1)
      ];
      return { todos: newTodos };
    });
  }
  removeTodo(id) {
    this.setState((prevState) => {
      const prevTodos = prevState.todos;
      const idx = findIndexById(prevTodos, id);
      const newTodos = [
        ...prevTodos.slice(0, idx),
        ...prevTodos.slice(idx + 1)
      ];
      return { todos: newTodos };
    });
  }
  handleFilterChange(filter) {
    this.setState({ filter });
  }
  handleRemoveCompleted() {
    this.setState((prevState) => {
      const prevTodos = prevState.todos;
      const newTodos = prevTodos.filter(todo => !todo.completed);
      return { todos: newTodos };
    });
  }
  render() {
    const todos = this.state.todos;
    const todosLeft = todos
      .filter(todo => !todo.completed)
      .length;
    const filteredTodos = todos
      .filter(filters[this.state.filter]);
    return (
      <section className="todos">
        <TodoInput onNewTodo={newTodo => this.addNewTodo(newTodo)} />
        <TodoList
          todos={filteredTodos}
          onTodoToggle={idx => this.toggleTodo(idx)}
          onTodoRemove={idx => this.removeTodo(idx)}
          onTodoUpdate={(idx, msg) => this.updateTodoMessage(idx, msg)}
        />
        <TodosSummary
          todosLeft={todosLeft}
          selectedFilter={this.state.filter}
          onFilterChange={filter => this.handleFilterChange(filter)}
          onRemoveCompleted={() => this.handleRemoveCompleted()}
        />
      </section>
    );
  }
}

export default TodoContainer;

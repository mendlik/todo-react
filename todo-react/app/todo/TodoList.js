import React from 'react';
import SubmittableInput from './SubmittableInput';

const ToggleInput = ({ onToggle, toggled }) => (
  <input
    className="toggle"
    type="checkbox"
    onChange={onToggle}
    checked={toggled}
  />
);

const TodoItem = ({ message, completed, onToggle, onRemove, onEnterEditMode }) => {
  const className = completed ? 'completed' : 'uncompleted';
  return (
    <li className={className}>
      <div>
        <ToggleInput onToggle={onToggle} toggled={completed} />
        <label onDoubleClick={onEnterEditMode}>{message}</label>
        <button className="destroy" onClick={onRemove} />
      </div>
    </li>
  );
};

const UpdatableTodoItem = ({ message, completed, onUpdate }) => (
  <li className="editing">
    <div>
      <ToggleInput toggled={completed} />
      <SubmittableInput
        className="edit"
        autoFocus
        submitOnBlur
        defaultValue={message}
        onSubmit={onUpdate}
      />
    </div>
  </li>
);

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleEnterEditMode(id) {
    this.setState({
      inEditMode: id
    });
  }
  handleExitEditMode() {
    this.setState({
      inEditMode: null
    });
  }
  handleTodoUpdate(newMessage) {
    const { onTodoUpdate } = this.props;
    this.handleExitEditMode();
    onTodoUpdate(this.state.inEditMode, newMessage);
  }
  render() {
    const { todos, onTodoToggle, onTodoRemove } = this.props;
    const renderTodoInEditMode = todo => (
      <UpdatableTodoItem
        message={todo.message}
        completed={todo.completed}
        onUpdate={newMessage => this.handleTodoUpdate(newMessage)}
      />
    );
    const renderTodo = todo => (
      <TodoItem
        message={todo.message}
        completed={todo.completed}
        onToggle={() => onTodoToggle(todo.id)}
        onRemove={() => onTodoRemove(todo.id)}
        onEnterEditMode={() => this.handleEnterEditMode(todo.id)}
      />
    );
    const items = todos.map(todo => (
      this.state.inEditMode === todo.id ?
        renderTodoInEditMode(todo) :
        renderTodo(todo)
    ));
    return (
      <ul className="todo-list">
        {items}
      </ul>
    );
  }
}

export default TodoList;

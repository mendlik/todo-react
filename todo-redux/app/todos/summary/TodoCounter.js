import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const TodoCounter = ({ count }) => {
  const text = count === 1 ? 'item left' : 'items left';
  return (<span className="todo-count">{count} {text}</span>);
};

TodoCounter.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = ({ todos }) => {
  const count = todos.items
    .filter(todo => !todo.completed)
    .length;
  return { count };
};

export default connect(mapStateToProps)(TodoCounter);

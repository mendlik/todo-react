import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeCompletedTodos } from '../actions';

const RemoveCompletedTodos = ({ onRemoveCompleted }) => (
  <button
    className="clear-completed"
    onClick={onRemoveCompleted}
  >
    Remove completed
  </button>
);

RemoveCompletedTodos.propTypes = {
  onRemoveCompleted: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onRemoveCompleted: () => dispatch(removeCompletedTodos())
});

export default connect(null, mapDispatchToProps)(RemoveCompletedTodos);

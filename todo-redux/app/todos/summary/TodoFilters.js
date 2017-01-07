import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SelectableButton from '../components/SelectableButton';
import { changeFilter } from '../actions';

const TodoFilters = ({ filters, selectedFilter, onFilterChange }) => {
  const filterItems = Object.entries(filters)
    .map(([label, value]) => (
      <SelectableButton
        label={label}
        onSelect={() => onFilterChange(value)}
        selected={selectedFilter === value}
      />
    ))
    .map(c => <li>{c}</li>);
  return (
    <ul className="filters">
      {filterItems}
    </ul>
  );
};

TodoFilters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.string).isRequired
};

const mapStateToProps = ({ todos }) => ({
  selectedFilter: todos.filter,
  filters: {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
  }
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: filter => dispatch(changeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters);

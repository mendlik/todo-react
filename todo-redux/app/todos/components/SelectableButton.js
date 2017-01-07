import React, { PropTypes } from 'react';

const SelectableButton = ({ label, selected, onSelect }) => (
  <button
    onClick={onSelect}
    className={selected ? 'selected' : ''}
  >
    {label}
  </button>
);

SelectableButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectableButton;

import React, { PropTypes } from 'react';

const ToggleInput = ({ onToggle, toggled }) => (
  <input
    className="toggle"
    type="checkbox"
    onChange={onToggle}
    checked={toggled}
  />
);

ToggleInput.propTypes = {
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired
};

export default ToggleInput;

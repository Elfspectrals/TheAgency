// src/components/Checkbox.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ 
  label,
  checked,
  onChange,
  disabled = false,
  defaultChecked = false,
  ...props
}) => {
  const checkboxId = `checkbox-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="checkbox-group">
      <input
        id={checkboxId}
        type="checkbox"
        className="checkbox-group__input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        defaultChecked={defaultChecked}
        {...props}
      />
      {label && (
        <label htmlFor={checkboxId} className="checkbox-group__label">
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool
};

export default Checkbox;
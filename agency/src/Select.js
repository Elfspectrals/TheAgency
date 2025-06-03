// src/components/Select.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ 
  label,
  options = [],
  value,
  onChange,
  required = false,
  disabled = false,
  error = '',
  ...props
}) => {
  const selectId = `select-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`select-group ${error ? 'select-group--error' : ''}`}>
      {label && (
        <label htmlFor={selectId} className="select-group__label">
          {label}
          {required && <span className="select-group__required">*</span>}
        </label>
      )}
      <select
        id={selectId}
        className="select-group__field"
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <span className="select-group__error">{error}</span>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string
};

export default Select;
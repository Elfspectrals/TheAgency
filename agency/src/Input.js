// src/components/Input.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  disabled = false,
  error = '',
  ...props
}) => {
  const inputId = `input-${label?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`input-group ${error ? 'input-group--error' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-group__label">
          {label}
          {required && <span className="input-group__required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className="input-group__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        {...props}
      />
      {error && <span className="input-group__error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string
};

export default Input;
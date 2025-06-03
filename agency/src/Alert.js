// src/components/Alert.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { X, Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const Alert = ({ 
  type = 'info', 
  children, 
  onClose,
  className = ''
}) => {
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    danger: XCircle
  };

  const Icon = icons[type];

  return (
    <div className={`alert alert--${type} ${className}`}>
      <Icon size={20} className="alert__icon" />
      <div className="alert__content">{children}</div>
      {onClose && (
        <button 
          className="alert__close" 
          onClick={onClose}
          aria-label="Close alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  className: PropTypes.string
};

export default Alert;
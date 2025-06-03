// src/components/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  variant = 'default',
  onClick,
  className = ''
}) => {
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component 
      className={`card card--${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'highlighted', 'stat']),
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Card;
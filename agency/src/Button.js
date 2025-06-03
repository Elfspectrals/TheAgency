import React from 'react';

export const ButtonVariants = {
    PRIMARY: 'btn--primary',
    WARNING: 'btn--warning',
    HIRE: 'btn--hire',
    XXXXX: 'btn--xxxxx',
    
};

const Button = ({ text = 'Click', onClick, variant = ButtonVariants.PRIMARY }) => (
  <button className={`btn ${variant}`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
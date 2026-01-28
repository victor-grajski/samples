import React from 'react';
import './Button.css';

export const Button = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

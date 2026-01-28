import React from 'react';
import './Card.css';

export const Card = ({
  title,
  children,
  footer,
  ...props
}) => {
  return (
    <div className="card" {...props}>
      {title && (
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
        </div>
      )}
      <div className="card__content">
        {children}
      </div>
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

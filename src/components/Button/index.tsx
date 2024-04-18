import { forwardRef } from 'react';
import { buttonStyles } from './button.css';
import { ButtonProps } from './button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, children, disabled = false, onClick, className, pending = false }, ref) => {
    return (
      <button
        className={`${buttonStyles({ variant, size, color })} ${className}`}
        disabled={disabled || pending}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

import { forwardRef } from 'react';
import { buttonStyles } from './button.css';
import { ButtonProps } from './button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, prefix, postfix, children, disabled = false, onClick, className, pending = false }, ref) => {
    return (
      <button
        className={`${buttonStyles({ variant, size, color })} ${className}`}
        disabled={disabled || pending}
        onClick={onClick}
        ref={ref}
      >
        {pending ? (
          'loading...'
        ) : (
          <>
            {prefix ? <span>{prefix}</span> : null}
            {children}
            {postfix ? <span>{postfix}</span> : null}
          </>
        )}
      </button>
    );
  },
);

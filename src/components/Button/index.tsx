import { forwardRef } from 'react';
import { buttonStyles } from './button.css';
import { ButtonProps } from './button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'medium',
      color = 'primary',
      prefix,
      postfix,
      stretch = false,
      children,
      disabled = false,
      onClick,
      className,
      pending = false,
    },
    ref,
  ) => {
    return (
      <button
        className={`${buttonStyles({ variant, size, color, stretch })} ${className}`}
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

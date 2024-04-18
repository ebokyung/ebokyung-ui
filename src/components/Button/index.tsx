import { forwardRef } from 'react';
import { buttonStyles, colorVar } from './button.css';
import { ButtonProps } from './button.types';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '@/styles/vars.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, children, disabled = false, onClick, className, pending = false }, ref) => {
    return (
      <button
        className={`${buttonStyles({ variant, size, color })} ${className}`}
        style={assignInlineVars({ [colorVar]: vars.colors[color || 'primary'] })}
        disabled={disabled || pending}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

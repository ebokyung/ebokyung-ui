import { MouseEventHandler, ReactNode, forwardRef } from 'react';
import { ButtonStylesProps, buttonStyles } from './button.css';
import { BasicProps } from '@/types';

export type ButtonProps = Omit<BasicProps, 'children'> & {
  children: ReactNode;
  prefix?: ReactNode;
  postfix?: ReactNode;
  pending?: boolean;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = forwardRef<HTMLButtonElement, ButtonStylesProps & ButtonProps>(
  (
    {
      variant = 'solid',
      size = 'medium',
      color = 'primary',
      stretch = false,
      className,
      children,
      prefix,
      postfix,
      pending = false,
      disabled = false,
      onClick,
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

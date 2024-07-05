import { ComponentProps, MouseEventHandler, ReactNode, forwardRef } from 'react';
import { ButtonStylesProps, buttonStyles } from './button.css';
import { cx } from '@/utils';

export type ButtonProps = ComponentProps<'button'> & {
  prefix?: ReactNode;
  postfix?: ReactNode;
  pending?: boolean;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = forwardRef<HTMLButtonElement, ButtonStylesProps & ButtonProps>(
  ({ prefix, postfix, pending = false, disabled = false, onClick, className, children, ...props }, ref) => {
    const { variant, size, color, stretch, ...rest } = props;
    return (
      <button
        ref={ref}
        className={cx(buttonStyles({ variant, size, color, stretch }), className)}
        disabled={disabled || pending}
        onClick={onClick}
        {...rest}
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

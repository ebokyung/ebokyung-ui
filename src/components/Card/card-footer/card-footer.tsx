import { forwardRef } from 'react';
import { CardFooterProps } from './card-footer.types';
import { cx } from '@/utils/cx';
import { footerStyles } from './card-footer.css';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ justify = 'end', children, className }, ref) => {
    return (
      <div ref={ref} className={cx(footerStyles({ justify }), className)}>
        {children}
      </div>
    );
  },
);

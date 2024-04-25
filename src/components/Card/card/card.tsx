import { forwardRef } from 'react';
import { CardProps } from './card.types';
import { cx } from '@/utils/cx';
import { cardStyles } from './card.css';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ size = 'medium', direction = 'column', className, children }, ref) => {
    return (
      <div ref={ref} className={cx(cardStyles({ size, direction }), className)}>
        {children}
      </div>
    );
  },
);

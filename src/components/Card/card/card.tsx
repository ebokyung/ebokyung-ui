import { forwardRef } from 'react';
import { cx } from '@/utils/cx';
import { CardStylesProps, cardStyles } from './card.css';
import { BasicProps } from '@/types';

type CardProps = BasicProps;

export const Card = forwardRef<HTMLDivElement, CardStylesProps & CardProps>(
  ({ size = 'medium', direction = 'column', className, children }, ref) => {
    return (
      <div ref={ref} className={cx(cardStyles({ size, direction }), className)}>
        {children}
      </div>
    );
  },
);

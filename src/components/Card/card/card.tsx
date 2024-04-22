import { forwardRef } from 'react';
import { CardProps } from './card.types';
import { cx } from '@/utils/cx';
import { cardContainer } from './card.css';

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, direction, justify, align }, ref) => {
  return (
    <div ref={ref} className={cx(cardContainer, className)}>
      {children}
    </div>
  );
});

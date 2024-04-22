import { forwardRef } from 'react';
import { CardBodyProps } from './card-body.types';
import { cx } from '@/utils/cx';
import { body } from './card-body.css';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(body, className)}>
      {children}
    </div>
  );
});

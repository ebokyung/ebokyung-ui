import { forwardRef } from 'react';
import { cx } from '@/utils/cx';
import { body } from './card-body.css';
import { BasicProps } from '@/types';

type CardBodyProps = BasicProps;

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(body, className)}>
      {children}
    </div>
  );
});

import { forwardRef } from 'react';
import { cx } from '@/utils/cx';
import { title } from './card-title.css';
import { BasicProps } from '@/types';

type CardTitleProps = BasicProps;

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(title, className)}>
      {children}
    </div>
  );
});

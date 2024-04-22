import { forwardRef } from 'react';
import { CardTitleProps } from './card-title.types';
import { cx } from '@/utils/cx';
import { title } from './card-title.css';

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(title, className)}>
      {children}
    </div>
  );
});

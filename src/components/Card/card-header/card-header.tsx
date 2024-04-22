import { forwardRef } from 'react';
import { CardHeaderProps } from './card-header.types';
import { cx } from '@/utils/cx';
import { header } from './card-header.css';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cx(header, className)}>
      {children}
    </div>
  );
});

import { forwardRef } from 'react';
import { cx } from '@/utils/cx';
import { header } from './card-header.css';
import { BasicProps } from '@/types';

type CardHeaderProps = BasicProps;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cx(header, className)}>
      {children}
    </div>
  );
});

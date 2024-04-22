import { forwardRef } from 'react';
import { CardFooterProps } from './card-footer.types';
import { cx } from '@/utils/cx';
import { footer } from './card-footer.css';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(footer, className)}>
      {children}
    </div>
  );
});

import { forwardRef } from 'react';
import { cx } from '@/utils/cx';
import { footer } from './card-footer.css';
import { BasicProps } from '@/types';

type CardFooterProps = BasicProps;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(footer, className)}>
      {children}
    </div>
  );
});

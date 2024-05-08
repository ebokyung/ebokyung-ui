import { cx } from '@/utils/cx';
import { avatar } from './avatar.css';
import { ReactNode, forwardRef } from 'react';
import { BasicProps } from '@/types';

type ImageProps = Omit<BasicProps, 'children'> & {
  children: ReactNode;
};

export const Avatar = forwardRef<HTMLDivElement, ImageProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(avatar, className)}>
      {children}
    </div>
  );
});

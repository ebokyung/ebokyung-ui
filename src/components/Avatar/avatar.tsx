import { cx } from '@/utils/cx';
import { avatar } from './avatar.css';
import { ComponentProps, forwardRef } from 'react';

export const Avatar = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return <div ref={ref} {...props} className={cx(avatar, className)}></div>;
});

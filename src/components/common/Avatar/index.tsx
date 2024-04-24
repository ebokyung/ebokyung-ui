import { cx } from '@/utils/cx';
import { avatar } from './avatar.css';
import { forwardRef } from 'react';
import { AvartarProps } from './avatar.types';

export const Avatar = forwardRef<HTMLImageElement, AvartarProps>(({ src, name, classname }, ref) => {
  return <img ref={ref} src={src} alt={name} className={cx(avatar, classname)} />;
});

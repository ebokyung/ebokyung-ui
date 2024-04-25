import { cx } from '@/utils/cx';
import { avatarCoverStyle, avatarStyle } from './avatar.css';
import { forwardRef } from 'react';

type ImageProps = {
  src: string;
  name: string;
  circle?: boolean;
  objectFit?: 'cover' | 'contain';
  classname?: string;
};

export const Avatar = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, name, circle = true, objectFit, classname }, ref) => {
    return (
      <div ref={ref} className={cx(avatarCoverStyle({ circle }), classname)}>
        <img src={src} alt={name} className={avatarStyle({ objectFit })} />
      </div>
    );
  },
);

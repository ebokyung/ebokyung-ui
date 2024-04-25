import { forwardRef } from 'react';
import { image, maxWidth } from './card-image.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

type CardImageProps = {
  src: string;
  alt: string;
  maxW?: string;
};

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(({ src, alt, maxW }, ref) => {
  return <img ref={ref} src={src} alt={alt} className={image} style={assignInlineVars({ [maxWidth]: maxW })} />;
});

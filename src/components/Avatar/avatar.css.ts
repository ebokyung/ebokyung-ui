import { globalStyle, style } from '@vanilla-extract/css';

export const avatar = style({
  height: '44px',
  aspectRatio: '1/1',
  flexShrink: 0,
  overflow: 'hidden',
  marginRight: '1rem',
  borderRadius: '50%',
});

globalStyle(`${avatar} > img`, {
  width: '100%',
  objectFit: 'cover',
});

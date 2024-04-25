import { createVar, style } from '@vanilla-extract/css';

export const maxWidth = createVar();

export const image = style({
  width: '100%',
  verticalAlign: 'top',
  objectFit: 'cover',
  maxWidth: maxWidth,
});

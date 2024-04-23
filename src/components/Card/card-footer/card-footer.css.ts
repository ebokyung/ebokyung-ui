import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const footer = style({
  padding: '1rem',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
});

export const footerStyles = recipe({
  base: footer,
  variants: {
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
    },
  },
  defaultVariants: {
    justify: 'spaceBetween',
  },
});

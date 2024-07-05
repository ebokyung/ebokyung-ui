import { createVar, style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const cardContainer = style({
  border: '1px solid lightgray',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
});

export const cardStyles = recipe({
  base: cardContainer,
  variants: {
    size: {
      large: {
        maxWidth: '448px',
      },
      medium: {
        maxWidth: '380px',
      },
      small: {
        maxWidth: '320px',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
        maxWidth: 'none',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
  defaultVariants: {
    size: 'large',
    direction: 'column',
  },
});

export type CardStylesProps = RecipeVariants<typeof cardStyles>;

export const body = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const footer = style({
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const header = style({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'row',
});

export const maxWidth = createVar();

export const image = style({
  width: '100%',
  verticalAlign: 'top',
  objectFit: 'cover',
  maxWidth: maxWidth,
});

export const title = style({
  fontSize: '1.4rem',
  fontWeight: 'bold',
});

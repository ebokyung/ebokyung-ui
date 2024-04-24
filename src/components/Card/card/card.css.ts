import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  border: '1px solid lightgray',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
  overflow: 'hidden',
  width: '100%',
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
    // direction: {
    //   row: {
    //     flexDirection: 'row',
    //   },
    //   column: {
    //     flexDirection: 'column',
    //   },
    // },
    // justify: {

    // },
    // align: {},
  },
  defaultVariants: {
    size: 'large',
  },
});

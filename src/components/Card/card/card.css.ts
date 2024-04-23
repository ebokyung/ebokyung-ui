import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  border: '1px solid lightgray',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
  overflow: 'hidden',
});

export const cardStyles = recipe({
  base: cardContainer,
  variants: {
    size: {
      large: {
        width: '448px',
      },
      medium: {
        width: '380px',
      },
      small: {
        width: '320px',
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

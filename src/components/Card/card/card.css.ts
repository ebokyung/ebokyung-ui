// import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  border: '1px solid lightgray',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
});

// export const cardStyles = recipe({
//   base: cardContainer,
//   variants: {
//     direction: {
//       row: {
//         flexDirection: 'row',
//       },
//       column: {
//         flexDirection: 'column',
//       },
//     },
//     justify: {

//     },
//     align: {},
//   },
// });

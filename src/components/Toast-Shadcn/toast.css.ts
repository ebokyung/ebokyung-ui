import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

// const hide = keyframes({
//   from: {
//     opacity: 1,
//   },
//   to: {
//     opacity: 0,
//   },
// });

// const slideIn = keyframes({
//   from: {
//     transform: 'translateX(calc(100% + var(--viewport-padding)))',
//   },
//   to: {
//     transform: 'translateX(0)',
//   },
// });

// const swipeOut = keyframes({
//   from: {
//     transform: 'translateX(var(--radix-toast-swipe-end-x))',
//   },
//   to: {
//     transform: 'translateX(calc(100% + var(--viewport-padding)))',
//   },
// });

const baseViewportStyle = style({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '280px',
  maxWidth: '100vw',
  margin: 0,
  zIndex: 100,
  outline: 'none',
});

export const toastViewport = recipe({
  base: baseViewportStyle,
  variants: {
    position: {
      'top-right': {
        top: 0,
        right: 0,
      },
      'top-left': {
        top: 0,
        left: 0,
      },
      'bottom-right': {
        bottom: 0,
        right: 0,
      },
      'bottom-left': {
        bottom: 0,
        left: 0,
      },
    },
  },
  defaultVariants: {
    position: 'bottom-right',
  },
});

export type toastViewportVariants = RecipeVariants<typeof toastViewport>;

export const toastRoot = style({
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  padding: '15px',
  display: 'grid',
  // gridTemplateAreas: "'title action' 'description action'",
  // gridTemplateColumns: 'auto max-content',
  columnGap: '15px',
  alignItems: 'center',
});

// export const toastTitle = style({
//   gridArea: 'title',
//   marginBottom: '5px',
//   fontWeight: 500,
//   color: 'var(--slate-12)',
//   fontSize: '15px',
// });

// export const toastDescription = style({
//   gridArea: 'description',
//   margin: 0,
//   color: 'var(--slate-11)',
//   fontSize: '13px',
//   lineHeight: 1.3,
// });

// export const toastAction = style({
//   gridArea: 'action',
// });

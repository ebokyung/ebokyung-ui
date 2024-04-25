import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const avatarCover = style({
  height: '44px',
  aspectRatio: '1/1',
  flexShrink: 0,
  overflow: 'hidden',
  marginRight: '1rem',
});

export const avatarCoverStyle = recipe({
  base: avatarCover,
  variants: {
    circle: {
      true: {
        borderRadius: '50%',
      },
    },
  },
});

const avatar = style({
  width: '100%',
});

export const avatarStyle = recipe({
  base: avatar,
  variants: {
    objectFit: {
      cover: {
        objectFit: 'cover',
      },
      contain: {
        objectFit: 'contain',
      },
    },
  },
  defaultVariants: {
    objectFit: 'cover',
  },
});

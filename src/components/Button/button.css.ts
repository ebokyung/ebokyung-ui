import { vars } from '@/styles/vars.css';
import { style, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const colorVar = createVar();

const baseStyles = style({
  width: '100%',
  // boxSizing: 'border-box',
  fontWeight: 600,
  outline: 'none',
  cursor: 'pointer',
  ':disabled': {
    cursor: 'not-allowed',
  },
});

const variantStyles = {
  solid: {
    border: 'none',
    color: 'white',
    backgroundColor: colorVar,
  },
  outline: {
    border: `1px solid ${colorVar}`,
    color: colorVar,
    backgroundColor: 'inherit',
  },
  ghost: {
    border: 'none',
    color: colorVar,
    backgroundColor: 'inherit',
    transition: 'backgroundColor 300ms',
  },
};

const sizeStyles = {
  xSmall: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
  },
  small: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
  },
  medium: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
  },
  large: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.125rem',
  },
};

const colorStyles = {
  primary: {},
  secondary: {},
  negative: {},
};

export const buttonStyles = recipe({
  base: baseStyles,
  variants: {
    variant: variantStyles,
    size: sizeStyles,
    color: colorStyles,
  },
  compoundVariants: [
    {
      variants: { variant: 'solid', color: 'secondary' },
      style: {
        color: vars.colors.primary,
      },
    },
    {
      variants: { variant: 'outline', color: 'secondary' },
      style: {
        color: vars.colors.primary,
      },
    },

    {
      variants: { variant: 'ghost', color: 'primary' }, // 한 번에 여러가지를 처리하는 방법?
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.primaryHover,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'secondary' }, // 한 번에 여러가지를 처리하는 방법?
      style: {
        color: vars.colors.primary,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.secondaryHover,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'negative' }, // 한 번에 여러가지를 처리하는 방법?
      style: {
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.negativeHover,
          },
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'medium',
    color: 'primary',
  },
});

import { vars } from '@/styles/vars.css';
import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const baseStyles = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4em',
  boxSizing: 'border-box',
  fontWeight: 400,
  outline: 'none',
  cursor: 'pointer',
  ':disabled': {
    pointerEvents: 'none',
    opacity: 0.4,
  },
  justifyContent: 'center',
});

const variantStyles = {
  solid: {
    border: 'none',
    color: 'white',
  },
  outline: {
    border: `1px solid`,
    backgroundColor: 'inherit',
  },
  ghost: {
    border: 'none',
    backgroundColor: 'inherit',
    transition: 'backgroundColor 300ms',
  },
};

const sizeStyles = {
  xSmall: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    minWidth: '60px',
  },
  small: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    minWidth: '66px',
  },
  medium: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    minWidth: '84px',
  },
  large: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.125rem',
    minWidth: '88px',
  },
};

const colorStyles = {
  primary: {},
  secondary: {},
  negative: {},
};

const stretchStyles = {
  true: {
    width: '100%',
    maxWidth: 'none',
    flex: 1,
  },
};

export const buttonStyles = recipe({
  base: baseStyles,
  variants: {
    variant: variantStyles,
    size: sizeStyles,
    color: colorStyles,
    stretch: stretchStyles,
  },
  compoundVariants: [
    {
      variants: { variant: 'solid', color: 'primary' },
      style: {
        backgroundColor: vars.colors.primary,
      },
    },
    {
      variants: { variant: 'solid', color: 'secondary' },
      style: {
        color: vars.colors.primary,
        backgroundColor: vars.colors.secondaryHover,
      },
    },
    {
      variants: { variant: 'solid', color: 'negative' },
      style: {
        backgroundColor: vars.colors.negative,
      },
    },
    {
      variants: { variant: 'outline', color: 'primary' },
      style: {
        borderColor: vars.colors.primary,
        color: vars.colors.primary,
      },
    },
    {
      variants: { variant: 'outline', color: 'secondary' },
      style: {
        borderColor: vars.colors.secondary,
        color: vars.colors.primary,
      },
    },
    {
      variants: { variant: 'outline', color: 'negative' },
      style: {
        borderColor: vars.colors.negative,
        color: vars.colors.negative,
      },
    },
    {
      variants: { variant: 'ghost', color: 'primary' },
      style: {
        color: vars.colors.primary,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.primaryHover,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'secondary' },
      style: {
        color: vars.colors.secondary,
        selectors: {
          '&:hover': {
            backgroundColor: vars.colors.secondaryHover,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'negative' },
      style: {
        color: vars.colors.negative,
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

export type ButtonStylesProps = RecipeVariants<typeof buttonStyles>;

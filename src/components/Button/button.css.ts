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
    color: 'white', // secondary일때 다른색 주기
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
    '&:hover': {
      backgroundColor: colorVar, // 투명도 주거나 연한색 지정하기
    },
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

export const buttonStyles = recipe({
  base: baseStyles,
  variants: {
    variant: variantStyles,
    size: sizeStyles,
  },
  defaultVariants: {
    variant: 'solid',
    size: 'medium',
  },
});

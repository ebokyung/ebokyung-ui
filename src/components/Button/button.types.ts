import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export type ButtonSize = 'large' | 'medium' | 'small' | 'xSmall';

export type ButtonColor = 'primary' | 'secondary' | 'negative';

export type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  color: ButtonColor;
  prefix?: ReactNode;
  postfix?: ReactNode;
  children: string;
  pending?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

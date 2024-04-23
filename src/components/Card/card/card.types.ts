import { ReactNode } from 'react';

export type CardProps = {
  className?: string;
  children?: ReactNode;
  size: 'large' | 'medium' | 'small';
};

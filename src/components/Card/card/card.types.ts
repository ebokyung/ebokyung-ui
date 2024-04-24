import { ReactNode } from 'react';

export type CardSize = 'large' | 'medium' | 'small';

export type CardProps = {
  className?: string;
  children?: ReactNode;
  size?: CardSize;
};

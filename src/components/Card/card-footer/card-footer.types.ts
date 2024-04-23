import { ReactNode } from 'react';

export type CardFooterProps = {
  justify?: 'center' | 'start' | 'end' | 'spaceBetween';
  className?: string;
  children?: ReactNode;
};

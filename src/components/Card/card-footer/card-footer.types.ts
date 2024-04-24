import { ReactNode } from 'react';

export type FooterJustify = 'center' | 'start' | 'end' | 'spaceBetween';

export type CardFooterProps = {
  justify?: FooterJustify;
  className?: string;
  children?: ReactNode;
};

import { CSSProperties, ReactNode } from 'react';

export type SystemProperty = {
  flexDirection: CSSProperties['flexDirection'];
  justifyContent: CSSProperties['justifyContent'];
  alignItems: CSSProperties['alignItems'];
};

export type CardProps = {
  className?: string;
  children?: ReactNode;
  /**
   * The flex direction of the card
   */
  direction?: SystemProperty['flexDirection'];
  /**
   * The flex distribution of the card
   */
  justify?: SystemProperty['justifyContent'];
  /**
   * The flex alignment of the card
   */
  align?: SystemProperty['alignItems'];
};

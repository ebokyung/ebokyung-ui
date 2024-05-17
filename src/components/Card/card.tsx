import { forwardRef } from 'react';
import { cx } from '@/utils/cx';
import { CardStylesProps, body, cardStyles, footer, header, title, image, maxWidth } from './card.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { BasicProps } from '@/types';

type CardProps = BasicProps;
const Card = forwardRef<HTMLDivElement, CardStylesProps & CardProps>(
  ({ size = 'medium', direction = 'column', className, children }, ref) => {
    return (
      <div ref={ref} className={cx(cardStyles({ size, direction }), className)}>
        {children}
      </div>
    );
  },
);

type CardBodyProps = BasicProps;
const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(body, className)}>
      {children}
    </div>
  );
});

type CardFooterProps = BasicProps;
const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(footer, className)}>
      {children}
    </div>
  );
});

type CardHeaderProps = BasicProps;
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cx(header, className)}>
      {children}
    </div>
  );
});

type CardImageProps = {
  src: string;
  alt: string;
  maxW?: string;
};
const CardImage = forwardRef<HTMLImageElement, CardImageProps>(({ src, alt, maxW }, ref) => {
  return <img ref={ref} src={src} alt={alt} className={image} style={assignInlineVars({ [maxWidth]: maxW })} />;
});

type CardTitleProps = BasicProps;
export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={cx(title, className)}>
      {children}
    </div>
  );
});

const CardCompound = Object.assign(Card, {
  Body: CardBody,
  Header: CardHeader,
  Footer: CardFooter,
  Image: CardImage,
  Title: CardTitle,
});

export { CardCompound as Card };

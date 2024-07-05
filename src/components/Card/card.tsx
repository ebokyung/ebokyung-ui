import { ComponentProps, forwardRef } from 'react';
import { cx } from '@/utils/cx';
import { CardStylesProps, body, cardStyles, footer, header, title, image, maxWidth } from './card.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const Card = forwardRef<HTMLDivElement, CardStylesProps & ComponentProps<'div'>>(
  ({ size = 'medium', direction = 'column', className, ...props }, ref) => {
    return <div ref={ref} className={cx(cardStyles({ size, direction }), className)} {...props}></div>;
  },
);

const CardBody = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(body, className)} {...props}></div>;
});

const CardFooter = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(footer, className)} {...props}></div>;
});

const CardHeader = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(header, className)} {...props}></div>;
});

type CardImageProps = ComponentProps<'img'> & {
  maxW?: string;
};
const CardImage = forwardRef<HTMLImageElement, CardImageProps>(({ maxW, ...props }, ref) => {
  return <img ref={ref} className={image} style={assignInlineVars({ [maxWidth]: maxW })} {...props} />;
});

export const CardTitle = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(title, className)} {...props}></div>;
});

const CardCompound = Object.assign(Card, {
  Body: CardBody,
  Header: CardHeader,
  Footer: CardFooter,
  Image: CardImage,
  Title: CardTitle,
});

export { CardCompound as Card };

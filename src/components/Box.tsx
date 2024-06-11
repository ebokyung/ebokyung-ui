import { type Sprinkles } from '@/styles';
import { atoms, extractAtoms } from '@/utils/atoms';
import { ElementType, HTMLAttributes, Ref, forwardRef } from 'react';

type AsProps = {
  as?: ElementType;
};

type ElementProps = Omit<HTMLAttributes<HTMLElement>, 'as' | 'color'>;

export type AsElementProps = AsProps & ElementProps;

// TODO: Sprinkles?
export type BoxProps = AsElementProps & Sprinkles;

export const Box = forwardRef((props: BoxProps, ref: Ref<HTMLElement>) => {
  const { as: Component = 'div', ...other } = props;
  const [atomsProps, propsToForward] = extractAtoms(other);
  const className = atoms({
    className: propsToForward.className,
    reset: typeof Component === 'string' ? Component : 'div',
    ...atomsProps,
  });

  return <Component {...propsToForward} className={className} ref={ref} />;
});

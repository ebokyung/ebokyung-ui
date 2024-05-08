import { BasicProps } from '@/types';
import { forwardRef } from 'react';
import { container, item, trigger, title, content, show } from './accordion.css';
import { cx } from '@/utils/cx';

const Accordion = forwardRef<HTMLUListElement, BasicProps>(({ children, className }, ref) => {
  return (
    <ul ref={ref} className={cx(container, className)}>
      {children}
    </ul>
  );
});

const AccordionItem = forwardRef<HTMLLIElement, BasicProps>(({ children, className }, ref) => {
  return (
    <li ref={ref} className={cx(item, className)}>
      {children}
    </li>
  );
});

type AccordionTriggerProps = BasicProps & {
  expanded: boolean;
  onClick: () => void;
};
const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ expanded, onClick, children, className }, ref) => {
    return (
      <button ref={ref} className={cx(trigger, className)} onClick={onClick}>
        {/* ellips */}
        <span className={title}>{children}</span>
        {expanded ? '-' : '+'}
      </button>
    );
  },
);

type AccordionPanelProps = BasicProps & {
  expanded: boolean;
};
const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(({ expanded, children, className }, ref) => {
  return (
    <div ref={ref} className={`${content} ${expanded ? show : ''} ${className}`}>
      {children}
    </div>
  );
});

const AccordionCompound = Object.assign(Accordion, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
});

export { AccordionCompound as Accordion };

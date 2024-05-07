import { BasicProps } from '@/types';
import { forwardRef } from 'react';

const Accordion = forwardRef<HTMLUListElement, BasicProps>(({ children, className }, ref) => {
  return (
    <ul ref={ref} style={{ display: 'flex', flexDirection: 'column' }} className={className}>
      {children}
    </ul>
  );
});

const AccordionItem = forwardRef<HTMLLIElement, BasicProps>(({ children, className }, ref) => {
  return (
    <li ref={ref} style={{ padding: '0.5rem' }} className={className}>
      {children}
    </li>
  );
});

const AccordionTrigger = forwardRef<HTMLButtonElement, BasicProps>(({ icon, children, className }, ref) => {
  return (
    <button ref={ref} style={{ display: 'flex', alignContent: 'space-between', width: '100%' }} className={className}>
      {/* ellips */}
      <span style={{ flex: 1, textAlign: 'left' }}>{children}</span>
      {icon === 'arrow' ? '>' : '+'}
    </button>
  );
});

const AccordionPanel = forwardRef<HTMLDivElement, BasicProps>(({ children, className }, ref) => {
  return (
    <div ref={ref} style={{}} className={className}>
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

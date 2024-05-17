import { BasicProps } from '@/types';
import { forwardRef, useState } from 'react';
import { container, item, trigger, title, content, show } from './accordion.css';
import { cx } from '@/utils/cx';
import { AccordionContext, useAccordionContext } from './context/accordion-context';

type AccordionProps = {
  allowMultiple: boolean;
};
const Accordion = forwardRef<HTMLUListElement, BasicProps & AccordionProps>(
  ({ allowMultiple, children, className }, ref) => {
    const [expandedItems, setExpandedItems] = useState<unknown[]>([]);

    const singleToggle = id => {
      if (expandedItems.includes(id)) setExpandedItems([]);
      else setExpandedItems([id]);
    };

    const multipleToggle = id => {
      if (expandedItems.includes(id)) setExpandedItems(prev => prev.filter(itemId => itemId !== id));
      else setExpandedItems(prev => prev.concat(id));
    };

    const handleToggle = allowMultiple ? multipleToggle : singleToggle;

    return (
      <AccordionContext.Provider value={{ expandedItems, handleToggle }}>
        <ul ref={ref} className={cx(container, className)}>
          {children}
        </ul>
      </AccordionContext.Provider>
    );
  },
);

const AccordionItem = forwardRef<HTMLLIElement, BasicProps>(({ children, className }, ref) => {
  return (
    <li ref={ref} className={cx(item, className)}>
      {children}
    </li>
  );
});

type AccordionTriggerProps = BasicProps & {
  id: string;
};
const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ id, children, className }, ref) => {
  const { expandedItems, handleToggle } = useAccordionContext();
  return (
    <button ref={ref} className={cx(trigger, className)} onClick={() => handleToggle(id)}>
      {/* ellips */}
      <span className={title}>{children}</span>
      {expandedItems.includes(id) ? '-' : '+'}
    </button>
  );
});

type AccordionPanelProps = BasicProps & {
  id: string;
};
const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(({ id, children, className }, ref) => {
  const { expandedItems } = useAccordionContext();
  return (
    <div ref={ref} className={`${content} ${expandedItems.includes(id) ? show : ''} ${className}`}>
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

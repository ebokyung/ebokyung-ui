import { BasicProps } from '@/types';
import { forwardRef, useState } from 'react';
import { container, item, trigger, title, content, show } from './accordion.css';
import { cx } from '@/utils/cx';
import { AccordionContext, useAccordionContext } from './context/accordion-context';
import { AccordionItemContext, useAccordionItemContext } from './context/accordion-item-context';

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

type AccordionItemProps = BasicProps & {
  id: string;
};
const AccordionItem = forwardRef<HTMLLIElement, AccordionItemProps>(({ id, children, className }, ref) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <li ref={ref} className={cx(item, className)}>
        {children}
      </li>
    </AccordionItemContext.Provider>
  );
});

const AccordionTrigger = forwardRef<HTMLButtonElement, BasicProps>(({ children, className }, ref) => {
  const { expandedItems, handleToggle } = useAccordionContext();
  const { id } = useAccordionItemContext();

  return (
    <button ref={ref} className={cx(trigger, className)} onClick={() => handleToggle(id)}>
      {/* ellips */}
      <span className={title}>{children}</span>
      {expandedItems.includes(id) ? '-' : '+'}
    </button>
  );
});

const AccordionPanel = forwardRef<HTMLDivElement, BasicProps>(({ children, className }, ref) => {
  const { expandedItems } = useAccordionContext();
  const { id } = useAccordionItemContext();
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

import { BasicProps } from '@/types';
import { forwardRef, useState } from 'react';
import { container, item, trigger, title, content } from './accordion.css';
import { cx } from '@/utils/cx';
import { AccordionContext, useAccordionContext } from './context/accordion.context';
import { AccordionItemContext, useAccordionItemContext } from './context/accordion-item.context';
import { Box } from '../Box';

type AccordionProps = BasicProps & {
  allowMultiple: boolean;
};
const Accordion = forwardRef<HTMLUListElement, AccordionProps>(({ allowMultiple, children, className }, ref) => {
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
      <Box as="ul" ref={ref} className={cx(container, className)} role="region" aria-multiselectable={allowMultiple}>
        {children}
      </Box>
    </AccordionContext.Provider>
  );
});

type AccordionItemProps = BasicProps & {
  id: string;
};
const AccordionItem = forwardRef<HTMLLIElement, AccordionItemProps>(({ id, children, className }, ref) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <Box as="li" ref={ref} className={cx(item, className)} role="presentation">
        {children}
      </Box>
    </AccordionItemContext.Provider>
  );
});

const AccordionTrigger = forwardRef<HTMLButtonElement, BasicProps>(({ children, className }, ref) => {
  const { expandedItems, handleToggle } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const isExpanded = expandedItems.includes(id);

  return (
    <Box
      as="button"
      ref={ref}
      className={cx(trigger, className)}
      onClick={() => handleToggle(id)}
      aria-controls={`panel-${id}`}
      aria-expanded={isExpanded}
    >
      <span className={title}>{children}</span>
      {isExpanded ? '-' : '+'}
    </Box>
  );
});

const AccordionPanel = forwardRef<HTMLDivElement, BasicProps>(({ children, className }, ref) => {
  const { expandedItems } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const isExpanded = expandedItems.includes(id);

  return (
    <Box
      ref={ref}
      className={cx(content, className)}
      hidden={!isExpanded}
      id={`panel-${id}`}
      role="region"
      aria-labelledby={`trigger-${id}`}
    >
      {children}
    </Box>
  );
});

const AccordionCompound = Object.assign(Accordion, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
});

export { AccordionCompound as Accordion };

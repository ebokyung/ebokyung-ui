import { createContext, useContext } from 'react';

type AccordionContextState = {
  expandedItems: unknown[];
  handleToggle: (value: string) => void;
};

export const AccordionContext = createContext<AccordionContextState | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion Context Error');
  }
  return context;
};

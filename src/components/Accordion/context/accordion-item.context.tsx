import { createContext, useContext } from 'react';

type AccordionContextState = {
  id: string;
};

export const AccordionItemContext = createContext<AccordionContextState | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('Accordion Item Context Error');
  }
  return context;
};

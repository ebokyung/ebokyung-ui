/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type ListboxContextState = {
  selectedOption: string;
  onSelectedOptionChange: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const ListboxContext = createContext<ListboxContextState | null>(null);

export const useListboxContext = () => {
  const context = useContext(ListboxContext);
  if (!context) {
    throw new Error('ListboxContext must be used within a Listbox');
  }
  return context;
};

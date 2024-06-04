/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type ComboboxContextState = {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isFiltering: boolean;
  setIsFiltering: Dispatch<SetStateAction<boolean>>;
};

export const ComboboxContext = createContext<ComboboxContextState | null>(null);

export const useComboboxContext = () => {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('ComboboxContext must be used within a Combobox');
  }
  return context;
};

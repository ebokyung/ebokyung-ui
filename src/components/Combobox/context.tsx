/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

// TODO: 타입 확장하기
type Item = {
  value: NonNullable<string>;
  option: string;
};

type ComboboxContextState = {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isFiltering: boolean;
  setIsFiltering: Dispatch<SetStateAction<boolean>>;
  items: Item[];
};

export const ComboboxContext = createContext<ComboboxContextState | null>(null);

export const useComboboxContext = () => {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('ComboboxContext must be used within a Combobox');
  }
  return context;
};

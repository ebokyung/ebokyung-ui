/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

// TODO: 타입 확장하기
type Item = {
  value: NonNullable<string>;
  option: string;
};

type ListboxContextState = {
  onSelectedOptionChange: Dispatch<SetStateAction<string>>;
  selectedOption: string;
  items: Item[];
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

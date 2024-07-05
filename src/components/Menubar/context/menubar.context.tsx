/* eslint-disable react-refresh/only-export-components */
import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from 'react';

type MenubarContextValue = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedMenu: ReactNode | null;
  setSelectedMenu: Dispatch<SetStateAction<ReactNode | null>>;
  closeMenu: () => void;
  closeOnSelect: boolean;
};

export const MenubarContext = createContext<MenubarContextValue | null>(null);

export const useMenubarContext = () => {
  const context = useContext(MenubarContext);
  if (!context) {
    throw new Error('MenubarContext must be used within a Menubar');
  }
  return context;
};

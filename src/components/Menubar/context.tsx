/* eslint-disable react-refresh/only-export-components */
import { Dispatch, ReactNode, SetStateAction, createContext, useContext } from 'react';

type MenubarContextState = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedMenu: ReactNode | null;
  setSelectedMenu: Dispatch<SetStateAction<ReactNode | null>>;
  closeMenu: () => void;
};

export const MenubarContext = createContext<MenubarContextState | null>(null);

export const useMenubarContext = () => {
  const context = useContext(MenubarContext);
  if (!context) {
    throw new Error('MenubarContext must be used within a Menubar');
  }
  return context;
};

type MenubarMenuContextState = {
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
};

export const MenubarMenuContext = createContext<MenubarMenuContextState | null>(null);

export const useMenubarMenuContext = () => {
  const context = useContext(MenubarMenuContext);
  if (!context) {
    throw new Error('MenubarMenuContext must be used within a Menubar');
  }
  return context;
};

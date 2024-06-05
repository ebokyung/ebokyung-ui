/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type MenubarMenuContextState = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenubarMenuContext = createContext<MenubarMenuContextState | null>(null);

export const useMenubarMenuContext = () => {
  const context = useContext(MenubarMenuContext);
  if (!context) {
    throw new Error('MenubarMenuContext must be used within a Menubar');
  }
  return context;
};

/* eslint-disable react-refresh/only-export-components */
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

type MenubarMenuContextValue = {
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
};

export const MenubarMenuContext = createContext<MenubarMenuContextValue | null>(null);

export const useMenubarMenuContext = () => {
  const context = useContext(MenubarMenuContext);
  if (!context) {
    throw new Error('MenubarMenuContext must be used within a Menubar');
  }
  return context;
};

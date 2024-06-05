import { ComponentProps, ElementType, HTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import {
  itemContent,
  itemIcon,
  itemShortcut,
  menubar,
  menubarContent,
  menubarItem,
  menubarMenu,
  menubarSeparator,
  menubarTrigger,
} from './menubar.css';
import { cx } from '@/utils/cx';
import { MenubarContext, MenubarMenuContext, useMenubarMenuContext } from './context';

type AsProps = {
  as?: ElementType;
};

type HTMLProperties = Omit<HTMLAttributes<HTMLElement>, 'as'>;

type BoxProps = AsProps & HTMLProperties;

const Box = forwardRef<HTMLElement, BoxProps>(({ as, ...props }, ref) => {
  const Component = as || 'div';
  return <Component ref={ref} {...props} />;
});

//

interface MenubarProps extends ComponentProps<'div'> {
  closeOnSelect?: boolean;
}
const Menubar = forwardRef<HTMLDivElement, MenubarProps>(({ closeOnSelect = true, ...props }, ref) => {
  return <div ref={ref} className={menubar} {...props}></div>;
});

interface MenubarMenuProps extends ComponentProps<'div'> {}
const MenubarMenu = forwardRef<HTMLDivElement, MenubarMenuProps>(({ ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenubarMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={ref} className={menubarMenu} {...props}></div>
    </MenubarMenuContext.Provider>
  );
});

interface MenubarTriggerProps extends ComponentProps<'div'> {}
const MenubarTrigger = forwardRef<HTMLDivElement, MenubarTriggerProps>(({ ...props }, ref) => {
  const context = useMenubarMenuContext();
  const { setIsOpen } = context;
  return (
    <div
      ref={ref}
      className={menubarTrigger}
      onClick={() => setIsOpen(true)}
      // onMouseEnter={() => setIsOpen(true)}
      // onMouseLeave={() => setIsOpen(false)}
      {...props}
    ></div>
  );
});

interface MenubarContentProps extends ComponentProps<'div'> {}
const MenubarContent = forwardRef<HTMLDivElement, MenubarContentProps>(({ ...props }, ref) => {
  // MenubarItem에 icon이 하나라도 있으면 모든 item 왼쪽 여백 주기
  const context = useMenubarMenuContext();
  const { isOpen } = context;
  return isOpen && <div ref={ref} className={menubarContent} {...props}></div>;
});

interface MenubarItemProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  icon?: ReactNode;
  shortcut?: ReactNode;
  isDisabled?: boolean;
  closeOnSelect?: boolean;
}
const MenubarItem = forwardRef<HTMLElement, MenubarItemProps>(
  ({ as = 'div', icon, shortcut, isDisabled = false, closeOnSelect = false, ...props }, ref) => {
    return (
      <Box as={as} ref={ref} className={cx(menubarItem, `${isDisabled ? 'disabled' : ''}`)} {...props}>
        {icon && <span className={itemIcon}>{icon}</span>}
        <span className={itemContent}>{props.children}</span>
        {shortcut && <span className={itemShortcut}>{shortcut}</span>}
      </Box>
    );
  },
);

interface MenubarSeparatorProps extends ComponentProps<'div'> {}
const MenubarSeparator = forwardRef<HTMLDivElement, MenubarSeparatorProps>(({ ...props }, ref) => {
  return <div ref={ref} className={menubarSeparator} {...props}></div>;
});

const MenubarCompound = Object.assign(Menubar, {
  Menu: MenubarMenu,
  Trigger: MenubarTrigger,
  Content: MenubarContent,
  Item: MenubarItem,
  Separator: MenubarSeparator,
  // Group
  // OptionGroup
});

export { MenubarCompound as Menubar };

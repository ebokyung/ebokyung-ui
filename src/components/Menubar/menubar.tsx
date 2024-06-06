import { ComponentProps, ElementType, HTMLAttributes, ReactNode, forwardRef, useEffect, useState } from 'react';
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
import { MenubarContext, MenubarMenuContext, useMenubarContext, useMenubarMenuContext } from './context';
// import { useOutsideClick } from '@/hooks/useOutsideClick';

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

// TODO: closeonselect, disabled, contents 가로 위치, useOutsideClick
interface MenubarProps extends ComponentProps<'div'> {
  closeOnSelect?: boolean;
}
const Menubar = forwardRef<HTMLDivElement, MenubarProps>(({ closeOnSelect = true, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<ReactNode | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setSelectedMenu(null);
  };

  return (
    <MenubarContext.Provider value={{ isOpen, setIsOpen, selectedMenu, setSelectedMenu, closeMenu }}>
      <div ref={ref} className={menubar} {...props}></div>
    </MenubarContext.Provider>
  );
});

interface MenubarMenuProps extends ComponentProps<'div'> {}
const MenubarMenu = forwardRef<HTMLDivElement, MenubarMenuProps>(({ ...props }, ref) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <MenubarMenuContext.Provider value={{ isSelected, setIsSelected }}>
      <div ref={ref} className={menubarMenu} {...props}></div>
    </MenubarMenuContext.Provider>
  );
});

interface MenubarTriggerProps extends ComponentProps<'div'> {}
const MenubarTrigger = forwardRef<HTMLDivElement, MenubarTriggerProps>(({ ...props }, ref) => {
  const context = useMenubarContext();
  const { isOpen, setIsOpen, setSelectedMenu, selectedMenu, closeMenu } = context;

  const menuContext = useMenubarMenuContext();
  const { isSelected, setIsSelected } = menuContext;

  const handleClick = () => {
    if (isOpen && selectedMenu === props.children) {
      closeMenu();
    } else {
      setIsOpen(true);
      setSelectedMenu(props.children);
      setIsSelected(true);
    }
  };

  const handleMouseEnter = () => {
    if (isOpen) {
      setSelectedMenu(props.children);
      setIsSelected(true);
    }
  };

  useEffect(() => {
    setIsSelected(selectedMenu === props.children);
  }, [selectedMenu]);

  return (
    <div
      ref={ref}
      className={cx(menubarTrigger, `${isSelected ? 'active' : ''}`)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      {...props}
    ></div>
  );
});

interface MenubarContentProps extends ComponentProps<'div'> {}
const MenubarContent = forwardRef<HTMLDivElement, MenubarContentProps>(({ ...props }, ref) => {
  const context = useMenubarContext();
  const { isOpen } = context;
  const menuContext = useMenubarMenuContext();
  const { isSelected } = menuContext;
  return isOpen && isSelected ? <div ref={ref} className={menubarContent} {...props}></div> : null;
});

interface MenubarItemProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  icon?: ReactNode;
  shortcut?: ReactNode;
  disabled?: boolean;
  closeOnSelect?: boolean;
}

const MenubarItem = forwardRef<HTMLElement, MenubarItemProps>(
  ({ as = 'div', icon, shortcut, disabled = false, closeOnSelect = false, ...props }, ref) => {
    return (
      <Box as={as} ref={ref} className={cx(menubarItem, `${disabled ? 'disabled' : ''}`)} {...props}>
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

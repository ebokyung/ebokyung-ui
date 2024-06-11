import { ComponentProps, ElementType, HTMLAttributes, ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
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
import { useOutsideClick } from '@/hooks/useOutsideClick';

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
  // 클릭으로 메뉴 토글 관리
  const [isOpen, setIsOpen] = useState(false);
  // inOpen일때, 호버된 메뉴를 보이면서 마우스가 벗어나도 열려있도록 selected menu 변수로 관리
  const [selectedMenu, setSelectedMenu] = useState<ReactNode | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setSelectedMenu(null);
  };

  const menubarRef = useRef<HTMLDivElement>(null); // TODO: ref
  useOutsideClick(menubarRef, () => closeMenu());

  return (
    <MenubarContext.Provider value={{ isOpen, setIsOpen, selectedMenu, setSelectedMenu, closeMenu, closeOnSelect }}>
      <div ref={menubarRef} className={menubar} {...props}></div>
    </MenubarContext.Provider>
  );
});

interface MenubarMenuProps extends ComponentProps<'div'> {}
const MenubarMenu = forwardRef<HTMLDivElement, MenubarMenuProps>(({ ...props }, ref) => {
  // 메뉴별로 현재 자신이 호버된 요소인지 확인
  const [isSelected, setIsSelected] = useState(false);

  return (
    <MenubarMenuContext.Provider value={{ isSelected, setIsSelected }}>
      <div ref={ref} className={menubarMenu} {...props}></div>
    </MenubarMenuContext.Provider>
  );
});

const MenubarTrigger = forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ ...props }, ref) => {
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
    }
  };

  const handleMouseEnter = () => {
    if (isOpen) {
      setSelectedMenu(props.children);
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
  onClick?: () => void;
}

const MenubarItem = forwardRef<HTMLElement, MenubarItemProps>(
  (
    { as = 'div', icon, shortcut, disabled = false, closeOnSelect: localCloseOnSelect = true, onClick, ...props },
    ref,
  ) => {
    const context = useMenubarContext();
    const { closeOnSelect, closeMenu } = context;

    const handleItemClick = () => {
      onClick?.();
      if (localCloseOnSelect && closeOnSelect) {
        closeMenu();
      }
    };

    return (
      <Box
        as={as}
        ref={ref}
        className={cx(menubarItem, `${disabled ? 'disabled' : ''}`)}
        onClick={handleItemClick}
        {...props}
      >
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

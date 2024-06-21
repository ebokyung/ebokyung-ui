import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as styles from './menubar.css';
import { cx } from '@/utils/cx';
import { MenubarContext, useMenubarContext } from './context/menubar.context';
import { MenubarMenuContext, useMenubarMenuContext } from './context/menubar-menu.context';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { Box } from '../Box';

interface MenubarProps extends Omit<ComponentProps<'div'>, 'color'> {
  closeOnSelect?: boolean;
}
export const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
  ({ closeOnSelect = true, ...props }, ref: Ref<HTMLDivElement>) => {
    // 클릭으로 메뉴 토글 관리
    const [isOpen, setIsOpen] = useState(false);
    // inOpen일때, 호버된 메뉴를 보이면서 마우스가 벗어나도 열려있도록 selected menu 변수로 관리
    const [selectedMenu, setSelectedMenu] = useState<ReactNode | null>(null);

    const closeMenu = () => {
      setIsOpen(false);
      setSelectedMenu(null);
    };

    const menubarRef = useRef<HTMLDivElement>(null);
    useOutsideClick(menubarRef, () => closeMenu());

    return (
      <MenubarContext.Provider value={{ isOpen, setIsOpen, selectedMenu, setSelectedMenu, closeMenu, closeOnSelect }}>
        <Box ref={ref}>
          <Box ref={menubarRef} className={styles.menubar} {...props}></Box>
        </Box>
      </MenubarContext.Provider>
    );
  },
);

interface MenubarMenuProps extends Omit<ComponentProps<'div'>, 'color'> {}
export const MenubarMenu = forwardRef<HTMLDivElement, MenubarMenuProps>(({ ...props }, ref) => {
  // 메뉴별로 현재 자신이 호버된 요소인지 확인
  const [isSelected, setIsSelected] = useState(false);

  return (
    <MenubarMenuContext.Provider value={{ isSelected, setIsSelected }}>
      <Box ref={ref} className={styles.menubarMenu} {...props}></Box>
    </MenubarMenuContext.Provider>
  );
});

interface MenubarTriggerProps extends Omit<ComponentProps<'div'>, 'color'> {}
export const MenubarTrigger = forwardRef<HTMLDivElement, MenubarTriggerProps>(({ children, ...props }, ref) => {
  const context = useMenubarContext();
  const { isOpen, setIsOpen, setSelectedMenu, selectedMenu, closeMenu } = context;

  const menuContext = useMenubarMenuContext();
  const { setIsSelected } = menuContext;

  const isSelected = selectedMenu === children;

  useEffect(() => {
    setIsSelected(isSelected);
  }, [selectedMenu]);

  const handleClick = () => {
    if (isOpen && isSelected) {
      closeMenu();
    } else {
      setIsOpen(true);
      setSelectedMenu(children);
    }
  };

  const handleMouseEnter = () => {
    if (isOpen) {
      setSelectedMenu(children);
    }
  };

  return (
    <Box
      ref={ref}
      className={cx(styles.menubarTrigger, `${isSelected ? 'active' : ''}`)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </Box>
  );
});

interface MenubarContentProps extends Omit<ComponentProps<'div'>, 'color'> {}
export const MenubarContent = forwardRef<HTMLDivElement, MenubarContentProps>(({ ...props }, ref) => {
  const context = useMenubarContext();
  const { isOpen } = context;

  const menuContext = useMenubarMenuContext();
  const { isSelected } = menuContext;

  return isOpen && isSelected ? <div ref={ref} className={styles.menubarContent} {...props}></div> : null;
});

// TODO: 구체적인 type 지정
interface MenubarItemProps<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<T>>
  extends Omit<ComponentPropsWithoutRef<any>, 'color'> {
  as?: ElementType;
  icon?: ReactNode;
  shortcut?: ReactNode;
  disabled?: boolean;
  closeOnSelect?: boolean;
  onClick?: () => void;
}

export const MenubarItem = forwardRef<HTMLElement, MenubarItemProps<any>>(
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
        className={cx(styles.menubarItem, `${disabled ? 'disabled' : ''}`)}
        onClick={handleItemClick}
        {...props}
      >
        {icon && <span className={styles.itemIcon}>{icon}</span>}
        <span className={styles.itemContent}>{props.children}</span>
        {shortcut && <span className={styles.itemShortcut}>{shortcut}</span>}
      </Box>
    );
  },
);

interface MenubarSeparatorProps extends Omit<ComponentProps<'div'>, 'color'> {}
export const MenubarSeparator = forwardRef<HTMLDivElement, MenubarSeparatorProps>(({ ...props }, ref) => {
  return <Box ref={ref} className={styles.menubarSeparator} {...props}></Box>;
});

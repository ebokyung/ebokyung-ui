import React, {
  Children,
  ComponentProps,
  Dispatch,
  SetStateAction,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useRef,
  useState,
} from 'react';
import * as styles from './listbox.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cx } from '@/utils/cx';
import { ListboxContext, useListboxContext } from './listbox.context';
import { Box } from '../Box';

// TODO: 타입 확장하기
// type Item = {
//   value: NonNullable<string>;
//   option: string;
// };

interface ListboxProps extends Omit<ComponentProps<'div'>, 'color'> {
  selectedOption: string;
  onSelectedOptionChange: Dispatch<SetStateAction<string>>;
}

export const Listbox = forwardRef<HTMLDivElement, ListboxProps>(
  ({ selectedOption, onSelectedOptionChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const contextValue = { onSelectedOptionChange, selectedOption, isOpen, setIsOpen };

    return (
      <ListboxContext.Provider value={contextValue}>
        <Box
          ref={ref}
          className={styles.selectContainer}
          role="listbox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          {...props}
        ></Box>
      </ListboxContext.Provider>
    );
  },
);

interface ListboxTriggerProps extends Omit<ComponentProps<'div'>, 'color'> {
  label: string;
}

export const ListboxTrigger = forwardRef<HTMLDivElement, ListboxTriggerProps>(({ label, ...props }, ref) => {
  const context = useListboxContext();
  const { selectedOption, setIsOpen, isOpen } = context;

  const selectRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(selectRef, () => setIsOpen(false));

  return (
    <div ref={ref}>
      <Box
        as="button"
        ref={selectRef}
        className={`${styles.selectButton} ${isOpen ? 'on' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        {...props}
      >
        {selectedOption || <span style={{ color: '#c4c4c4' }}>{label}</span>}
      </Box>
    </div>
  );
});

interface ListboxOptions extends Omit<ComponentProps<'ul'>, 'color'> {}

export const ListboxOptions = forwardRef<HTMLUListElement, ListboxOptions>(({ children, ...props }, ref) => {
  const context = useListboxContext();
  const { isOpen, setIsOpen } = context;

  const optionRefs = useRef<HTMLButtonElement[]>([]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || (event.key === 'Tab' && !event.shiftKey)) {
      event.preventDefault();
      const currentIndex = optionRefs.current.findIndex(ref => ref === event.target);
      const nextIndex = (currentIndex + 1) % optionRefs.current.length;
      optionRefs.current[nextIndex].focus();
    } else if (event.key === 'ArrowUp' || (event.key === 'Tab' && event.shiftKey)) {
      event.preventDefault();
      const currentIndex = optionRefs.current.findIndex(ref => ref === event.target);
      const prevIndex = currentIndex === 0 ? optionRefs.current.length - 1 : currentIndex - 1;
      optionRefs.current[prevIndex].focus();
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  if (!isOpen) return null;

  const addedEventChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<ListboxOptionProps>, {
        buttonRef: (buttonRef: HTMLButtonElement) => (optionRefs.current[index] = buttonRef),
        handleKeyDown,
      });
    }
    return child;
  });

  return (
    <Box as="ul" ref={ref} className={styles.optionList} role="listbox" {...props}>
      {addedEventChildren}
    </Box>
  );
});

interface ListboxOptionProps extends Omit<ComponentProps<'li'>, 'color'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  buttonRef?: (ref: HTMLButtonElement) => void;
  handleKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export const ListboxOption = forwardRef<HTMLLIElement, ListboxOptionProps>(
  ({ item, handleKeyDown, buttonRef, ...props }, ref) => {
    const context = useListboxContext();
    const { selectedOption, onSelectedOptionChange, setIsOpen } = context;

    const isSelected = item.option === selectedOption;

    const handleOptionSelect = (option: string) => {
      onSelectedOptionChange(option);
      setIsOpen(false);
    };

    return (
      <Box as="li" ref={ref} className={styles.optionItem} role="option" aria-selected={isSelected} {...props}>
        <Box
          as="button"
          className={cx(styles.optionButton, `${isSelected ? 'selected' : ''}`)}
          onClick={() => handleOptionSelect(item.option)}
          onKeyDown={handleKeyDown}
          ref={buttonRef}
        >
          {item.option}
        </Box>
      </Box>
    );
  },
);

import {
  Children,
  ComponentProps,
  Dispatch,
  FormEvent,
  SetStateAction,
  forwardRef,
  isValidElement,
  useRef,
  useState,
} from 'react';
import { ComboboxContext, useComboboxContext } from './combobox.context';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import * as styles from './combobox.css';
import { cx } from '@/utils/cx';
import { Box } from '../Box';

interface ComboboxProps extends Omit<ComponentProps<'div'>, 'color'> {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
}

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(({ value, onValueChange, ...props }, ref) => {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  const contextValue = { value, onValueChange, query, setQuery, isOpen, setIsOpen, isFiltering, setIsFiltering };

  return (
    <ComboboxContext.Provider value={contextValue}>
      <Box ref={ref} className={styles.comboboxContainer} {...props}></Box>
    </ComboboxContext.Provider>
  );
});

interface ComboboxTriggerProps extends Omit<ComponentProps<'div'>, 'color'> {
  placeholder?: string;
}

export const ComboboxTrigger = forwardRef<HTMLDivElement, ComboboxTriggerProps>(
  ({ placeholder = 'select an option', ...props }, ref) => {
    const context = useComboboxContext();
    const { isOpen, setIsOpen, value, onValueChange, query, setQuery, setIsFiltering } = context;

    const triggerRef = useRef<HTMLDivElement>(null);

    const finishUpTyping = () => {
      if (query !== value) {
        if (query.trim() == '') {
          setQuery('');
          onValueChange('');
        } else {
          setQuery(value);
        }
      }
    };

    useOutsideClick(triggerRef, () => {
      finishUpTyping();
      setIsOpen(false);
    });

    const handleValueChange = (event: FormEvent<HTMLInputElement>) => {
      setIsOpen(true);
      setIsFiltering(true);
      setQuery(event.currentTarget.value);
    };

    const handleInputFocus = () => {
      setIsOpen(true);
      setIsFiltering(false);
    };

    const handleButtonClick = () => {
      finishUpTyping();
      setIsOpen(!isOpen);
      setIsFiltering(false);
      // isOpen이면 input에 focus 추가
    };

    return (
      <div ref={ref}>
        <Box ref={triggerRef} className={styles.triggerContainer} {...props}>
          {/* input 컴포넌트 적용하기 */}
          <input
            value={query}
            onChange={handleValueChange}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            className={styles.triggerInput}
          />
          <Box as="button" className={`${styles.triggerButton} ${isOpen ? 'on' : ''}`} onClick={handleButtonClick} />
        </Box>
      </div>
    );
  },
);

interface ComboboxOptionsProps extends Omit<ComponentProps<'ul'>, 'color'> {}

export const ComboboxOptions = forwardRef<HTMLUListElement, ComboboxOptionsProps>(({ ...props }, ref) => {
  const context = useComboboxContext();
  const { isOpen, query, isFiltering } = context;

  if (!isOpen) return null;

  const filteredItems = isFiltering
    ? Children.toArray(props.children).filter(child => {
        // child가 ReactElement<{ option: string }> 타입인지 확인
        if (isValidElement<{ value: string }>(child)) {
          // option 속성이 존재하는지 확인
          const value = child.props.value;
          return value && value.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      })
    : props.children;

  return (
    <Box as="ul" ref={ref} role="listbox" className={styles.optionList} {...props}>
      {Children.count(filteredItems) > 0 ? filteredItems : <div className={styles.empty}>no options</div>}
    </Box>
  );
});

interface ComboboxOptionProps extends Omit<ComponentProps<'li'>, 'color'> {
  value: string;
}

export const ComboboxOption = forwardRef<HTMLLIElement, ComboboxOptionProps>(({ value, ...props }, ref) => {
  const context = useComboboxContext();
  const { value: selected, setQuery, onValueChange, setIsOpen } = context;

  const handleOptionSelect = (option: string) => {
    setQuery(option);
    onValueChange(option);
    setIsOpen(false);
  };

  return (
    <Box as="li" ref={ref} className={styles.optionItem} role="option" aria-selected={selected === value} {...props}>
      <Box
        className={cx(styles.optionContent, `${selected === value ? 'selected' : ''}`)}
        onClick={() => handleOptionSelect(value)}
      >
        {value}
      </Box>
    </Box>
  );
});

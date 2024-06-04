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
import { ComboboxContext, useComboboxContext } from './context';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import {
  optionList,
  optionItem,
  optionContent,
  empty,
  triggerButton,
  triggerInput,
  triggerContainer,
  comboboxContainer,
} from './combobox.css';
import { cx } from '@/utils/cx';

interface ComboboxProps extends ComponentProps<'div'> {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
}

const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(({ value, onValueChange, ...props }, ref) => {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  return (
    <ComboboxContext.Provider
      value={{ value, onValueChange, query, setQuery, isOpen, setIsOpen, isFiltering, setIsFiltering }}
    >
      <div ref={ref} className={comboboxContainer} {...props}></div>
    </ComboboxContext.Provider>
  );
});

interface ComboboxTriggerProps extends ComponentProps<'div'> {
  placeholder?: string;
}

const ComboboxTrigger = forwardRef<HTMLDivElement, ComboboxTriggerProps>(
  ({ placeholder = 'select an option', ...props }, ref) => {
    const context = useComboboxContext();
    const { isOpen, setIsOpen, value, onValueChange, query, setQuery, setIsFiltering } = context;

    const triggerRef = useRef<HTMLDivElement>(null); // TODO: ref??

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
      <div ref={triggerRef} className={triggerContainer} {...props}>
        {/* input 컴포넌트 적용하기 */}
        <input
          value={query}
          onChange={handleValueChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className={triggerInput}
        />
        <button className={`${triggerButton} ${isOpen ? 'on' : ''}`} onClick={handleButtonClick} />
      </div>
    );
  },
);

const ComboboxOptions = forwardRef<HTMLUListElement, ComponentProps<'ul'>>(({ ...props }, ref) => {
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
    <ul ref={ref} role="listbox" className={optionList} {...props}>
      {Children.count(filteredItems) > 0 ? filteredItems : <div className={empty}>no options</div>}
    </ul>
  );
});

interface ComboboxOptionProps extends ComponentProps<'li'> {
  value: string;
}

const ComboboxOption = forwardRef<HTMLLIElement, ComboboxOptionProps>(({ value, ...props }, ref) => {
  const context = useComboboxContext();
  const { value: selected, setQuery, onValueChange, setIsOpen } = context;

  const handleOptionSelect = (option: string) => {
    setQuery(option);
    onValueChange(option);
    setIsOpen(false);
  };

  return (
    <li ref={ref} className={optionItem} role="option" aria-selected={selected === value} {...props}>
      <div
        className={cx(optionContent, `${selected === value ? 'selected' : ''}`)}
        onClick={() => handleOptionSelect(value)}
      >
        {value}
      </div>
    </li>
  );
});

const ComboboxCompound = Object.assign(Combobox, {
  //   label: ComboboxLabel,
  Trigger: ComboboxTrigger,
  Options: ComboboxOptions,
  Option: ComboboxOption,
});

export { ComboboxCompound as Combobox };

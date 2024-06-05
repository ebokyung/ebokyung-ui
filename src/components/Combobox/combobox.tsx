import { Dispatch, FormEvent, SetStateAction, forwardRef, useRef, useState } from 'react';
import {
  optionList,
  optionButton,
  optionItem,
  triggerButton,
  triggerInput,
  triggerContainer,
  comboboxContainer,
} from './combobox.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cx } from '@/utils/cx';
import { ComboboxContext, useComboboxContext } from './context';

// TODO: 타입 확장하기
type Item = {
  value: NonNullable<string>;
  option: string;
};

type ComboboxProps = {
  value: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  items: Item[];
  placeholder: string;
};

export const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  ({ value, onValueChange, items, placeholder }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);

    return (
      <ComboboxContext.Provider value={{ value, onValueChange, isOpen, setIsOpen, isFiltering, setIsFiltering, items }}>
        <div ref={ref} role="listbox" aria-expanded={isOpen} aria-haspopup="listbox" className={comboboxContainer}>
          <ComboboxTrigger placeholder={placeholder} />
          <ComboboxOptions />
        </div>
      </ComboboxContext.Provider>
    );
  },
);

const ComboboxTrigger = ({ placeholder }: { placeholder: string }) => {
  const context = useComboboxContext();
  const { isOpen, setIsOpen, value, onValueChange, setIsFiltering, items } = context;

  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideClick(selectRef, () => {
    if (!items.some(item => item.option === value)) {
      onValueChange('');
    }
    setIsOpen(false);
  });

  const handleValueChange = (event: FormEvent<HTMLInputElement>) => {
    setIsOpen(true);
    setIsFiltering(true);
    onValueChange(event.currentTarget.value);
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setIsFiltering(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    setIsFiltering(false);
  };

  return (
    <div ref={selectRef} className={triggerContainer}>
      {/* input 컴포넌트 적용하기 */}
      <input
        value={value}
        onChange={handleValueChange}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        className={triggerInput}
      />
      <button className={`${triggerButton} ${isOpen ? 'on' : ''}`} onClick={handleButtonClick} />
    </div>
  );
};

const ComboboxOptions = () => {
  const context = useComboboxContext();
  const { isOpen, setIsOpen, value, onValueChange, isFiltering, items } = context;

  const filteredItems = isFiltering
    ? items.filter(item => item.option.toLowerCase().includes(value.toLowerCase()))
    : items;

  const handleOptionSelect = (option: string) => {
    onValueChange(option);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <ul className={optionList} role="listbox">
      {filteredItems.length <= 0 ? (
        <li className={optionItem}>
          <div>no option</div>
        </li>
      ) : (
        filteredItems.map(item => (
          <li key={item.value} className={optionItem} role="option" aria-selected={item.option === value}>
            <button
              className={cx(optionButton, `${item.option === value ? 'selected' : ''}`)}
              onClick={() => handleOptionSelect(item.option)}
            >
              {item.option}
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

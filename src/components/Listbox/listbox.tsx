import React, { Dispatch, SetStateAction, forwardRef, useRef, useState } from 'react';
import { selectContainer, selectButton, optionList, optionButton, optionItem } from './listbox.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cx } from '@/utils/cx';
import { ListboxContext, useListboxContext } from './context';

// TODO: 타입 확장하기
type Item = {
  value: NonNullable<string>;
  option: string;
};

type ListboxProps = {
  onSelectedOptionChange: Dispatch<SetStateAction<string>>;
  selectedOption: string;
  items: Item[];
  label: string;
};

export const Listbox = forwardRef<HTMLDivElement, ListboxProps>(
  ({ onSelectedOptionChange, selectedOption, items, label }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <ListboxContext.Provider value={{ onSelectedOptionChange, selectedOption, items, isOpen, setIsOpen }}>
        <div ref={ref} className={selectContainer} role="listbox" aria-expanded={isOpen} aria-haspopup="listbox">
          <ListboxTrigger label={label} />
          {isOpen && <ListboxOptions />}
        </div>
      </ListboxContext.Provider>
    );
  },
);

const ListboxTrigger = ({ label }: { label: string }) => {
  const context = useListboxContext();
  const { selectedOption, setIsOpen, isOpen } = context;

  const selectRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(selectRef, () => setIsOpen(false));

  return (
    <button
      ref={selectRef}
      className={`${selectButton} ${isOpen ? 'on' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      {selectedOption || <span style={{ color: '#c4c4c4' }}>{label}</span>}
    </button>
  );
};

const ListboxOptions = () => {
  const context = useListboxContext();
  const { items, selectedOption, onSelectedOptionChange, setIsOpen } = context;

  const optionRefs = useRef<HTMLButtonElement[]>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
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
  };

  const handleOptionSelect = (option: string) => {
    onSelectedOptionChange(option);
    setIsOpen(false);
  };

  return (
    <ul className={optionList} role="listbox">
      {items.map((item, index) => (
        <li key={item.value} className={optionItem} role="option" aria-selected={item.option === selectedOption}>
          <button
            className={cx(optionButton, `${item.option === selectedOption ? 'selected' : ''}`)}
            onClick={() => handleOptionSelect(item.option)}
            onKeyDown={handleKeyDown}
            ref={(ref: HTMLButtonElement) => (optionRefs.current[index] = ref)}
          >
            {item.option}
          </button>
        </li>
      ))}
    </ul>
  );
};

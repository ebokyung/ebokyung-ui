import { Dispatch, forwardRef, useEffect, useRef, useState } from 'react';
import { selectContainer, selectButton, optionList, optionButton, optionItem } from './selectbox.css';
import { cx } from '@/utils/cx';

type item = {
  value: NonNullable<string>;
  option: string;
};

type SelectboxProps = {
  onSelectedOptionChange: Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
  items: item[];
  label: string;
};

export const Selectbox = forwardRef<HTMLDivElement, SelectboxProps>(
  ({ onSelectedOptionChange, selectedOption, items, label }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<HTMLButtonElement[]>([]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

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
      <div ref={ref}>
        <div className={selectContainer} ref={selectRef}>
          <button className={`${selectButton} ${isOpen ? 'on' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            {selectedOption || <span style={{ color: '#c4c4c4' }}>{label}</span>}
          </button>
          {isOpen && (
            <ul className={optionList}>
              {items.map((item, index) => (
                <li key={item.value} className={optionItem}>
                  <button
                    className={cx(optionButton, `${item.option === selectedOption ? 'selected' : ''}`)}
                    onClick={() => handleOptionSelect(item.option)}
                    onKeyDown={handleKeyDown}
                    ref={ref => (optionRefs.current[index] = ref as HTMLButtonElement)}
                  >
                    {item.option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
);

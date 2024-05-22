import { useEffect, useRef, useState } from 'react';
import { selectContainer, selectButton, optionList, optionButton, optionItem } from './selectbox.css';
import { cx } from '@/utils/cx';

export const Selectbox = ({ label = 'select option', options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);
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
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={selectContainer} ref={selectRef}>
      <button className={`${selectButton} ${isOpen ? 'on' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul className={optionList}>
          {options.map((opt, index) => (
            <li key={opt.value} className={optionItem}>
              <button
                className={cx(optionButton, `${opt.option === selectedOption ? 'selected' : ''}`)}
                onClick={() => handleOptionSelect(opt.option)}
                onKeyDown={handleKeyDown}
                ref={ref => (optionRefs.current[index] = ref as HTMLButtonElement)}
              >
                {opt.option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

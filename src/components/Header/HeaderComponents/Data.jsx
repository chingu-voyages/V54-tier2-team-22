import { useState, useRef, useEffect } from 'react';
import { getCurrentDate } from '../../../utils/getCurrentDate';
import DataIcon from '../../../icons/DataIcon';

function Data() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleDate = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <button
      ref={wrapperRef}
      className="flex items-center relative cursor-pointer dark:text-Neutral-100 text-Neutral-900"
      onClick={toggleDate}
      aria-label="Toggle date visibility"
    >
      <DataIcon />
      {isOpen && (
        <span className=" w-[90px] text-Neutral-600 dark:text-Neutral-300 text-sm absolute left-0  top-[30px]">
          {getCurrentDate()}
        </span>
      )}
    </button>
  );
}

export default Data;

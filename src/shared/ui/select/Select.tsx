'use client'
import React, { useEffect, useRef, useState } from 'react';

interface IProps {
  activeOptionsValue: string
  setActiveOptionsValue: (activeOptionsValue: string) => void
  options: string[];
}

export const Select = ({ activeOptionsValue, setActiveOptionsValue, options }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };


    if (typeof window !== "undefined"){
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    setActiveOptionsValue(option)
    setIsOpen(false)
  }

  return (
    <div ref={selectRef} className="relative z-20">
      <button 
        className={`flex items-center justify-center gap-[2.3vw] bg-[#262437] border border-[#364357] h-42px w-full ${isOpen ? 'rounded-[9px_9px_0px_0px]' : 'rounded-[9px]'}`} 
        onClick={() => setIsOpen(prev => !prev)}
      >
        <p className='fs-12 font-semibold'>{activeOptionsValue}</p>
        <svg className={`transition-all w-9px h-6px ${isOpen ? 'rotate-180' : ''}`} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M3.74407 5.12713C4.14284 5.58759 4.85716 5.58759 5.25593 5.12713L8.26318 1.65465C8.82406 1.00701 8.364 0 7.50725 0H1.49275C0.635997 0 0.175944 1.00701 0.73682 1.65465L3.74407 5.12713Z" fill="white"/>
        </svg>
      </button>
      {isOpen && (
        <ul className="bg-[#262437] rounded-[0px_0px_9px_9px] border border-[#364357] w-full mt-[-1px] h-[1000px] max-h-[200px] overflow-y-auto absolute">
          {options.map((option, index, arr) => (
            <li onClick={() => handleSelect(option)} key={index} className={`flex items-center justify-center h-35px ${index === (arr.length - 1) ? '': 'border-b-[1px] border-[#364357]'}`}>
              <p className='fs-12 font-semibold'>{option}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

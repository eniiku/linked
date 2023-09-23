'use client';

import React, { useState } from 'react';

interface AccordionProps {
  items: Array<{ title: string; content: string }>;
}

function Accordion({ items }: AccordionProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Function to handle click on an accordion item
  const handleItemClick = (index: number) => {
    if (activeItem === index) {
      // If the clicked item is already open, close it
      setActiveItem(null);
    } else {
      // Otherwise, set the clicked item as active
      setActiveItem(index);
    }
  };

  return (
    <div className='w-full space-y-2 lg:space-y-3 lg:max-w-[430px]'>
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-b border-pink text-xs lg:text-sm leading-[18px] ${
            activeItem === index ? 'active' : ''
          }`}
          onClick={() => handleItemClick(index)}
        >
          <button
            className='flex items-end justify-between lg:items-center gap-11 py-2 lg:py-3 lg:gap-6 w-full'
            aria-description={item.title}
            aria-label={`Click to view the answer for '${item.title}'`}
          >
            <p>{item.title}</p>
            <span
              className='text-pink lg:text-lg leading-[137.5%] block'
              aria-hidden
            >
              +
            </span>
          </button>
          {activeItem === index && (
            <div
              className='py-2 lg:py-3'
              aria-description={`Answer to previous quesion: ${item.content}`}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

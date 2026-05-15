'use client';

import React, { createContext, useContext, useState, useId } from 'react';

const TabsContext = createContext();

// 2. HLAVNÝ OBAL: <Tabs>
// Drží stav (activeTab) a unikátne ID, ktoré zdieľa so všetkými deťmi
export const Tabs = ({ defaultValue, children, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const baseId = useId();

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, baseId }}>
      <div className={`tabs-container ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// 3. OBAL PRE TLAČIDLÁ: <TabsList>
export const TabsList = ({ children, ariaLabel, orientation = 'horizontal', className = '' }) => {
  const handleKeyDown = (e) => {
    const tabs = Array.from(e.currentTarget.querySelectorAll('[role="tab"]'));
    const currentIndex = tabs.findIndex(tab => tab === e.target);
    
    if (currentIndex === -1) return;

    let newIndex = currentIndex;

    if (orientation === 'horizontal') {
      if (e.key === 'ArrowRight') newIndex = (currentIndex + 1) % tabs.length;
      if (e.key === 'ArrowLeft') newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (orientation === 'vertical') {
      if (e.key === 'ArrowDown') newIndex = (currentIndex + 1) % tabs.length;
      if (e.key === 'ArrowUp') newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    if (e.key === 'Home') newIndex = 0;
    if (e.key === 'End') newIndex = tabs.length - 1;

    if (newIndex !== currentIndex) {
      e.preventDefault();
      tabs[newIndex].focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation={orientation}
      onKeyDown={handleKeyDown}
      className={`
        flex relative mb-10
        ${orientation === 'horizontal'
          ? 'flex-row flex-wrap pb-[1px] before:bottom-0 before:left-2.5 before:right-0 before:h-[1px] before:w-auto'
          : 'flex-col pr-[1px] before:top-0 before:right-0 before:w-[1px] before:h-full'
        }
        before:content-[''] before:absolute before:bg-[#d4d4d4] before:z-0 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// 4. TAB: <TabsTrigger>
// Automaticky zistí, či je aktívny, vygeneruje si ID a pri kliknutí update kontext
export const TabsTrigger = ({ value, children, className = '' }) => {
  const { activeTab, setActiveTab, baseId } = useContext(TabsContext);
  const selected = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={selected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      onClick={() => setActiveTab(value)}
      className={`
        relative px-6 py-2.5 border border-[#d4d4d4] -mb-[1px] -ml-[1px] first:ml-0 outline-none transition-colors rounded-none
        ${selected
          ? 'bg-white text-[#0B4199] font-bold shadow-[inset_0_-3px_0_0_#0B4199] z-10'
          : 'bg-white text-black font-normal hover:shadow-[0_0_0_4px_#757575] hover:z-20'
        }
        focus:ring-[3px] focus:ring-[#D96E00] focus:ring-offset-[2px] focus:z-30
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className = '' }) => {
  const { activeTab, baseId } = useContext(TabsContext);
  const hidden = activeTab !== value;

  return (
    <div
      id={`${baseId}-panel-${value}`}
      role="tabpanel"
      aria-labelledby={`${baseId}-tab-${value}`}
      hidden={hidden}
      className={className}
    >
      {children}
    </div>
  );
};
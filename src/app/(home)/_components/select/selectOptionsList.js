// select/SelectOptionsList.jsx
import React from 'react';
import { cx } from './selectUtils';

const SelectOptionsList = ({
  listboxId,
  selectId,
  options,
  selectedValue,
  highlightedIndex,
  selectedIndex,
  onOptionMouseEnter,
  onOptionSelect,
}) => {
  return (
    <div
      id={listboxId}
      role="listbox"
      aria-labelledby={selectId}
      className="
        absolute left-0 right-0 top-[calc(100%+5px)] z-50
        rounded-[5px] border-2 border-[#BDBDBD] bg-white
        shadow-[0px_12px_32px_0px_rgba(26,26,26,0.24)]
      "
    >
      {selectedIndex >= 0 && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[-2px] z-[60] h-12 w-[3px] bg-[#0B4199]"
          style={{ top: `${selectedIndex * 48}px` }}
        />
      )}

      <div className="max-h-[300px] overflow-y-auto rounded-[3px]">
        <div className="flex flex-col">
          {options.map((option, index) => {
            const isSelected = option.value === selectedValue;
            const isHighlighted = index === highlightedIndex;

            return (
              <button
                key={option.value}
                id={`${selectId}-option-${index}`}
                type="button"
                role="option"
                aria-selected={isSelected}
                disabled={option.disabled}
                onMouseEnter={() => {
                  if (!option.disabled) {
                    onOptionMouseEnter(index);
                  }
                }}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onClick={() => onOptionSelect(option)}
                className={cx(
                  'relative flex min-h-12 w-full items-center rounded-none border-0 px-5 py-2.5 text-left text-[16px] leading-[24px] tracking-wide outline-none',
                  option.disabled
                    ? 'cursor-not-allowed bg-white text-[#757575]'
                    : 'cursor-pointer text-[#212121]',
                  isHighlighted && !option.disabled
                    ? 'bg-[#F5F5F5] underline decoration-2 underline-offset-2'
                    : !option.disabled && 'bg-white',
                  isSelected && 'font-bold text-[#0B4199]'
                )}
              >
                <span className="relative z-[2] min-w-0 flex-1 truncate">
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectOptionsList;
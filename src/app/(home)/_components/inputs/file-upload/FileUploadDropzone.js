// file-upload/FileUploadDropzone.jsx
import React from 'react';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';
import { cx } from './FileUploadUtils';

const CloudUploadIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false" className={className}>
    <path d="M32.25 16.7332C31.1167 10.9832 26.0667 6.6665 20 6.6665C15.1833 6.6665 11 9.39984 8.91667 13.3998C3.9 13.9332 0 18.1832 0 23.3332C0 28.8498 4.48333 33.3332 10 33.3332H31.6667C36.2667 33.3332 40 29.5998 40 24.9998C40 20.5998 36.5833 17.0332 32.25 16.7332ZM23.3333 21.6665V28.3332H16.6667V21.6665H11.6667L20 13.3332L28.3333 21.6665H23.3333Z" fill="currentColor"/>
  </svg>
);

const FileUploadDropzone = ({
  inputId,
  accept,
  multiple,
  required,
  disabled,
  hasUploadError,
  hasFieldError,
  errorId,
  title,
  titleId,
  describedBy,
  enableDragAndDrop,
  isDragging,
  dragHandlers,
  formatsText,
  formatsId,
  maxSizeText,
  maxSizeId,
  subtitle,
  subtitleId,
  buttonText,
  selectionStatusId,
  selectionStatusText,
  inputRef,
  onInputChange,
  onOpenDialog,
}) => {
  return (
    <>
      {!enableDragAndDrop && <p id={subtitleId} className="mb-[20px] text-[19px]/[28px] text-[#757575]">{subtitle}</p>}

      <input
        ref={inputRef}
        id={inputId}
        name={inputId}
        type="file"
        accept={accept}
        multiple={multiple}
        aria-required={required || undefined}
        disabled={disabled}
        aria-invalid={hasUploadError ? 'true' : undefined}
        aria-errormessage={hasFieldError ? errorId : undefined}
        aria-labelledby={titleId}
        aria-describedby={describedBy}
        tabIndex={!enableDragAndDrop ? -1 : undefined}
        className="peer sr-only"
        onChange={onInputChange}
      />

      {enableDragAndDrop ? (
        <label
          htmlFor={inputId}
          {...dragHandlers}
          className={cx(
            'group block rounded-md border-[2px] border-dashed px-[20px] py-[30px] text-center',
            disabled ? 'cursor-not-allowed border-[#BDBDBD] bg-[#F5F5F5] text-[#757575]' : hasUploadError ? 'cursor-pointer border-[#C3112B] bg-white text-[#0B4199] hover:bg-[#EFF5FE] hover:ring-[4px] hover:ring-[#757575] peer-focus:bg-[#EFF5FE] peer-focus:outline peer-focus:outline-[3px] peer-focus:outline-[#D96E00] peer-focus:outline-offset-[2px]' : 'cursor-pointer border-[#757575] bg-white text-[#0B4199] hover:bg-[#EFF5FE] hover:ring-[4px] hover:ring-[#757575] peer-focus:bg-[#EFF5FE] peer-focus:outline peer-focus:outline-[3px] peer-focus:outline-[#D96E00] peer-focus:outline-offset-[2px]',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-60',
            isDragging && !disabled && 'bg-[#EFF5FE] ring-[4px] ring-[#757575]'
          )}
        >
          <CloudUploadIcon className={cx('mx-auto mb-4 h-10 w-10', disabled ? 'text-[#757575]' : 'text-[#0B4199]')}/>
          <p id={subtitleId} className={cx('mt-2 text-[20px]/[26px] font-bold', disabled ? 'text-[#757575]' : 'text-[#0B4199]')}>{subtitle}</p>
          
          <div className={cx('mt-1 space-y-1 text-[19px]/[28px]', disabled ? 'text-[#757575]' : 'text-[#0B4199]')}>
            <div id={formatsId}>{formatsText}</div>
            <p id={maxSizeId}>{maxSizeText}</p>
          </div>

          <span className={cx('file-upload-pseudo-button mt-6 inline-flex items-center justify-center rounded-[5px] border-[2px] px-5 py-3 font-bold', disabled ? 'border-[#BDBDBD] bg-[#F5F5F5] text-[#757575]' : 'border-[#0B4199] bg-white text-[#0B4199] group-hover:bg-[#0B4199] group-hover:text-white')}>
            <svg aria-hidden="true" className="mr-2 h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" focusable="false"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16V4m0 0-5 5m5-5 5 5M5 20h14"/></svg>
            <span>{buttonText}</span><span className="sr-only"> pre pole {title}</span>
          </span>
        </label>
      ) : (
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonCustom type="button" variant="secondary" status="basic" disabled={disabled} onClick={onOpenDialog} aria-describedby={describedBy} iconLeft={<svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" focusable="false"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16V4m0 0-5 5m5-5 5 5M5 20h14" /></svg>}>{buttonText}<span className="sr-only"> pre pole {title}</span></ButtonCustom>
            <p id={selectionStatusId} className="text-[16px]/[24px] text-[#757575]">{selectionStatusText}</p>
          </div>
          
          <div className="mt-3 space-y-1 text-[19px]/[28px] text-[#757575]">
            <div id={formatsId}>{formatsText}</div>
            <p id={maxSizeId}>{maxSizeText}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FileUploadDropzone;
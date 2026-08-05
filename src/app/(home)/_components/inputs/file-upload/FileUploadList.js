// file-upload/FileUploadList.jsx
import React, { useEffect, useState } from 'react';
import { cx, formatBytes, stripErrorPrefix } from './FileUploadUtils';

const UploadingIcon = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 14 17" className={className} focusable="false">
    <path d="M5 12.5925H9C9.55 12.5925 10 12.1425 10 11.5925V6.5925H11.59C12.48 6.5925 12.93 5.5125 12.3 4.8825L7.71 0.2925C7.32 -0.0975 6.69 -0.0975 6.3 0.2925L1.71 4.8825C1.08 5.5125 1.52 6.5925 2.41 6.5925H4V11.5925C4 12.1425 4.45 12.5925 5 12.5925ZM1 14.5925H13C13.55 14.5925 14 15.0425 14 15.5925C14 16.1425 13.55 16.5925 13 16.5925H1C0.45 16.5925 0 16.1425 0 15.5925C0 15.0425 0.45 14.5925 1 14.5925Z" fill="currentColor"/>
  </svg>
);

const SuccessIcon = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} focusable="false">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="m7 12 3.2 3.2L17 8.8" />
  </svg>
);

const WarningIcon = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} focusable="false">
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2 1.5 21h21L12 2z" />
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 8v6" />
    <circle cx="12" cy="17.5" r="1.2" fill="currentColor" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} focusable="false">
    <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const FileStatusIcon = ({ status }) => {
  if (status === 'error') {
    return <WarningIcon className="file-upload-status-icon w-7 h-7 text-[#C3112B] shrink-0" />;
  }
  if (status === 'uploading') {
    return <UploadingIcon className="file-upload-status-icon w-7 h-7 text-[#0B4199] shrink-0" />;
  }
  return <SuccessIcon className="file-upload-status-icon w-7 h-7 text-[#078814] shrink-0" />;
};

const ProgressBar = ({ fileName, value = 0, id }) => {
  const safeValue = Math.max(0, Math.min(100, Number(value) || 0));
  const progressLabelId = `${id}-progress-label`;

  return (
    <div className="flex w-full min-w-0 items-center gap-3">
      <span id={progressLabelId} className="sr-only">
        Priebeh nahrávania súboru {fileName}
      </span>
      <div className="flex h-[16px] min-w-0 flex-1 items-center rounded-[10px] border-2 border-[#0B4199] p-[2px]">
        <progress
          aria-labelledby={progressLabelId}
          aria-valuetext={`${safeValue} %`}
          value={safeValue}
          max="100"
          className="
            block h-full w-full overflow-hidden rounded-[8px] appearance-none
            [&::-webkit-progress-bar]:bg-transparent
            [&::-webkit-progress-value]:bg-[#0B4199]
            [&::-webkit-progress-value]:rounded-[8px]
            [&::-moz-progress-bar]:bg-[#0B4199]
            [&::-moz-progress-bar]:rounded-[8px]
          "
        >
          {safeValue} %
        </progress>
      </div>
      <span className="shrink-0 text-[16px]/[24px] text-black whitespace-nowrap">
        {safeValue} %
      </span>
    </div>
  );
};

const FileRow = ({ file, onRemove }) => {
  const isError = file.status === 'error';
  const isUploading = file.status === 'uploading';
  const isSuccess = file.status === 'success';

  const errorId = isError ? `${file.id}-error` : undefined;
  const statusId = `${file.id}-status`;
  const describedBy = [statusId, errorId].filter(Boolean).join(' ') || undefined;

  const statusText = (() => {
    if (isUploading) return `Nahrávanie súboru ${file.name} prebieha. Priebeh nahrávania je ${file.progress || 0} %.`;
    if (isError) return `Súbor ${file.name} sa nepodarilo nahrať.`;
    return `Súbor ${file.name} bol úspešne nahraný.`;
  })();

  const [announcedStatusText, setAnnouncedStatusText] = useState('');

  useEffect(() => {
    if (!file.announceStatus) {
      setAnnouncedStatusText('');
      return;
    }

    setAnnouncedStatusText('');
    const timeoutId = window.setTimeout(() => {
      setAnnouncedStatusText(statusText);
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, [file.announceStatus, statusText]);

  return (
    <li
      className={cx(
        'file-upload-file-row grid items-center gap-x-3 gap-y-2 rounded-[5px] bg-[#F5F5F5] px-4 py-4',
        'grid-cols-[40px_minmax(0,1fr)_40px] md:grid-cols-[40px_minmax(0,1fr)_minmax(160px,34%)_40px]',
        'border-[1px]', isError ? 'border-[#C3112B]' : 'border-[#BDBDBD]'
      )}
      aria-describedby={describedBy}
      aria-busy={isUploading ? 'true' : undefined}
    >
      <span 
        id={statusId} 
        className="sr-only"
        aria-live={file.announceStatus ? "polite" : undefined}
        aria-atomic={file.announceStatus ? "true" : undefined}
      >
        {file.announceStatus ? announcedStatusText : statusText}
      </span>

      <div className="col-start-1 row-start-1 flex h-10 w-10 items-center justify-center">
        <FileStatusIcon status={file.status} />
      </div>

      <p className="col-start-2 row-start-1 min-w-0 break-words text-[19px]/[28px] text-black">
        {file.name}
      </p>

      <div
        className={cx(
          'min-w-0 col-start-2 col-span-1 row-start-2',
          'md:col-start-3 md:col-span-1 md:row-start-1 md:flex md:items-center md:justify-end'
        )}
      >
        {isUploading && <ProgressBar id={file.id} fileName={file.name} value={file.progress} />}

        {isError && (
          <p id={errorId} className="min-w-0 break-words text-[16px]/[24px] text-[#C3112B] md:text-right">
            <span>Chyba: </span>
            {stripErrorPrefix(file.errorMessage || 'Nepodarilo sa nahrať súbor.')}
          </p>
        )}

        {isSuccess && (
          <span className="text-[19px]/[28px] text-black whitespace-nowrap">
            {file.sizeLabel || formatBytes(file.size)}
          </span>
        )}
      </div>

      <div className="col-start-3 row-start-1 flex h-10 w-10 items-center justify-center md:col-start-4">
        <button
          type="button"
          aria-label={`Odstrániť súbor ${file.name}`}
          onClick={() => onRemove(file.id)}
          className={cx(
            'inline-flex h-10 w-10 items-center justify-center rounded-md hover:ring-[4px] hover:ring-[#757575] active:bg-[#EFF5FE]',
            'focus:outline focus:outline-[3px] focus:outline-[#D96E00] focus:outline-offset-2',
            isError ? 'text-[#C3112B]' : 'text-[#0B4199]'
          )}
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
};

const FileStatusList = ({ files, filesTitle, filesTitleId, filesHeadingLevel, onRemove }) => {
  if (!files || files.length === 0) return null;

  const FilesHeadingTag = filesHeadingLevel;
  const hasUploadingFile = files.some((file) => file.status === 'uploading');

  return (
    <section className="mb-[20px]" aria-labelledby={filesTitleId} aria-busy={hasUploadingFile ? 'true' : undefined}>
      <FilesHeadingTag id={filesTitleId} className="mb-3 text-[20px]/[28px] font-bold text-black">
        {filesTitle}
      </FilesHeadingTag>
      <ul className="space-y-3">
        {files.map((file) => (
          <FileRow key={file.id} file={file} onRemove={onRemove} />
        ))}
      </ul>
    </section>
  );
};

export default FileStatusList;
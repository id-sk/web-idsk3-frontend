'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import ButtonCustom from '@/app/(home)/_components/button/buttonCustom';

const MAX_FILE_SIZE = 15 * 1024 * 1024;
const DEFAULT_ACCEPT = '.jpg,.jpeg,.png,.doc,.docx,.pdf';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const formatBytes = (bytes) => {
  if (!bytes && bytes !== 0) return '';

  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }

  const formattedSize =
    unitIndex === 0 ? size : size.toFixed(size >= 10 ? 0 : 1);

  return `${formattedSize} ${units[unitIndex]}`;
};

const getAcceptedExtensions = (accept) =>
  accept
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

const getFileExtension = (fileName) => {
  const parts = fileName.split('.');
  if (parts.length < 2) return '';

  return `.${parts[parts.length - 1].toLowerCase()}`;
};

const validateFile = ({ file, accept, maxSize, acceptedFormatsLabel }) => {
  const extension = getFileExtension(file.name);
  const acceptedExtensions = getAcceptedExtensions(accept);

  if (acceptedExtensions.length > 0 && !acceptedExtensions.includes(extension)) {
    return `Nepodarilo sa nahrať súbor. Nahrajte súbor vo formáte ${acceptedFormatsLabel}.`;
  }

  if (file.size > maxSize) {
    return 'Nepodarilo sa nahrať súbor. Maximálna veľkosť súboru je 15 MB.';
  }

  return null;
};

const CloudUploadIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      d="M32.25 16.7332C31.1167 10.9832 26.0667 6.6665 20 6.6665C15.1833 6.6665 11 9.39984 8.91667 13.3998C3.9 13.9332 0 18.1832 0 23.3332C0 28.8498 4.48333 33.3332 10 33.3332H31.6667C36.2667 33.3332 40 29.5998 40 24.9998C40 20.5998 36.5833 17.0332 32.25 16.7332ZM23.3333 21.6665V28.3332H16.6667V21.6665H11.6667L20 13.3332L28.3333 21.6665H23.3333Z"
      fill="currentColor"
    />
  </svg>
);

const UploadingIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 14 17"
    className={className}
    focusable="false"
  >
    <path
      d="M5 12.5925H9C9.55 12.5925 10 12.1425 10 11.5925V6.5925H11.59C12.48 6.5925 12.93 5.5125 12.3 4.8825L7.71 0.2925C7.32 -0.0975 6.69 -0.0975 6.3 0.2925L1.71 4.8825C1.08 5.5125 1.52 6.5925 2.41 6.5925H4V11.5925C4 12.1425 4.45 12.5925 5 12.5925ZM1 14.5925H13C13.55 14.5925 14 15.0425 14 15.5925C14 16.1425 13.55 16.5925 13 16.5925H1C0.45 16.5925 0 16.1425 0 15.5925C0 15.0425 0.45 14.5925 1 14.5925Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    focusable="false"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      fill="none"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7 12 3.2 3.2L17 8.8"
    />
  </svg>
);

const WarningIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    focusable="false"
  >
    <path fill="currentColor" d="M12 2 1.5 21h21L12 2z" />
    <path
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      d="M12 8v6"
    />
    <circle cx="12" cy="17.5" r="1.2" fill="white" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    focusable="false"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      d="M6 6l12 12M18 6 6 18"
    />
  </svg>
);

const FileStatusIcon = ({ status }) => {
  if (status === 'error') {
    return <WarningIcon className="w-7 h-7 text-[#C3112B] shrink-0" />;
  }

  if (status === 'uploading') {
    return <UploadingIcon className="w-7 h-7 text-[#0B4199] shrink-0" />;
  }

  return <SuccessIcon className="w-7 h-7 text-[#078814] shrink-0" />;
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
  const staticStatusId = `${file.id}-status`;
  const liveStatusId = `${file.id}-live-status`;

  const describedBy = [staticStatusId, errorId].filter(Boolean).join(' ') || undefined;

  const statusText = (() => {
    if (isUploading) {
      return `Nahrávanie súboru ${file.name} prebieha. Priebeh nahrávania je ${file.progress || 0} %.`;
    }

    if (isError) {
      return `Súbor ${file.name} sa nepodarilo nahrať.`;
    }

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

      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [file.announceStatus, statusText]);

  return (
    <li
      className={cx(
        'grid items-center gap-x-3 gap-y-2 rounded-[5px] bg-[#F5F5F5] px-4 py-4',
        'grid-cols-[40px_minmax(0,1fr)_40px]',
        'md:grid-cols-[40px_minmax(0,1fr)_minmax(160px,34%)_40px]',
        'border-[1px]',
        isError ? 'border-[#C3112B]' : 'border-[#BDBDBD]'
      )}
      aria-describedby={describedBy}
      aria-busy={isUploading ? 'true' : undefined}
    >
      <span id={staticStatusId} className="sr-only">
        {statusText}
      </span>

      {file.announceStatus && (
        <span
          id={liveStatusId}
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          {announcedStatusText}
        </span>
      )}

      {/* 1. stĺpec: ikonka */}
      <div className="col-start-1 row-start-1 flex h-10 w-10 items-center justify-center">
        <FileStatusIcon status={file.status} />
      </div>

      {/* 2. stĺpec: názov súboru */}
      <p className="col-start-2 row-start-1 min-w-0 break-words text-[19px]/[28px] text-black">
        {file.name}
      </p>

      {/* 3. stĺpec: progress / error / veľkosť */}
      <div
        className={cx(
           'min-w-0',
            // úzky layout: iba pod názvom súboru, NIE pod X
            'col-start-2 col-span-1 row-start-2',
            // desktop: samostatný pravý stĺpec pred X
            'md:col-start-3 md:col-span-1 md:row-start-1',
            'md:flex md:items-center md:justify-end'
        )}
      >
        {isUploading && (
          <ProgressBar
            id={file.id}
            fileName={file.name}
            value={file.progress}
          />
        )}

        {isError && (
          <p
            id={errorId}
            className="min-w-0 break-words text-[16px]/[24px] text-[#C3112B] md:text-right"
          >
            {file.errorMessage || 'Nepodarilo sa nahrať súbor.'}
          </p>
        )}

        {isSuccess && (
          <span className="text-[19px]/[28px] text-black whitespace-nowrap">
            {file.sizeLabel || formatBytes(file.size)}
          </span>
        )}
      </div>

      {/* 4. stĺpec: X */}
      <div className="col-start-3 row-start-1 flex h-10 w-10 items-center justify-center md:col-start-4">
        <button
          type="button"
          aria-label={`Odstrániť súbor ${file.name}`}
          onClick={() => onRemove(file.id)}
          className={cx(
            'inline-flex h-10 w-10 items-center justify-center rounded-md',
            'hover:ring-[4px] hover:ring-[#757575]',
            'active:bg-[#EFF5FE]',
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

const FileStatusList = ({
  files,
  filesTitle,
  filesTitleId,
  filesHeadingLevel,
  onRemove,
}) => {
  if (!files || files.length === 0) {
    return null;
  }

  const FilesHeadingTag = filesHeadingLevel;
  const hasUploadingFile = files.some((file) => file.status === 'uploading');

  return (
    <section
      className="mb-[20px]"
      aria-labelledby={filesTitleId}
      aria-busy={hasUploadingFile ? 'true' : undefined}
    >
      <FilesHeadingTag
        id={filesTitleId}
        className="mb-3 text-[20px]/[28px] font-bold text-black"
      >
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

const normalizeInitialFile = (file, index, idPrefix) => ({
  id: file.id || `${idPrefix}-file-${index}`,
  name: file.name,
  size: file.size || 0,
  sizeLabel: file.sizeLabel,
  status: file.status || 'success',
  progress: file.progress ?? (file.status === 'uploading' ? 35 : 100),
  errorMessage: file.errorMessage,

  // Súbor je v komponente už pri prvom rendri,
  // preto ho neoznamujeme cez aria-live.
  announceStatus: false,
});

const FileUploadCustom = ({
  id,
  title = 'Nahrajte súbor',
  hint = 'Spresnite požiadavku na nahrávaný súbor.',
  subtitle = '',
  formatsText = 'Podporované formáty: JPG, PNG, DOC, DOCX, PDF',
  acceptedFormatsLabel = 'JPG, PNG, DOC, DOCX alebo PDF',
  maxSizeText = 'Maximálna veľkosť súboru: 15 MB',
  buttonText = 'Vyberte súbory',
  filesTitle = 'Nahrané súbory',
  accept = DEFAULT_ACCEPT,
  maxSize = MAX_FILE_SIZE,
  multiple = true,
  required = false,
  disabled = false,
  initialFiles = [],
  errorMessage,
  className = '',
  headingLevel = 'h2',
  filesHeadingLevel = 'h3',
  enableDragAndDrop = true,
  regionLabel,
  onChangeFiles,
}) => {
  const reactId = useId().replace(/:/g, '');
  const inputId = id || `file-upload-${reactId}`;

  const titleId = `${inputId}-title`;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const subtitleId = `${inputId}-subtitle`;
  const formatsId = `${inputId}-formats`;
  const maxSizeId = `${inputId}-max-size`;
  const errorId = errorMessage ? `${inputId}-error` : undefined;
  const filesTitleId = `${inputId}-files-title`;

  const inputRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [liveMessage, setLiveMessage] = useState('');
  const [files, setFiles] = useState(() =>
    initialFiles.map((file, index) =>
      normalizeInitialFile(file, index, inputId)
    )
  );

  const hasFieldError = !!errorMessage;
  const hasFileError = files.some((file) => file.status === 'error');
  const hasUploadError = hasFieldError || hasFileError;

  const openFileDialog = () => {
    if (disabled) return;

    inputRef.current?.click();
  };

  const selectionStatusId = !enableDragAndDrop
  ? `${inputId}-selection-status`
  : undefined;

  const selectionStatusText = (() => {
    if (files.length === 0) {
      return 'Nie je vybraný žiadny súbor.';
    }

    if (files.length === 1) {
      return 'Vybraný je 1 súbor.';
    }

    return `Vybraných je ${files.length} súborov.`;
  })();

  const HeadingTag = headingLevel;

  const describedBy = [
    hintId,
    subtitleId,
    formatsId,
    maxSizeId,
    selectionStatusId,
  ].filter(Boolean).join(' ') || undefined;

  const createFileRows = (selectedFiles) =>
    selectedFiles.map((file, index) => {
      const validationError = validateFile({
        file,
        accept,
        maxSize,
        acceptedFormatsLabel,
      });

      return {
        id: `${inputId}-${Date.now()}-${index}`,
        name: file.name,
        size: file.size,
        status: validationError ? 'error' : 'success',
        progress: validationError ? 0 : 100,
        errorMessage: validationError,
        rawFile: file,

        // Súbor vznikol interakciou používateľa,
        // preto jeho stav môžeme oznámiť cez aria-live.
        announceStatus: true,
      };
    });

  const announceFiles = (fileRows) => {
    if (fileRows.length === 0) return;

    const firstFile = fileRows[0];

    if (firstFile.status === 'error') {
      setLiveMessage(
        `Súbor ${firstFile.name} sa nepodarilo nahrať. ${firstFile.errorMessage}`
      );
      return;
    }

    if (fileRows.length === 1) {
      setLiveMessage(`Súbor ${firstFile.name} bol úspešne nahraný.`);
      return;
    }

    setLiveMessage(`Bolo úspešne nahraných ${fileRows.length} súborov.`);
  };

  const updateFiles = (nextFiles) => {
    setFiles(nextFiles);

    const successfulFiles = nextFiles
      .filter((file) => file.status !== 'error')
      .map((file) => file.rawFile)
      .filter(Boolean);

    onChangeFiles?.(successfulFiles);
  };

  const handleSelectedFiles = (fileList) => {
    const selectedFiles = Array.from(fileList || []);
    if (selectedFiles.length === 0) return;

    const nextRows = createFileRows(selectedFiles);
    const nextFiles = multiple ? [...files, ...nextRows] : nextRows.slice(0, 1);

    updateFiles(nextFiles);
    announceFiles(nextRows);
  };

  const handleInputChange = (event) => {
    handleSelectedFiles(event.target.files);
    event.target.value = '';
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    if (disabled || !enableDragAndDrop) return;

    handleSelectedFiles(event.dataTransfer.files);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();

    if (!disabled && enableDragAndDrop) {
      setIsDragging(true);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const removeFile = (fileId) => {
    const removedFile = files.find((file) => file.id === fileId);
    const nextFiles = files.filter((file) => file.id !== fileId);

    updateFiles(nextFiles);

    if (removedFile) {
      setLiveMessage(`Súbor ${removedFile.name} bol odstránený.`);
    }
  };

  const dragHandlers = enableDragAndDrop
    ? {
        onDrop: handleDrop,
        onDragEnter: handleDragEnter,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
      }
    : {};

  return (
    <div className={cx('w-full', className)}>
      <div aria-live="assertive" aria-atomic="true" className="sr-only">
        {liveMessage}
      </div>

      <div
        role="region"
        aria-label={regionLabel || undefined}
        aria-labelledby={regionLabel ? undefined : titleId}
        aria-describedby={describedBy}
      >
        <HeadingTag
          id={titleId}
          className="mb-[10px] text-2xl font-bold leading-tight text-black"
        >
          {title}
          {required && (
            <span aria-hidden="true" className="ml-1 text-[#C3112B]">
              *
            </span>
          )}
        </HeadingTag>

        {hint && (
          <p
            id={hintId}
            className="mb-[20px] text-[19px]/[28px] text-[#757575]"
          >
            {hint}
          </p>
        )}

        <FileStatusList
          files={files}
          filesTitle={filesTitle}
          filesTitleId={filesTitleId}
          filesHeadingLevel={filesHeadingLevel}
          onRemove={removeFile}
        />

        {!enableDragAndDrop && (
            <p
              id={subtitleId}
              className="mb-[20px] text-[19px]/[28px] text-[#757575]"
            >
              {subtitle}
            </p>
          )}

        <input
          ref={inputRef}
          id={inputId}
          name={inputId}
          type="file"
          accept={accept}
          multiple={multiple}
          required={required}
          disabled={disabled}
          aria-invalid={hasUploadError ? 'true' : undefined}
          aria-errormessage={hasFieldError ? errorId : undefined}
          aria-labelledby={titleId}
          aria-describedby={describedBy}
          tabIndex={!enableDragAndDrop ? -1 : undefined}
          className="peer sr-only"
          onChange={handleInputChange}
        />

        {enableDragAndDrop ? (
          <label
            htmlFor={inputId}
            {...dragHandlers}
            className={cx(
              'group block rounded-md border-[2px] border-dashed px-[20px] py-[30px] text-center transition-all duration-150',

              disabled
                ? 'cursor-not-allowed border-[#BDBDBD] bg-[#F5F5F5] text-[#757575]'
                : hasUploadError
                  ? 'cursor-pointer border-[#C3112B] bg-white text-[#0B4199] hover:bg-[#EFF5FE] hover:ring-[4px] hover:ring-[#757575] peer-focus:bg-[#EFF5FE] peer-focus:outline peer-focus:outline-[3px] peer-focus:outline-[#D96E00] peer-focus:outline-offset-[2px]'
                  : 'cursor-pointer border-[#757575] bg-white text-[#0B4199] hover:bg-[#EFF5FE] hover:ring-[4px] hover:ring-[#757575] peer-focus:bg-[#EFF5FE] peer-focus:outline peer-focus:outline-[3px] peer-focus:outline-[#D96E00] peer-focus:outline-offset-[2px]',

              'peer-disabled:cursor-not-allowed peer-disabled:opacity-60',
              isDragging && !disabled && 'bg-[#EFF5FE] ring-[4px] ring-[#757575]'
            )}
          >
            <CloudUploadIcon
              className={cx(
                'mx-auto mb-4 h-10 w-10',
                disabled ? 'text-[#757575]' : 'text-[#0B4199]'
              )}
            />

            <p
              id={subtitleId}
              className={cx(
                'mt-2 text-[20px]/[26px] font-bold',
                disabled ? 'text-[#757575]' : 'text-[#0B4199]'
              )}
            >
              {subtitle}
            </p>

            <div
              className={cx(
                'mt-1 space-y-1 text-[19px]/[28px]',
                disabled ? 'text-[#757575]' : 'text-[#0B4199]'
              )}
            >
              <p id={formatsId}>{formatsText}</p>
              <p id={maxSizeId}>{maxSizeText}</p>
            </div>

            <span
              className={cx(
                'file-upload-pseudo-button mt-6 inline-flex items-center justify-center rounded-[5px] border-[2px] px-5 py-3 font-bold transition-colors duration-150',
                disabled
                  ? 'border-[#BDBDBD] bg-[#F5F5F5] text-[#757575]'
                  : 'border-[#0B4199] bg-white text-[#0B4199] group-hover:bg-[#0B4199] group-hover:text-white'
              )}
            >
              <svg
                aria-hidden="true"
                className="mr-2 h-5 w-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 16V4m0 0-5 5m5-5 5 5M5 20h14"
                />
              </svg>

              <span>{buttonText}</span>
              <span className="sr-only"> pre pole {title}</span>
            </span>
          </label>
        ) : (
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonCustom
                type="button"
                variant="secondary"
                status="basic"
                disabled={disabled}
                onClick={openFileDialog}
                aria-describedby={describedBy}
                iconLeft={
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    focusable="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 16V4m0 0-5 5m5-5 5 5M5 20h14"
                    />
                  </svg>
                }
              >
                {buttonText}
                <span className="sr-only"> pre pole {title}</span>
              </ButtonCustom>

              <p
                id={selectionStatusId}
                className="text-[16px]/[24px] text-[#757575]"
              >
                {selectionStatusText}
              </p>
            </div>

            <div className="mt-3 space-y-1 text-[19px]/[28px] text-[#757575]">
              <p id={formatsId}>{formatsText}</p>
              <p id={maxSizeId}>{maxSizeText}</p>
            </div>
          </div>
        )}
        {errorMessage && (
          <p
            id={errorId}
            className="mt-[10px] text-[19px]/[28px] text-[#C3112B]"
          >
            <span className="sr-only">Chyba: </span>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileUploadCustom;
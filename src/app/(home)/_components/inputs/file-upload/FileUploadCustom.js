'use client';

// file-upload/FileUploadCustom.jsx
import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import FileStatusList from './FileUploadList';
import FileUploadDropzone from './FileUploadDropzone';
import {
  DEFAULT_MAX_TOTAL_SIZE,
  DEFAULT_MAX_FILES,
  DEFAULT_ACCEPT,
  cx,
  stripErrorPrefix,
  validateFile,
  normalizeInitialFile
} from './FileUploadUtils';

const FileUploadCustom = ({
  id,
  inputRef: externalInputRef,
  title = 'Nahrajte súbor',
  hint = 'Spresnite požiadavku na nahrávaný súbor.',
  subtitle = '',
  formatsText = 'Podporované formáty: JPG, PNG, DOC, DOCX, PDF',
  acceptedFormatsLabel = 'JPG, PNG, DOC, DOCX alebo PDF',
  maxSizeText = 'Maximálna celková veľkosť všetkých súborov: 15 MB',
  buttonText = 'Vyberte súbory',
  filesTitle = 'Nahrané súbory',
  accept = DEFAULT_ACCEPT,
  maxFiles = DEFAULT_MAX_FILES,
  maxTotalSize = DEFAULT_MAX_TOTAL_SIZE,
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
  onValidationChange,
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

  const internalInputRef = useRef(null);
  const setInputRefs = useCallback((node) => {
    internalInputRef.current = node;
    if (typeof externalInputRef === 'function') externalInputRef(node);
    else if (externalInputRef) externalInputRef.current = node;
  }, [externalInputRef]);

  const [isDragging, setIsDragging] = useState(false);
  const [actionLiveMessage, setActionLiveMessage] = useState('');
  const [files, setFiles] = useState(() => initialFiles.map((file, index) => normalizeInitialFile(file, index, inputId)));

  const hasFieldError = !!errorMessage;
  const hasFileError = files.some((file) => file.status === 'error');
  const hasUploadError = hasFieldError || hasFileError;

  useEffect(() => {
    const successfulFiles = files
      .filter((file) => file.status !== 'error')
      .map((file) => file.rawFile)
      .filter(Boolean);

    onChangeFiles?.(successfulFiles);
  }, [files, onChangeFiles]);

  useEffect(() => {
    const acceptedRows = files.filter((f) => f.status !== 'error');
    const invalidRows = files.filter((f) => f.status === 'error');
    const totalSize = acceptedRows.reduce((sum, f) => sum + f.size, 0);

    const hasInvalidFiles = invalidRows.length > 0;
    const hasTooManyFiles = files.length > maxFiles;
    const isRequiredMissing = required && acceptedRows.length === 0;
    const isValid = !hasInvalidFiles && !isRequiredMissing && !hasTooManyFiles;

    let message = '';
    if (isRequiredMissing) {
      message = 'Nahrajte aspoň jednu prílohu.';
    } else if (hasTooManyFiles) {
      message = `Môžete nahrať najviac ${maxFiles} súborov.`;
    } else if (hasInvalidFiles) {
      message = 'Odstráňte súbory s chybou a nahrajte iba povolené formáty.';
    }

    onValidationChange?.({
      isValid,
      hasInvalidFiles,
      isRequiredMissing,
      hasTooManyFiles,
      totalSize,
      maxTotalSize,
      acceptedFileCount: acceptedRows.length,
      invalidFileCount: invalidRows.length,
      invalidFiles: invalidRows,
      message,
    });
  }, [files, required, maxFiles, maxTotalSize, onValidationChange]);

  const openFileDialog = () => {
    if (disabled) return;
    internalInputRef.current?.click();
  };

  const selectionStatusId = !enableDragAndDrop ? `${inputId}-selection-status` : undefined;

  const selectionStatusText = (() => {
    if (files.length === 0) return 'Nie je vybraný žiadny súbor.';
    if (files.length === 1) return 'Vybraný je 1 súbor.';
    return `Vybraných je ${files.length} súborov.`;
  })();

  const HeadingTag = headingLevel;
  const describedBy = [hintId, subtitleId, formatsId, maxSizeId, selectionStatusId].filter(Boolean).join(' ') || undefined;

  const createFileRows = (selectedFiles, currentFiles) => {
    let currentTotalSize = currentFiles.filter((f) => f.status !== 'error').reduce((sum, f) => sum + f.size, 0);

    return selectedFiles.map((file, index) => {
      const validationError = validateFile({ file, accept, maxTotalSize, currentTotalSize, acceptedFormatsLabel });
      if (!validationError) currentTotalSize += file.size;

      return {
        id: `${inputId}-${Date.now()}-${index}`,
        name: file.name,
        size: file.size,
        lastModified: file.lastModified,
        status: validationError ? 'error' : 'success',
        progress: validationError ? 0 : 100,
        errorMessage: validationError,
        rawFile: file,
        announceStatus: true,
      };
    });
  };

  const handleSelectedFiles = (fileList) => {
    const selectedFiles = Array.from(fileList || []);
    
    if (selectedFiles.length === 0) return;

    setFiles((currentFiles) => {
      const getFileFingerprint = (file) => `${file.name}:${file.size}:${file.lastModified ?? ''}`;
      const existingFingerprints = new Set(currentFiles.map(getFileFingerprint));

      const newUniqueFiles = selectedFiles.filter((file) => {
        const fingerprint = getFileFingerprint(file);
        if (existingFingerprints.has(fingerprint)) return false;
        existingFingerprints.add(fingerprint);
        return true;
      });

      if (newUniqueFiles.length === 0) return currentFiles;

      const acceptedFileCount = currentFiles.filter((file) => file.status !== 'error').length;
      const availableSlots = multiple ? Math.max(0, maxFiles - acceptedFileCount) : 1;
      
      const acceptedSelection = newUniqueFiles.slice(0, availableSlots);
      const rejectedSelection = newUniqueFiles.slice(availableSlots);

      const acceptedRows = createFileRows(acceptedSelection, currentFiles);
      
      const rejectedRows = rejectedSelection.map((file, index) => ({
        id: `${inputId}-${Date.now()}-limit-${index}`,
        name: file.name,
        size: file.size,
        lastModified: file.lastModified,
        status: 'error',
        progress: 0,
        errorMessage: `Môžete nahrať najviac ${maxFiles} súborov.`,
        rawFile: file,
        announceStatus: true,
      }));

      const nextRows = [...acceptedRows, ...rejectedRows];
      return multiple ? [...currentFiles, ...nextRows] : nextRows.slice(0, 1);
    });
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
    if (!disabled && enableDragAndDrop) setIsDragging(true);
  };

  const handleDragOver = (event) => event.preventDefault();

  const handleDragLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsDragging(false);
  };

  const removeFile = (fileId) => {
    let removedFile = null;
    setFiles((currentFiles) => {
      removedFile = currentFiles.find((file) => file.id === fileId);
      return currentFiles.filter((file) => file.id !== fileId);
    });

    if (removedFile) setActionLiveMessage(`Súbor ${removedFile.name} bol odstránený.`);
  };

  const dragHandlers = enableDragAndDrop
    ? { onDrop: handleDrop, onDragEnter: handleDragEnter, onDragOver: handleDragOver, onDragLeave: handleDragLeave }
    : {};

  return (
    <div className={cx('w-full', className)}>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {actionLiveMessage}
      </div>

      <div role="region" aria-label={regionLabel || undefined} aria-labelledby={regionLabel ? undefined : titleId} aria-describedby={describedBy}>
        <HeadingTag id={titleId} className="mb-[10px] text-2xl font-bold leading-tight text-black">
          {title}{required && <span aria-hidden="true" className="ml-1 text-[#C3112B]">*</span>}
        </HeadingTag>

        {hint && <p id={hintId} className="mb-[20px] text-[19px]/[28px] text-[#757575]">{hint}</p>}

        <FileStatusList 
          files={files} 
          filesTitle={filesTitle} 
          filesTitleId={filesTitleId} 
          filesHeadingLevel={filesHeadingLevel} 
          onRemove={removeFile} 
        />

        <FileUploadDropzone 
          inputId={inputId}
          accept={accept}
          multiple={multiple}
          required={required}
          disabled={disabled}
          hasUploadError={hasUploadError}
          hasFieldError={hasFieldError}
          errorId={errorId}
          title={title}
          titleId={titleId}
          describedBy={describedBy}
          enableDragAndDrop={enableDragAndDrop}
          isDragging={isDragging}
          dragHandlers={dragHandlers}
          formatsText={formatsText}
          formatsId={formatsId}
          maxSizeText={maxSizeText}
          maxSizeId={maxSizeId}
          subtitle={subtitle}
          subtitleId={subtitleId}
          buttonText={buttonText}
          selectionStatusId={selectionStatusId}
          selectionStatusText={selectionStatusText}
          inputRef={setInputRefs}
          onInputChange={handleInputChange}
          onOpenDialog={openFileDialog}
        />
        
        {errorMessage && (
          <p id={errorId} className="mt-[10px] text-[19px]/[28px] text-[#C3112B]">
            <span>Chyba: </span>{stripErrorPrefix(errorMessage)}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileUploadCustom;
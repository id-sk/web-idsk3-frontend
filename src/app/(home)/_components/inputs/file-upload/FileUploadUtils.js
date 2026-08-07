// file-upload/FileUploadUtils.js

export const DEFAULT_MAX_TOTAL_SIZE = 15 * 1024 * 1024;
export const DEFAULT_MAX_FILES = 5;
export const DEFAULT_ACCEPT = '.jpg,.jpeg,.png,.doc,.docx,.pdf';

export const cx = (...classes) => classes.filter(Boolean).join(' ');

export const stripErrorPrefix = (message) => {
  if (typeof message !== 'string') return message;
  return message.replace(/^\s*Chyba:\s*/i, '').trim();
};

export const formatBytes = (bytes) => {
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

export const getAcceptedExtensions = (accept) =>
  accept
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

export const getFileExtension = (fileName) => {
  const parts = fileName.split('.');
  if (parts.length < 2) return '';

  return `.${parts[parts.length - 1].toLowerCase()}`;
};

export const validateFile = ({ file, accept, maxTotalSize, currentTotalSize, acceptedFormatsLabel }) => {
  const extension = getFileExtension(file.name);
  const acceptedExtensions = getAcceptedExtensions(accept);

  if (acceptedExtensions.length > 0 && !acceptedExtensions.includes(extension)) {
    return `Nepodarilo sa nahrať súbor. Nahrajte súbor vo formáte ${acceptedFormatsLabel}.`;
  }

  if (maxTotalSize && currentTotalSize + file.size > maxTotalSize) {
    return `Nepodarilo sa nahrať súbor. Prekročená maximálna celková veľkosť všetkých súborov (${formatBytes(maxTotalSize)}).`;
  }

  return null;
};

export const normalizeInitialFile = (file, index, idPrefix) => ({
  id: file.id || `${idPrefix}-file-${index}`,
  name: file.name,
  size: file.size || 0,
  sizeLabel: file.sizeLabel,
  lastModified: file.lastModified,
  status: file.status || 'success',
  progress: file.progress ?? (file.status === 'uploading' ? 35 : 100),
  errorMessage: file.errorMessage,
  rawFile: file.rawFile || file,
  announceStatus: false,
});
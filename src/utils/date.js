export const parseSkDate = (input) => {
  if (input instanceof Date) return input;
  if (typeof input !== 'string') return null;

  const parts = input.split('.').map(Number);
  if (parts.length === 3 && parts.every(Number.isFinite)) {
    const [d, m, y] = parts;
    return new Date(Date.UTC(y, m - 1, d, 12)); 
  }
  return new Date(input); 
};
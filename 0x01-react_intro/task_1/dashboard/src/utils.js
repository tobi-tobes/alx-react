export function getFullYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

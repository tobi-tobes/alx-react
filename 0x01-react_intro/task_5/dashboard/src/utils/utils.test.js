import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('should return the current year', () => {
    const currentYear = getFullYear();
    expect(currentYear).toBe(new Date().getFullYear());
  });
});

describe('getFooterCopy', () => {
  it('should return "Holberton School" if isIndex is True', () => {
    const footerCopy = getFooterCopy(true);
    expect(footerCopy).toBe('Holberton School');
  });
  it('should return "Holberton School main dashboard" if isIndex is False', () => {
    const footerCopy = getFooterCopy(false);
    expect(footerCopy).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('should return "<strong>Urgent requirement</strong> - complete by EOD"', () => {
    const returnString = getLatestNotification();
    expect(returnString).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  return (
    <p>Copyright { currentYear } - { footerCopy }</p>
  );
}

export default Footer;

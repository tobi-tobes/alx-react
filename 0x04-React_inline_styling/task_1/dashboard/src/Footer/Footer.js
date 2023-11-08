import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

function Footer() {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  return (
    <div className='App-footer'>
      <p>Copyright { currentYear } - { footerCopy }</p>
    </div>
  );
}

export default Footer;

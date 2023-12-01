import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import {AppContext} from '../App/AppContext';

function Footer() {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  return (
    <AppContext.Consumer>
      {({ user, logOut}) => (
        <div>
          {user.isLoggedIn && <a href='#' style={{marginTop: '2rem', textDecoration: 'none'}}>Contact us</a>}
          <p>Copyright { currentYear } - { footerCopy }</p>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;

import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import PropTypes from 'prop-types';

function Footer() {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  return (
    <div>
      {user && <a href='#' style={{marginTop: '2rem', textDecoration: 'none'}}>Contact us</a>}
      <p>Copyright { currentYear } - { footerCopy }</p>
    </div>
  );
};

Footer.propTypes = {
  user: PropTypes.object
}

Footer.defaultProps = {
  user: {}
}

export const mapStateToProps = (state) => {
  return {
    user: state.get('user')
  };
};

const ConnectedFooter = connect(mapStateToProps)(Footer);

export default ConnectedFooter;

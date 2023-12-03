import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Footer(props) {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  const user = props.user;

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
  user: null
}

export const mapStateToProps = (state) => {
  return {
    user: state.get('user')
  };
};

const ConnectedFooter = connect(mapStateToProps)(Footer);

export { ConnectedFooter, Footer };

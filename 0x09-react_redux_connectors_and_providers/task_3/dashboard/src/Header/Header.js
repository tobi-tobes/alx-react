import React from 'react';
import logoImage from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  static styles = StyleSheet.create({
    'App-header': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottom: '2px solid #d93654',
      color: '#d93654'
    },
    'App-logo': {
      backgroundImage: `url('${logoImage}')`,
      width: '200px',
      height: '200px',
      backgroundSize: '200px 200px'
    },
    logoutSection: {
      marginLeft: '2rem',
      color: '#d93654'
    },
    logOutLink: {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  });

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  };

  static defaultProps = {
    user: null,
    logout: () => {}
  };  

  render() {
    return (
      <div>
        <div className={css(Header.styles['App-header'])}>
          <div className={css(Header.styles['App-logo'])}>
            <img src='' alt=''/>
          </div>
          <h1>School dashboard</h1>
        </div>
        {this.props.user && 
          <section id='logoutSection' className={css(Header.styles.logoutSection)}>
            <p>Welcome {this.props.user.email} (<em onClick={this.props.logout} className={css(Header.styles.logOutLink)}>logout</em>)</p>
          </section>
        }
      </div>
    );
  };
}

export const mapStateToProps = (state) => {
  return {
    user: state.get('user')
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { dispatch(logout()); },
  }
}

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export { ConnectedHeader, Header };

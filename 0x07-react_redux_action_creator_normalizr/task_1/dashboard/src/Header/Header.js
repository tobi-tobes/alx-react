import React from 'react';
import logoImage from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite';
import {AppContext} from '../App/AppContext';

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

  static contextType = AppContext;

  render() {
    const {user, logOut} = this.context;

    return (
      <div>
        <div className={css(Header.styles['App-header'])}>
          <div className={css(Header.styles['App-logo'])}>
            <img src='' alt=''/>
          </div>
          <h1>School dashboard</h1>
        </div>
        {user.isLoggedIn && 
            <section id='logoutSection' className={css(Header.styles.logoutSection)}>
              <p>Welcome {user.email} (<em onClick={logOut} className={css(Header.styles.logOutLink)}>logout</em>)</p>
            </section>
        }
      </div>
    );
  };
}

export default Header;

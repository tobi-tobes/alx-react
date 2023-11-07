import React from 'react';
import logoImage from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite';

function Header() {
  const styles = StyleSheet.create({
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
    }
  });
  return (
    <div className={css(styles['App-header'])}>
        <div className={css(styles['App-logo'])}>
          <img src='' alt=''/>
        </div>
        <h1>School dashboard</h1>
    </div>
  );
}

export default Header;

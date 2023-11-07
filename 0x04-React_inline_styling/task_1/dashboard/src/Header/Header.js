import React from 'react';
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
      width: '200px',
      height: '200px'
    },
    img: {
      width: "200px",
      height: '200px'
    }
  });
  return (
    <div className={css(styles['App-header'])}>
        <div className={css(styles['App-logo'])}>
          <img src='../assets/holberton-logo.jpg' alt='' className={css(styles.img)}/>
        </div>
        <h1>School dashboard</h1>
    </div>
  );
}

export default Header;

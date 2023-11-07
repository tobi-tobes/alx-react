import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  static styles = StyleSheet.create({
    login: {
      marginLeft: '2rem'
    },
    'password-label': {
      marginLeft: '1rem'
    },
    input: {
      marginLeft: '1rem'
    },
    'ok-button': {
      marginLeft: '1rem'
    }
  });
  render() {
    return (
      <React.Fragment>
          <form className={css(Login.styles.login)}>
              <p>Login to access the full dashboard</p>
              <label htmlFor='email' className='email-label'>Email:</label>
              <input type='text' name='email' id='email' autoComplete='off' className={css(Login.styles.input)}></input>
              <label htmlFor='password' className={css(Login.styles['password-label'])}>Password:</label>
              <input type='text' name='password' id='password' autoComplete='off' className={css(Login.styles.input)}></input>
              <button className={css(Login.styles['ok-button'])}>OK</button>
          </form>
      </React.Fragment>
    );
  }
}

export default Login;

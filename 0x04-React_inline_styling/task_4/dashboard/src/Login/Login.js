import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  static styles = StyleSheet.create({
    login: {
      marginLeft: '2rem'
    },
    loginContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    'password-label': {
      marginLeft: '1rem'
    },
    input: {
      marginLeft: '1rem'
    },
    'ok-button': {
      marginLeft: '1rem'
    },
    smallScreenDisplay: {
      '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    smallScreenEmailLabel: {
      '@media (max-width: 900px)': {
        marginLeft: '1rem'
      }
    },
    smallScreenInput: {
      '@media (max-width: 900px)': {
        width: '10rem'
      }
    },
    smallScreenButton: {
      '@media (max-width: 900px)': {
        width: '2.3rem',
        textAlign: 'center'
      }
    },
    smallScreenP: {
      '@media (max-width: 900px)': {
        marginLeft: '1rem'
      }
    },
    smallScreenLoginContainer: {
      '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column'
      }
    }
  });
  render() {
    return (
      <React.Fragment>
          <form className={css(Login.styles.login, Login.styles.smallScreenDisplay)}>
              <p className={css(Login.styles.smallScreenP)}>Login to access the full dashboard</p>
              <div className={css(Login.styles.loginContainer, Login.styles.smallScreenLoginContainer)}>
                <div>
                  <label htmlFor='email' className={css(Login.styles.smallScreenEmailLabel)}>Email:</label>
                  <input type='text' name='email' id='email' autoComplete='off' className={css(Login.styles.input, Login.styles.smallScreenInput)}></input>
                </div>
                <div>
                  <label htmlFor='password' className={css(Login.styles['password-label'])}>Password:</label>
                  <input type='text' name='password' id='password' autoComplete='off' className={css(Login.styles.input, Login.styles.smallScreenInput)}></input>
                </div>
                <button className={css(Login.styles['ok-button'], Login.styles.smallScreenButton)}>OK</button>
              </div>
          </form>
      </React.Fragment>
    );
  }
}

export default Login;

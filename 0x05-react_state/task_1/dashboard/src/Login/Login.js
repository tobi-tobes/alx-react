import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(e) {
    this.setState({email: e.target.value});
    this.setState({enableSubmit: this.state.email !== '' && this.state.password !== ''});
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value});
    this.setState({enableSubmit: this.state.email !== '' && this.state.password !== ''});
  }

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
        width: '4rem',
        textAlign: 'center'
      }
    },
    smallScreenP: {
      '@media (max-width: 900px)': {
        marginLeft: '2rem'
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
        <p style={{marginLeft: '2rem'}} className={css(Login.styles.smallScreenP)}>Login to access the full dashboard</p>
        <form className={css(Login.styles.login, Login.styles.smallScreenDisplay)} onSubmit={this.handleLoginSubmit}>
            <div className={css(Login.styles.loginContainer, Login.styles.smallScreenLoginContainer)}>
              <div>
                <label htmlFor='email' className={css(Login.styles.smallScreenEmailLabel)}>Email:</label>
                <input type='text' name='email' id='email' autoComplete='off' className={css(Login.styles.input, Login.styles.smallScreenInput)} value={this.state.email} onChange={this.handleChangeEmail}></input>
              </div>
              <div>
                <label htmlFor='password' className={css(Login.styles['password-label'])}>Password:</label>
                <input type='text' name='password' id='password' autoComplete='off' className={css(Login.styles.input, Login.styles.smallScreenInput)} value={this.state.password} onChange={this.handleChangePassword}></input>
              </div>
              <input type='submit' name='ok-button' className={css(Login.styles['ok-button'], Login.styles.smallScreenButton)} disabled={!this.state.enableSubmit}></input>
            </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;

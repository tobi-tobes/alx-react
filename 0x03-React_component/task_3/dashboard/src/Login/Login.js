import React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
        <form className='login'>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email' className='email-label'>Email:</label>
            <input type='text' name='email' id='email' autoComplete='off'></input>
            <label htmlFor='password' className='password-label'>Password:</label>
            <input type='text' name='password' id='password' autoComplete='off'></input>
            <button className='ok-button'>OK</button>
        </form>
    </React.Fragment>
  );
}

export default Login;

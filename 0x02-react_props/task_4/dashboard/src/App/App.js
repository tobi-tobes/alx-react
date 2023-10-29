import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import PropTypes from 'prop-types'

function App(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <React.Fragment>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;

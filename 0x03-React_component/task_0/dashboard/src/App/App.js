import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types'

const listCourses = [{id: 1, name: 'ES6', credit: 60}, {id: 2, name: 'Webpack', credit: 20}, {id: 3, name: 'React', credit: 40}];
const listNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}];

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='root-notifications'>
          <Notifications listNotifications={listNotifications}/>
        </div>
        <div className="App">
          <Header />
          <div className="App-body">
            {this.props.isLoggedIn? <CourseList listCourses={listCourses}/> : <Login />}
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;

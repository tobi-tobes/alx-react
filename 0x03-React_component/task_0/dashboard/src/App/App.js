import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types'

class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  };
  
  static defaultProps = {
    isLoggedIn: false,
  }

  static listCourses = [{id: 1, name: 'ES6', credit: 60}, {id: 2, name: 'Webpack', credit: 20}, {id: 3, name: 'React', credit: 40}];
  static listNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}];


  render() {
    return (
      <React.Fragment>
        <div className='root-notifications'>
          <Notifications listNotifications={App.listNotifications}/>
        </div>
        <div className="App">
          <Header />
          <div className="App-body">
            {this.props.isLoggedIn? <CourseList listCourses={App.listCourses}/> : <Login />}
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

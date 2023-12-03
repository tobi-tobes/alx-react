import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { ConnectedHeader as Header } from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import { ConnectedFooter as Footer } from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

const listCourses = [{id: 1, name: 'ES6', credit: 60}, {id: 2, name: 'Webpack', credit: 20}, {id: 3, name: 'React', credit: 40}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}]
    };
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  markNotificationAsRead(id) {
    this.setState(prevState => {
      const updatedNotifications = prevState.listNotifications.filter(obj => obj.id !== id);
      return { listNotifications: updatedNotifications };
    });
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    login: PropTypes.func,
    isLoggedIn: PropTypes.bool
  }

  static defaultProps = {
    displayDrawer: false,
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    login: () => {},
    isLoggedIn: false
  }

  static appStyles = StyleSheet.create({
    App: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    'App-body': {
      marginTop: '2rem',
      height: '25rem'
    },
    'App-footer': {
      textAlign: 'center',
      fontStyle: 'italic',
      borderTop: '2px solid #d93654',
      height: '4rem',
      alignSelf: 'flex-end',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className='root-notifications'>
          <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.props.displayDrawer}
          handleDisplayDrawer={this.props.handleDisplayDrawer}
          handleHideDrawer={this.props.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}/>
        </div>
        <div className={css(App.appStyles.App)}>
          <Header />
          <div className={css(App.appStyles['App-body'])}>
            <BodySectionWithMarginBottom title={this.props.isLoggedIn? 'Course list' : 'Log in to continue'}>
              {this.props.isLoggedIn? <CourseList listCourses={listCourses}/> : <Login logIn={this.props.login} />}
            </BodySectionWithMarginBottom>
            <BodySection title='News from the School'>
              <p style={{marginLeft: '2rem', marginRight: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor odio viverra neque aliquet accumsan. Phasellus faucibus a magna sit amet ullamcorper. Praesent sodales vulputate eros eget dapibus. Fusce sit amet sem leo. </p>
            </BodySection>
          </div>
          <div className={css(App.appStyles['App-footer'])}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'), // state attribute from uiReducer
    displayDrawer: state.get('isNotificationDrawerVisible')
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleDisplayDrawer: () => { dispatch(displayNotificationDrawer()); },
    handleHideDrawer: () => { dispatch(hideNotificationDrawer()); },
    login: (email, password) => { dispatch(loginRequest(email, password)); }
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { App, ConnectedApp };

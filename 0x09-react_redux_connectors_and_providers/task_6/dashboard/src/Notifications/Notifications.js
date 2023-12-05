import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './NotificationItem';
import CloseIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderCount = 0;
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.array,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    fetchNotifications: PropTypes.func,
  };
  
  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
    fetchNotifications: () => {}
  };

  static styles = {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    position: 'absolute',
    top: '13px',
    right: '10px',
  }

  static notificationsPanelStyle = StyleSheet.create({
    Notifications: {
      border: '2px dashed #d93654',
      padding: '1rem',
      position: 'absolute',
      width: '25rem',
      right: '2rem',
      backgroundColor: 'white',
      height: '20rem',
      overflowY: 'auto'
    },
    menuItem: {
      textAlign: 'right',
      marginRight: '2rem',
      float: 'right',
      backgroundColor: '#fff8f8',
      cursor: 'pointer',
      transition: 'opacity 0.3s ease-in-out',
      ":hover": {
        animationName: [Notifications.bounceKeyframes, Notifications.opacityKeyframes],
        animationDuration: '0.5s',
        animationIterationCount: '3',
        opacity: 0.5
      }
    },
    smallScreenDisplay: {
      '@media (max-width: 900px)': {
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        fontSize: '20px',
        padding: 0,
        border: 'none',
        overflow: 'auto',
        position: 'fixed',
        margin: 0,
        zIndex: 999
      }
    },
    smallScreenPanelContainer: {
      '@media (max-width: 900px)': {
        padding: 0,
      }
    },
    smallScreenUl: {
      '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 0
      }
    },
    dontDisplayMenuItem: {
      display: 'none'
    }
  });

  static opacityKeyframes = {
    '0%': {
      opacity: 0.5
    },
    '100%': {
      opacity: 1
    }
  };

  static bounceKeyframes = {
    '0%': {
      transform: 'translateY(0px)'
    },
    '50%': {
      transform: 'translateY(5px)'
    },
    '100%': {
      transform: 'translateY(0px)'
    }
  }

  static close = () => {
    console.log('Close button has been clicked');
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;
    this.renderCount += 1;

    if (listNotifications.length === 0) {
      return (
        <div className={css(Notifications.notificationsPanelStyle.smallScreenPanelContainer)}>
          <div className={css(displayDrawer ? Notifications.notificationsPanelStyle.dontDisplayMenuItem : Notifications.notificationsPanelStyle.menuItem)} id='menuItem' onClick={handleDisplayDrawer}>
            <p>Your notifications</p>
          </div>
          {displayDrawer && 
            <div className={css(Notifications.notificationsPanelStyle.Notifications, Notifications.notificationsPanelStyle.smallScreenDisplay)} id='Notifications'>
              <button aria-label='Close' onClick={() => {Notifications.close(); handleHideDrawer();}} style={Notifications.styles}>
                <img src={CloseIcon} alt='' style={{width: '15px', height: '15px',}}/>
              </button>
              <p>No new notification for now</p>
            </div>
          }
        </div>
      );
    }
  
    return (
      <div className={css(Notifications.notificationsPanelStyle.smallScreenPanelContainer)}>
        <div className={css(displayDrawer ? Notifications.notificationsPanelStyle.dontDisplayMenuItem : Notifications.notificationsPanelStyle.menuItem)} id='menuItem' onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && 
          <div className={css(Notifications.notificationsPanelStyle.Notifications, Notifications.notificationsPanelStyle.smallScreenDisplay)} id='Notifications'>
            <p>Here is the list of notifications</p>
            <button aria-label='Close' onClick={() => {Notifications.close(); handleHideDrawer();}} style={Notifications.styles}>
              <img src={CloseIcon} alt='' style={{width: '15px', height: '15px',}}/>
            </button>
            <ul className={css(Notifications.notificationsPanelStyle.smallScreenUl)}>
              {listNotifications.map((notification) => (
                <NotificationItem 
                  key={notification.guid} 
                  type={notification.type} 
                  value={notification.hasOwnProperty('value') ? notification.value : undefined}
                  html={notification.hasOwnProperty('html') ? notification.html : undefined}
                  markAsRead={() => this.props.markNotificationAsRead(notification.guid)}
                />
              ))}
            </ul>
          </div>
        }
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotifications(state),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => { dispatch(fetchNotifications()); },
    markNotificationAsRead: (index) => { dispatch(markAsRead(index)); }
  }
}

const connectedNotifications = connect(mapStateToProps, mapDispatchToProps)(Notifications);

export { Notifications, connectedNotifications };

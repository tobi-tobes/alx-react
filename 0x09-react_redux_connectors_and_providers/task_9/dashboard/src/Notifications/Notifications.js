import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './NotificationItem';
import CloseIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications(props) {
  const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, setNotificationFilter, markNotificationAsRead } = props;

  if (listNotifications.length === 0) {
    return (
      <div className={css(Notifications.notificationsPanelStyle.smallScreenPanelContainer)}>
        <div className={css(displayDrawer ? Notifications.notificationsPanelStyle.dontDisplayMenuItem : Notifications.notificationsPanelStyle.menuItem)} id='menuItem' onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && 
          <div className={css(Notifications.notificationsPanelStyle.Notifications, Notifications.notificationsPanelStyle.smallScreenDisplay)} id='Notifications'>
            <button aria-label='Close' onClick={() => { close(); handleHideDrawer();}} style={Notifications.styles}>
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
          <button aria-label='Close' onClick={() => { close(); handleHideDrawer();}} style={Notifications.styles}>
            <img src={CloseIcon} alt='' style={{width: '15px', height: '15px',}}/>
          </button>
          <button onClick={() => {setNotificationFilter('URGENT');}} className='urgent'>
            ‼️
          </button>
          <button onClick={() => {setNotificationFilter('DEFAULT');}} className='default'>
            💠
          </button>
          <ul className={css(Notifications.notificationsPanelStyle.smallScreenUl)}>
            {listNotifications.map((notification) => (
              <NotificationItem 
                key={notification.guid} 
                type={notification.type} 
                value={notification.hasOwnProperty('value') ? notification.value : undefined}
                html={notification.hasOwnProperty('html') ? notification.html : undefined}
                markAsRead={() => markNotificationAsRead(notification.guid)}
              />
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  setNotificationFilter: () => {}
};

Notifications.styles = {
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  position: 'absolute',
  top: '13px',
  right: '10px',
};

Notifications.notificationsPanelStyle = StyleSheet.create({
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
      animationName: [bounceKeyframes, opacityKeyframes],
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

const opacityKeyframes = {
  '0%': {
    opacity: 0.5
  },
  '100%': {
    opacity: 1
  }
};

const bounceKeyframes = {
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

const close = () => {
  console.log('Close button has been clicked');
}

export default Notifications;

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './NotificationItem';
import CloseIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.markAsRead = this.markAsRead.bind(this);
    this.renderCount = 0;
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  };
  
  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  }

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
      right: '2rem'
    },
    menuItem: {
      textAlign: 'right',
      marginRight: '2rem'
    },
    smallScreenDisplay: {
      '@media (max-width: 900px)': {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        fontSize: '20px',
        padding: 0,
        border: 'none',
        overflow: 'inherit',
        position: 'fixed',
        margin: 0
      }
    },
    smallScreenPanelContainer: {
      '@media (max-width: 900px)': {
        padding: 0
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
    }
  });

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  static close = () => {
    console.log('Close button has been clicked');
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    this.renderCount += 1;

    if (listNotifications.length === 0) {
      return (
        <div className={css(Notifications.notificationsPanelStyle.smallScreenPanelContainer)}>
          <div className={css(Notifications.notificationsPanelStyle.menuItem)} id='menuItem'>
            <p>Your notifications</p>
          </div>
          {displayDrawer && 
            <div className={css(Notifications.notificationsPanelStyle.Notifications, Notifications.notificationsPanelStyle.smallScreenDisplay)} id='Notifications'>
              <button aria-label='Close' onClick={Notifications.close} style={Notifications.styles}>
                <img src={CloseIcon} alt='' style={{width: '15px', height: '15px',}} />
              </button>
              <p>No new notification for now</p>
            </div>
          }
        </div>
      );
    }
  
    return (
      <div className={css(Notifications.notificationsPanelStyle.smallScreenPanelContainer)}>
        <div className={css(Notifications.notificationsPanelStyle.menuItem)} id='menuItem'>
          <p>Your notifications</p>
        </div>
        {displayDrawer && 
          <div className={css(Notifications.notificationsPanelStyle.Notifications, Notifications.notificationsPanelStyle.smallScreenDisplay)} id='Notifications'>
            <p>Here is the list of notifications</p>
            <button aria-label='Close' onClick={Notifications.close} style={Notifications.styles}>
              <img src={CloseIcon} alt='' style={{width: '15px', height: '15px',}} />
            </button>
            <ul className={css(Notifications.notificationsPanelStyle.smallScreenUl)}>
              {listNotifications.map((notification) => (
                <NotificationItem 
                key={notification.id} 
                type={notification.type} 
                value={notification.hasOwnProperty('value') ? notification.value : undefined}
                html={notification.hasOwnProperty('html') ? notification.html : undefined}
                markAsRead={() => this.markAsRead(notification.id)}
                />
              ))}
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default Notifications;

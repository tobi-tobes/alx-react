import React from 'react';
import './Notifications.css';
import './NotificationItem';
import CloseIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

function Notifications(props) {
  const displayDrawer = props.displayDrawer;
  const listNotifications = props.listNotifications;

  const styles = {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    position: 'absolute',
    top: '13px',
    right: '10px',
  }

  const close = () => {
    console.log('Close button has been clicked');
  }

  if (listNotifications.length === 0) {
    return (
      <div>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
        {displayDrawer && 
          <div className='Notifications'>
            <button aria-label='Close' onClick={close} style={styles}>
              <img src={CloseIcon} alt='' style={{width: '15px', height: '15px',}} />
            </button>
            <p>No new notification for now</p>
          </div>
        }
      </div>
    );
  }

  return (
    <div>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      {displayDrawer && 
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <button aria-label='Close' onClick={close} style={styles}>
            <img src={CloseIcon} alt='' style={{width: '15px', height: '15px',}} />
          </button>
          <ul>
            {listNotifications.map((notification) => (
              <NotificationItem 
              key={notification.id} 
              type={notification.type} 
              value={notification.hasOwnProperty('value') ? notification.value : undefined}
              html={notification.hasOwnProperty('html') ? notification.html : undefined}
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;

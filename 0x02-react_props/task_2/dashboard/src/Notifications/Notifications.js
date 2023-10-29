import React from 'react';
import './Notifications.css';
import './NotificationItem';
import CloseIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {
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

  const latestNotification = getLatestNotification();

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <button aria-label='Close' onClick={close} style={styles}>
        <img src={CloseIcon} alt='' style={{width: '15px', height: '15px',}} />
      </button>
      <ul>
        <NotificationItem type='default' value='New course available'/>
        <NotificationItem type='urgent' value='New resume available'/>
        <NotificationItem type='urgent' html={{ __html: latestNotification }}/>
      </ul>
    </div>
  );
}

import React from 'react';
import './Notifications.css';
import CloseIcon from './close-icon.png';
import { getLatestNotification } from './utils';

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
        <li data-urgency='default'>New course available</li>
        <li data-urgency='urgent'>New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: latestNotification }} data-urgency='urgent' />
      </ul>
    </div>
  );
}

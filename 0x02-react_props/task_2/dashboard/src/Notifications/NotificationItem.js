import React from 'react';

function NotificationItem(props) {
  const type = props.type;
  const html = props.html;
  const value = props.value;

  return (
    <li data-notification-type={ type } dangerouslySetInnerHTML={ html}>
        { value }
    </li>
  );
}

export default NotificationItem;

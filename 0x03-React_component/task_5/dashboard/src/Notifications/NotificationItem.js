import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(function NotificationItem(props) {
  const type = props.type;
  const html = props.html;
  const value = props.value;
  const id = props.id;
  const markAsRead = props.markAsRead

  return (
    <li data-notification-type={ type } dangerouslySetInnerHTML={ html } onClick={() => markAsRead(id)}>
        { value }
    </li>
  );
})

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
}

export default NotificationItem;

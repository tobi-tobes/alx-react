import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(function NotificationItem(props) {
  const type = props.type;
  const html = props.html;
  const value = props.value;
  const id = props.id;
  const markAsRead = props.markAsRead

  const styles = StyleSheet.create({
    urgent: {
      color: 'red'
    },
    default: {
      color: 'blue'
    }
  });

  const className = css(
    type === 'default' ? styles.default : styles.urgent
  );

  return (
    <li data-notification-type={ type } dangerouslySetInnerHTML={ html } onClick={() => markAsRead(id)} className={className}>
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

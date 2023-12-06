import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(function NotificationItem(props) {
  const type = props.type;
  const html = props.html;
  const value = props.value;
  const guid = props.guid;
  const markAsRead = props.markAsRead

  const styles = StyleSheet.create({
    urgent: {
      color: 'red'
    },
    default: {
      color: 'blue'
    },
    smallScreenList: {
      '@media (max-width: 900px)': {
        width: '100%',
        listStyleType: 'none',
        fontSize: '20px',
        borderBottom: '2px solid black',
        padding: '10px 8px',
        margin: 0
      }
    }
  });

  const className = css(
    type === 'default' ? styles.default : styles.urgent, styles.smallScreenList
  );

  return (
    <li data-notification-type={ type } dangerouslySetInnerHTML={ html } onClick={() => markAsRead(guid)} className={className}>
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
  guid: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
}

export default NotificationItem;

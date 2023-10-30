import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  const type = props.type;
  const html = props.html;
  const value = props.value;

  return (
    <li data-notification-type={ type } dangerouslySetInnerHTML={ html }>
        { value }
    </li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
}

export default NotificationItem;

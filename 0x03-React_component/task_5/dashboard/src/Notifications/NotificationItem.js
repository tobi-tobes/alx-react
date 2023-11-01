import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  static propTypes = {
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    id: PropTypes.number,
    markAsRead: PropTypes.func.isRequired,
  };
  
  static defaultProps = {
    type: 'default',
  }

  render() {
    return (
      <li data-notification-type={ this.props.type } dangerouslySetInnerHTML={ this.props.html } onClick={() => this.props.markAsRead(this.props.id)}>
          { this.props.value }
      </li>
    );
  }
}

export default NotificationItem;

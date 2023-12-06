import React from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import PropTypes from 'prop-types';

class NotificationsContainer extends React.Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.array,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    fetchNotifications: PropTypes.func,
    setNotificationFilter: PropTypes.func
  };
  
  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
    fetchNotifications: () => {},
    setNotificationFilter: () => {}
  };

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <Notifications {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => { dispatch(fetchNotifications()); },
    markNotificationAsRead: (index) => { dispatch(markAsRead(index)); },
    setNotificationFilter: (filter) => { dispatch(setNotificationFilter(filter)); }
  };
};

const connectedNotificationsContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);

export {connectedNotificationsContainer, NotificationsContainer}

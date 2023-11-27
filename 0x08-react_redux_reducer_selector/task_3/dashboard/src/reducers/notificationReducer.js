import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const initialState = {
  filter: '',
  notifications: []
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const notificationsList = action.data.map((notification) => ({...notification, isRead: false}));
      return { filter: 'DEFAULT', notifications: notificationsList };
    case MARK_AS_READ:
      const { index } = action;
      let notificationsListWithMarkedAsRead;
      if (index >= 0 && index < state.notifications.length) {
        notificationsListWithMarkedAsRead = state.notifications.map((notification) => ({
          ...notification, isRead: notification.id === index ? true : notification.isRead
        }));
      } else {
        return state;
      }
      return { filter: 'DEFAULT', notifications: notificationsListWithMarkedAsRead };
    case SET_TYPE_FILTER:
      return { filter: action.filter, notifications: state.notifications };
    default:
      return state;
  }
}

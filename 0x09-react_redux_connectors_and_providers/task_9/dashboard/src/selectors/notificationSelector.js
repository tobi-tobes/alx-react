import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => state.notifications.get('filter');
export const getNotifications = (state) => state.notifications.get('messages');
export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filter, notifications) => {
    if (filter === 'DEFAULT') {
      return notifications.filter((notification) => !notification.isRead);
    } else if (filter === 'URGENT') {
      return notifications.filter((notification) => !notification.isRead && notification.type === 'urgent');
    }
    return [];
  }
);

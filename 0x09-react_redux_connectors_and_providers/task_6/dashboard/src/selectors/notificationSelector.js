import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.notifications.get('filter');
export const getNotifications = (state) => state.notifications.get('messages');
export const getUnreadNotifications = (state) => state.notifications.get('messages').filter((message) => message.isRead === false);

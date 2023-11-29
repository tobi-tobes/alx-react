import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => Map(state.get('notifications'));
export const getUnreadNotifications = (state) => Map(state.get('notifications').filter((notification) => notification.isRead === false));

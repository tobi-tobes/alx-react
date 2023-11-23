import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export function markAsAread(index) {
  return { type: MARK_AS_READ, index };
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

export const boundMarkAsAread = function(index) {
  return dispatch(markAsAread(index));
}

export const boundSetNotificationFilter = function(index) {
  return dispatch(setNotificationFilter(index));
}

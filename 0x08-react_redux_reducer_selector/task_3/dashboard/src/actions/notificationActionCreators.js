import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

// Action creators
export function markAsRead(index) {
  return { type: MARK_AS_READ, index };
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

export function fetchNotificationsSuccess(data) {
  return { type: FETCH_NOTIFICATIONS_SUCCESS, data };
}

// Bound action creators
export const boundMarkAsRead = function(index) {
  return function(dispatch) {
    return dispatch(markAsRead(index));
  };
}

export const boundSetNotificationFilter = function(filter) {
  return function(dispatch) {
    return dispatch(setNotificationFilter(filter));
  };
}

export const boundFetchNotificationsSuccess = function(data) {
  return function(dispatch) {
    return dispatch(fetchNotificationsSuccess(data));
  };
}

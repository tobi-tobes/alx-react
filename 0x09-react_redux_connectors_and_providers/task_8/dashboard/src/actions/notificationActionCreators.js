import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './notificationActionTypes';
import 'node-fetch';

// Action creators
export function markAsRead(index) {
  return { type: MARK_AS_READ, index };
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

export function setNotifications(data) {
  return { type: FETCH_NOTIFICATIONS_SUCCESS, data };
}

export function setLoadingState(boolean) {
  return { type: SET_LOADING_STATE, boolean };
}

export function fetchNotifications() {
  return function(dispatch) {
    dispatch(setLoadingState(true));

    return fetch('http://localhost:3000/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setNotifications(data));
      })
      .finally(() => dispatch(setLoadingState(false)));
  };
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

export const boundSetNotifications = function(data) {
  return function(dispatch) {
    return dispatch(setNotifications(data));
  };
}

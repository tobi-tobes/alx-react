import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Action creators
export function markAsAread(index) {
  return { type: MARK_AS_READ, index };
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

// Bound action creators
export const boundMarkAsAread = function(index) {
  return function(dispatch) {
    return dispatch(markAsAread(index));
  };
}

export const boundSetNotificationFilter = function(filter) {
  return function(dispatch) {
    return dispatch(setNotificationFilter(filter));
  };
}

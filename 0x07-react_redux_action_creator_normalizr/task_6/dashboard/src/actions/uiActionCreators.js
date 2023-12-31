import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// Action creators
export function login(email, password) {
  return { type: LOGIN, user : { email, password } };
}

export function logout() {
  return { type: LOGOUT };
}

export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}

// Bound action creators
export const boundLogin = function(email, password) {
  return function(dispatch) {
    return dispatch(login(email, password));
  };
}

export const boundLogout = function() {
  return function(dispatch) {
    return dispatch(logout());
  };
}

export const boundDisplayNotificationDrawer = function() {
  return function(dispatch) {
    return dispatch(displayNotificationDrawer());
  };
}

export const boundHideNotificationDrawer = function() {
  return function(dispatch) {
    return dispatch(hideNotificationDrawer());
  };
}

import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

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

export const boundLogin = function(index) {
  return dispatch(login(index));
}

export const boundLogout = function(index) {
  return dispatch(logout(index));
}

export const boundDisplayNotificationDrawer = function(index) {
  return dispatch(displayNotificationDrawer(index));
}

export const boundHideNotificationDrawer = function(index) {
  return dispatch(hideNotificationDrawer(index));
}

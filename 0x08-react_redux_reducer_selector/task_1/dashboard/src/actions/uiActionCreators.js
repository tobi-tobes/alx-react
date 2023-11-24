import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import 'node-fetch';

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

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginFailure() {
  return { type: LOGIN_FAILURE };
}

export function loginRequest(email, password) {
  return function(dispatch) {
    dispatch(login(email, password));

    return fetch('http://localhost:3000/login-success.json')
      .then((response) => {
        if (response.ok) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
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

import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';
import { Map } from 'immutable';

// basic state
const initialUiState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null
});

// reducer function
export default function uiReducer(state = initialUiState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);
    case LOGIN:
      return state.set('user', action.user);
    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);
    default:
      return state;
  }
}

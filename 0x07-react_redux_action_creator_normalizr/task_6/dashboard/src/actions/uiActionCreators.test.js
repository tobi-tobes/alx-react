import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('login', function () {
  it('returns an action based on the email and password', function () {
    const expected = { type: LOGIN, user: { email: 'email', password:'pwd' } };

    const returned = login('email', 'pwd');

    expect(returned).toEqual(expected);
  });
});

describe('logout', function () {
  it('returns a LOGOUT action', function () {
    const expected = { type: LOGOUT };

    const returned = logout();

    expect(returned).toEqual(expected);
  });
});

describe('displayNotificationDrawer', function () {
  it('returns a DISPLAY_NOTIFICATION_DRAWER action', function () {
    const expected = { type: DISPLAY_NOTIFICATION_DRAWER };

    const returned = displayNotificationDrawer();

    expect(returned).toEqual(expected);
  });
});

describe('hideNotificationDrawer', function () {
  it('returns a HIDE_NOTIFICATION_DRAWER action', function () {
    const expected = { type: HIDE_NOTIFICATION_DRAWER };

    const returned = hideNotificationDrawer();

    expect(returned).toEqual(expected);
  });
});

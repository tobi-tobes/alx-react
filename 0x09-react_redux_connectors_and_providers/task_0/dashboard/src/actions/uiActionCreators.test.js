import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('loginRequest', function () {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS actions if the API query returns the right response', async function () {
    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'pwd' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    fetchMock.mock('http://localhost:3000/login-success.json', {
      status: 200,
      body: { success: true }
    });

    await store.dispatch(loginRequest('test@example.com', 'pwd'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions when API query fails', async function () {
    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'pwd' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    fetchMock.getOnce('http://localhost:3000/login-success.json', {
      status: 404,
      body: 'Not Found'
    });

    await store.dispatch(loginRequest('test@example.com', 'pwd'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

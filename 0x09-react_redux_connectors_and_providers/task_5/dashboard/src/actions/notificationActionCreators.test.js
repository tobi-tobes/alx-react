import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import { markAsRead, setNotificationFilter, setNotifications, fetchNotifications, setLoadingState } from './notificationActionCreators';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('markAsRead', function() {
  it('returns an action based on the index', function () {
    const expected = { type: MARK_AS_READ, index: 1 };

    const returned = markAsRead(1);

    expect(returned).toEqual(expected);
  });
});

describe('setNotificationFilter', function() {
  it('returns an action based on the filter', function () {
    const expected = { type: SET_TYPE_FILTER, filter: "DEFAULT" };

    const returned = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(returned).toEqual(expected);
  });
});

describe('setNotifications', function() {
  it('returns an action based on the filter', function () {
    const expected = { type: FETCH_NOTIFICATIONS_SUCCESS, data: 'test' };

    const returned = setNotifications('test');

    expect(returned).toEqual(expected);
  });
});

describe('setLoadingState', function() {
  it('returns an action based on the filter', function () {
    const expected = { type: SET_LOADING_STATE, boolean: false };

    const returned = setLoadingState(false);

    expect(returned).toEqual(expected);
  });
});

describe('fetchNotifications', function() {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches SET_LOADING_STATE and FETCH_NOTIFICATIONS_SUCCESS actions upon success', async function () {
    const response = [{ id: 1, message: 'Notification 1'}];

    const expectedActions = [
      { type: SET_LOADING_STATE, boolean: true },
      { type: FETCH_NOTIFICATIONS_SUCCESS, data: response },
      { type: SET_LOADING_STATE, boolean: false }
    ];

    const store = mockStore({});

    fetchMock.mock('http://localhost:3000/notifications.json', response);

    await store.dispatch(fetchNotifications());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

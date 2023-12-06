import notificationReducer from './notificationReducer';
import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionTypes';

describe('notificationReducer', function () {
  it('returns an empty array for the default state', function () {
    const initialState = Map({
      filter: 'DEFAULT',
      messages: [],
      loading: false
    });

    const newState = notificationReducer(initialState, {});

    expect(newState).toEqual(initialState);
  });

  it('returns the right data for the FETCH_NOTIFICATIONS_SUCCESS action', function () {
    const initialState = Map({
      filter: 'DEFAULT',
      messages: [],
      loading: false
    });

    const fetchNotificationsSuccess = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available"
        }
      ]
    };

    const newState = notificationReducer(initialState, fetchNotificationsSuccess);

    expect(newState.get('filter')).toBe('DEFAULT');

    newState.toJS().messages.forEach((message) => {
      expect(message).toHaveProperty('isRead');
      expect(message.isRead).toBe(false);
    });
  });

  it('returns the data with the right item updated for the MARK_AS_READ action', function () {
    const initialState = Map({
      filter: "DEFAULT",
      messages: [
        {
          guid: '1',
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          guid: '2',
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          guid: '3',
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    });

    const markAsRead = {
      type: MARK_AS_READ,
      index: '2'
    };

    const newState = notificationReducer(initialState, markAsRead);

    const markedAsRead = newState.toJS().messages.find((notification) => notification.guid === markAsRead.index);

    expect(markedAsRead.isRead).toEqual(true);
  });

  it('returns the data with the right item updated for the SET_TYPE_FILTER action', function () {
    const initialState = Map({
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    });

    const setTypeFilter = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };

    const newState = notificationReducer(initialState, setTypeFilter);

    expect(newState.toJS().filter).toBe('URGENT');
  });

  it('returns the data with the right item updated for the SET_LOADING_STATE action', function () {
    const initialState = Map({
      filter: 'DEFAULT',
      messages: [],
      loading: false
    });

    const newState = notificationReducer(initialState, { type: SET_LOADING_STATE, boolean: true });

    expect(newState.get('loading')).toEqual(true);
  });
});

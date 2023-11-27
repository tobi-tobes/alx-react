import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', function () {
  it('returns an empty array for the default state', function () {
    const initialState = {
      filter: '',
      notifications: []
    };

    const newState = notificationReducer(initialState, {});

    expect(newState).toEqual(initialState);
  });

  it('returns the right data for the FETCH_NOTIFICATIONS_SUCCESS action', function () {
    const initialState = {
      filter: '',
      notifications: []
    };

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

    expect(newState.filter).toBe('DEFAULT');

    newState.notifications.forEach((notification) => {
      expect(notification).toHaveProperty('isRead');
      expect(notification.isRead).toBe(false);
    });
  });

  it('returns the data with the right item updated for the MARK_AS_READ action', function () {
    const initialState = {
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
    };

    const markAsRead = {
      type: MARK_AS_READ,
      index: 2
    };

    const newState = notificationReducer(initialState, markAsRead);

    const markedAsRead = newState.notifications.find((notification) => notification.id === markAsRead.index);

    expect(markedAsRead.isRead).toEqual(true);
  });

  it('returns the data with the right item updated for the SET_TYPE_FILTER action', function () {
    const initialState = {
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
    };

    const setTypeFilter = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };

    const newState = notificationReducer(initialState, setTypeFilter);

    expect(newState.filter).toBe('URGENT');
  });
});

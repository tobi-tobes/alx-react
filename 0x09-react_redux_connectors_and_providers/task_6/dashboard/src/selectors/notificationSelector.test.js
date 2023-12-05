import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import { MARK_AS_READ } from '../actions/notificationActionTypes';

describe('filterTypeSelected', function() {
  it('works as expected', function() {
    const notificationState = Map({
      filter: "DEFAULT",
      messages: [
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

    const state = {
      notifications: notificationState,
      ui: Map(),
      courses: Map()
    };

    const filter = filterTypeSelected(state);
    expect(filter).toBe('DEFAULT');
  });
});

describe('getNotifications', function() {
  it('returns a list of the message entities within the reducer', function() {
    const notificationState = Map({
      filter: "DEFAULT",
      messages: [
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

    const state = {
      notifications: notificationState,
      ui: Map(),
      courses: Map()
    };

    const notifications = getNotifications(state);
    expect(notifications).toStrictEqual([
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
    ]);
  });
});

describe('getUnreadNotifications', function() {
  it('returns a list of unread message entities within the reducer', function() {
    const notificationState = Map({
      filter: "DEFAULT",
      messages: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: true,
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

    const state = {
      notifications: notificationState,
      ui: Map(),
      courses: Map()
    };

    const notifications = getUnreadNotifications(state);
    expect(notifications).toStrictEqual([
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]);
  });
});

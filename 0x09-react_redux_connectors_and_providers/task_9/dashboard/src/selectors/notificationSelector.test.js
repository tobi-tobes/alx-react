import { filterTypeSelected, getNotifications, getUnreadNotificationsByType } from './notificationSelector';
import { Map } from 'immutable';

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

describe('getUnreadNotificationsByType', function() {
  it('returns unread urgent notifications when the filter is URGENT', function() {
    const notificationState = Map({
      filter: "URGENT",
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

    const notifications = getUnreadNotificationsByType(state);
    expect(notifications).toStrictEqual([
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

  it('returns all the unread notifications when the filter is DEFAULT', function() {
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

    const notifications = getUnreadNotificationsByType(state);
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

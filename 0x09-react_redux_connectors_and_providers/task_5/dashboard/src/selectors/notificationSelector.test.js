import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import { MARK_AS_READ } from '../actions/notificationActionTypes';

describe('filterTypeSelected', function() {
  it('works as expected', function() {
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

    const markAsRead = {
      type: MARK_AS_READ,
      index: 2
    };
  
    const newState = notificationReducer(initialState, markAsRead);

    const filter = filterTypeSelected(newState);
    expect(filter).toBe('DEFAULT');
  });
});

describe('getNotifications', function() {
  it('returns a list of the message entities within the reducer', function() {
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

    const markAsRead = {
      type: MARK_AS_READ,
      index: 2
    };
    
    const newState = notificationReducer(initialState, markAsRead);

    const notifications = getNotifications(newState);
    expect(notifications).toStrictEqual(Map([
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
    ]));
  });
});

describe('getUnreadNotifications', function() {
  it('returns a list of unread message entities within the reducer', function() {
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

    const markAsRead = {
      type: MARK_AS_READ,
      index: 2
    };
      
    const newState = notificationReducer(initialState, markAsRead);

    const notifications = getUnreadNotifications(newState);
    expect(notifications).toStrictEqual(Map([
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
    ]));
  });
});

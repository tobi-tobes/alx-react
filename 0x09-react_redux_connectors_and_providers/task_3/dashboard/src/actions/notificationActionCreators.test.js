import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

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
  

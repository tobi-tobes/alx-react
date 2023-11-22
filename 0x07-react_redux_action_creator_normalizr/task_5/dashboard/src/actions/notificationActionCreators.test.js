import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsAread, setNotificationFilter } from './notificationActionCreators';

describe('markAsAread', function() {
  it('returns an action based on the id', function () {
    const expected = { type: MARK_AS_READ, id: 1 };

    const returned = markAsAread(1);

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
  

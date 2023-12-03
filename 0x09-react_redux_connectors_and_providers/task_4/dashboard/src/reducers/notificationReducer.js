import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map, setIn } from 'immutable';
import { notification, notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  filter: 'DEFAULT',
  notifications: []
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const notificationsList = action.data.map((notification) => ({...notification, isRead: false}));
      const normalized = notificationsNormalizer(notificationsList);
      return state.mergeDeep(normalized);
    case MARK_AS_READ:
      return setIn(state, ['notifications', action.index - 1, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}

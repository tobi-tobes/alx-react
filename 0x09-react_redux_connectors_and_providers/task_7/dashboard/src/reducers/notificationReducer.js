import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { Map, setIn } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  filter: 'DEFAULT',
  messages: [],
  loading: false
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const notificationsList = action.data.map((notification) => ({...notification, isRead: false}));
      const normalized = notificationsNormalizer(notificationsList);
      const messagesArray = Object.values(normalized.entities.messages || {});
      return state.mergeDeep({ messages: messagesArray });
    case MARK_AS_READ:
      const index = state.get('messages').findIndex(notification => notification.guid === action.index);
      return setIn(state, ['messages', index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.boolean);
    default:
      return state;
  }
}

import uiReducer from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';
import { Map } from 'immutable';

describe('uiReducer', function() {
  it('returns a state that equals the initial state when no action is passed', function() {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });

    const newState = uiReducer(initialState, {});

    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it('returns a state that equals the initial state when the action SELECT_COURSE is passed', function() {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });

    const newState = uiReducer(initialState, selectCourse(1));

    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it('returns a state that changes correctly the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', function() {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });

    const newState = uiReducer(initialState, displayNotificationDrawer());

    expect(newState.toJS().isNotificationDrawerVisible).toEqual(true);
  });
});

/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';
import { ConnectedFooter as Footer } from '../Footer/Footer';
import Login from '../Login/Login';
import { ConnectedHeader as Header } from '../Header/Header';
import { connectedNotifications as Notifications } from '../Notifications/Notifications';
import { connectedCourseList as CourseList } from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { Map } from 'immutable';

jest.mock('../assets/holberton-logo.jpg', () => 'dummy-image-url');

describe('App', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', function () {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Header component', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('renders Footer component', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('renders Login component', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('renders Notifications component', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('does not render CourseList component', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it('calls the alert function with the message "Logging you out" when the ctrl + h keys are pressed', function () {
    const originalAlert = global.alert;

    global.alert = jest.fn();

    const wrapper = shallow(<App />);

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(global.alert).toHaveBeenCalledWith('Logging you out');

    global.alert = originalAlert;
  });
});

describe('App when isLoggedin is True', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('does not render Login component', function () {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('renders the CourseList component', function () {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  describe('mapStateToProps', function () {
    it('returns the right object when passing the state', function () {
      const state = {
        ui: Map({
          isUserLoggedIn: true,
          isNotificationDrawerVisible: true
        })
      };

      const mappedPropFromState = mapStateToProps(state);

      expect(mappedPropFromState).toHaveProperty('isLoggedIn');
      expect(mappedPropFromState.isLoggedIn).toEqual(true);
      expect(mappedPropFromState).toHaveProperty('displayDrawer');
      expect(mappedPropFromState.displayDrawer).toEqual(true);
    });
  });
});

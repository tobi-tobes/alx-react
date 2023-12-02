/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { App, mapStateToProps } from './App';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'
import {StyleSheetTestUtils} from 'aphrodite';
import {AppContext, defaultUser, defaultLogOut} from '../App/AppContext';
import { fromJS } from 'immutable';

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

  it('calls the alert function with the message "Logging you out" and updates user state when the ctrl + h keys are pressed', function () {
    const originalAlert = global.alert;

    global.alert = jest.fn();

    const wrapper = shallow(<App />);

    wrapper.setState({user: {email: 'tobi@tobi.com', password: 'tobi', isLoggedIn: true}});

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(global.alert).toHaveBeenCalledWith('Logging you out');
    expect(wrapper.state('user')).toEqual({ email: '', password: '', isLoggedIn: false });

    global.alert = originalAlert;
  });

  it('changes state when logIn function is called', function () {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('tobi@tobi.com', 'tobi');
    expect(wrapper.state('user')).toEqual({email: 'tobi@tobi.com', password: 'tobi', isLoggedIn: true});
  });

  it('changes state when logOut function is called', function () {
    const wrapper = shallow(<App />);
    wrapper.setState({user: {email: 'tobi@tobi.com', password: 'tobi', isLoggedIn: true}});
    wrapper.instance().state.logOut();
    expect(wrapper.state('user')).toEqual({ email: '', password: '', isLoggedIn: false });
  });

  it('markNotificationAsRead works as intended', function () {
    const listNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: 'test'}}];

    const wrapper = shallow(<App />);
    wrapper.setState({listNotifications: listNotifications});
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state('listNotifications')).toEqual([{id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: 'test'}}]);
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
    const wrapper = shallow(<App />);
    wrapper.setState({user: {email: 'tobi@tobi.com', password: 'tobi', isLoggedIn: true}});
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('renders the CourseList component', function () {
    const wrapper = shallow(<App />);
    wrapper.setState({user: {email: 'tobi@tobi.com', password: 'tobi', isLoggedIn: true}});
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  describe('mapStateToProps', function () {
    it('returns the right object when passing the state', function () {
      const state = fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true
      });

      const mappedPropFromState = mapStateToProps(state);

      expect(mappedPropFromState).toHaveProperty('isLoggedIn');
      expect(mappedPropFromState.isLoggedIn).toEqual(state.get('isUserLoggedIn'));
      expect(mappedPropFromState).toHaveProperty('displayDrawer');
      expect(mappedPropFromState.displayDrawer).toEqual(state.get('isNotificationDrawerVisible'));
    });
  });
});
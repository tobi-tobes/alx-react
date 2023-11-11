/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'
import {StyleSheetTestUtils} from 'aphrodite';
import {AppContext, defaultUser, defaultLogOut} from '../App/AppContext';

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

  it('ensures that the default state for displayDrawer is false, and after calling handleDisplayDrawer, the state should now be true', function () {
    const wrapper = shallow(<App />);

    expect(wrapper.state().displayDrawer).toBe(false);

    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('ensures that after calling handleHideDrawer, the state of displayDrawer should now be false', function () {
    const wrapper = shallow(<App />);

    wrapper.setState({displayDrawer: true});

    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
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
});

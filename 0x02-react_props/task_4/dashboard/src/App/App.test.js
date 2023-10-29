import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList'

describe('App', function () {
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
});

describe('App when isLoggedin is True', function () {
  it('does not render Login component', function () {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find(Login).length).toBe(0);
  });

  it('renders the CourseList component', function () {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find(CourseList).length).toBe(1);
  });
});

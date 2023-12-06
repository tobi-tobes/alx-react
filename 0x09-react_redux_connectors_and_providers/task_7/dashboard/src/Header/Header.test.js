/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import {StyleSheetTestUtils} from 'aphrodite';

jest.mock('../assets/holberton-logo.jpg', () => 'dummy-image-url');

describe('Header', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', function () {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the img tag', function () {
    const wrapper = shallow(<Header />);
    const headerImg = wrapper.find('img');
    expect(headerImg).toHaveLength(1);
  });

  it('renders the h1 tag', function () {
    const wrapper = shallow(<Header />);
    const headerLevelOneHeader = wrapper.find('h1');
    expect(headerLevelOneHeader).toHaveLength(1);
  });

  it('does not create the logoutSection when user prop is passed', function () {
    const wrapper = shallow(<Header />);
    const logOutSection = wrapper.find('#logoutSection');
    expect(logOutSection).toHaveLength(0);
  });

  it('creates the logoutSection when user is defined', function () {
    const wrapper = shallow(<Header user={{ email: 'test', password: 'test' }} />);
    const logOutSection = wrapper.find('#logoutSection');
    expect(logOutSection).toHaveLength(1);
  });

  it('calls the logOut function when clicking on the link in the logoutSection when user is defined', function () {
    const logOutMock = jest.fn();
    const wrapper = shallow(<Header user={{ email: 'test', password: 'test' }} logout={logOutMock}/>);
    const logOutLink = wrapper.find('#logoutSection em');
    logOutLink.simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});

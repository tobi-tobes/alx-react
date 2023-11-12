/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import {StyleSheetTestUtils} from 'aphrodite';
import {AppContext, defaultUser, defaultLogOut} from '../App/AppContext';

jest.mock('../assets/holberton-logo.jpg', () => 'dummy-image-url');

describe('Header', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', function () {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => {}
    };

    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the img tag', function () {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => {}
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    const headerImg = wrapper.find('img');
    expect(headerImg).toHaveLength(1);
  });

  it('renders the h1 tag', function () {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: () => {}
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    const headerLevelOneHeader = wrapper.find('h1');
    expect(headerLevelOneHeader).toHaveLength(1);
  });

  it('does not create the logoutSection when default context value is passed', function () {
    const defaultValues = {
      user: defaultUser,
      logOut: defaultLogOut
    };

    const wrapper = mount(
      <AppContext.Provider value={defaultValues}>
        <Header />
      </AppContext.Provider>
    );
    const logOutSection = wrapper.find('#logoutSection');
    expect(logOutSection).toHaveLength(0);
  });

  it('creates the logoutSection when user is defined', function () {
    const contextValue = {
      user: {
        email: 'test@email.com',
        password: 'fakepassword',
        isLoggedIn: true
      },
      logOut: () => {}
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    const logOutSection = wrapper.find('#logoutSection');
    expect(logOutSection).toHaveLength(1);
  });

  it('calls the logOut function when clicking on the link in the logoutSection when user is defined', function () {
    const logOutMock = jest.fn();

    const contextValue = {
      user: {
        email: 'test@email.com',
        password: 'fakepassword',
        isLoggedIn: true
      },
      logOut: logOutMock
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    const logOutLink = wrapper.find('#logoutSection a');
    logOutLink.simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});

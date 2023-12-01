/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import {AppContext, defaultUser, defaultLogOut} from '../App/AppContext';

describe('Footer', function () {
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
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the text "Copyright"', function () {
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
        <Footer />
      </AppContext.Provider>
    );

    const textToFind = wrapper.find('p');
    expect(textToFind.text()).toContain("Copyright");
  });

  it('does not display the link when the user is logged out within the context', function () {
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
        <Footer />
      </AppContext.Provider>
    );

    const contactLink = wrapper.find('a');
    expect(contactLink).toHaveLength(0);
  });

  it('displays the link when the user is logged in within the context', function () {
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
        <Footer />
      </AppContext.Provider>
    );

    const contactLink = wrapper.find('a');
    expect(contactLink).toHaveLength(1);
  });
});

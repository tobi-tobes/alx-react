import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import {StyleSheetTestUtils} from 'aphrodite';

describe('Login', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', function () {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders 3 input tags', function () {
    const wrapper = shallow(<Login />);
    const loginInput = wrapper.find('input');
    expect(loginInput).toHaveLength(3);
  });

  it('renders 2 label tags', function () {
    const wrapper = shallow(<Login />);
    const loginLabel = wrapper.find('label');
    expect(loginLabel).toHaveLength(2);
  });

  it('disables the submit button by default', function () {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');

    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('enables the submit button after changing the value of the two inputs', function () {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[id="email"]');
    const passwordInput = wrapper.find('input[id="password"]');

    emailInput.simulate('change', { target: {value: 'test@test.com'} });
    passwordInput.simulate('change', { target: {value: 'fakepassword123'} });

    wrapper.update();

    const submitButton = wrapper.find('input[type="submit"]');

    expect(submitButton.prop('disabled')).toBe(false);
  });
});

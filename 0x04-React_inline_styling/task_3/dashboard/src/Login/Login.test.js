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

  it('renders 2 input tags', function () {
    const wrapper = shallow(<Login />);
    const loginInput = wrapper.find('input');
    expect(loginInput).toHaveLength(2);
  });

  it('renders 2 label tags', function () {
    const wrapper = shallow(<Login />);
    const loginLabel = wrapper.find('label');
    expect(loginLabel).toHaveLength(2);
  });
});

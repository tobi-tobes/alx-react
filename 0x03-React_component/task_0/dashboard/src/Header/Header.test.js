import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', function () {
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
});

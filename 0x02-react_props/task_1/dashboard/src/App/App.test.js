import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', function () {
  it('renders without crashing', function () {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

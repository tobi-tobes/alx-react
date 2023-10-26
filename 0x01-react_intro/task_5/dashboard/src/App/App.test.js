import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', function () {
  it('renders without crashing', function () {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a div with the class App-header', function () {
    const wrapper = shallow(<App />);
    const appHeaderDiv = wrapper.find('.App-header');
    expect(appHeaderDiv).toHaveLength(1);
  });

  it('renders a div with the class App-body', function () {
    const wrapper = shallow(<App />);
    const appBodyDiv = wrapper.find('.App-body');
    expect(appBodyDiv).toHaveLength(1);
  });

  it('renders a div with the class App-footer', function () {
    const wrapper = shallow(<App />);
    const appFooterDiv = wrapper.find('.App-footer');
    expect(appFooterDiv).toHaveLength(1);
  });
});

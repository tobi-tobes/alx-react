import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', function () {
  it('renders without crashing', function () {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the text "Copyright"', function () {
    const wrapper = shallow(<Footer />);
    const textToFind = wrapper.find('p');
    expect(textToFind.text()).toContain("Copyright");
  });
});

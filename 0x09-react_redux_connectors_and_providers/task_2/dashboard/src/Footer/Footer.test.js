/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

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

  it('does not display the link when the user is logged out within the context', function () {
    const wrapper = shallow(<Footer />);
    const contactLink = wrapper.find('a');
    expect(contactLink).toHaveLength(0);
  });

  it('displays the link when the user is logged in within the context', function () {
    const wrapper = shallow(<Footer user={{ email: 'test', password: 'test' }}/>);
    const contactLink = wrapper.find('a');
    expect(contactLink).toHaveLength(1);
  });
});

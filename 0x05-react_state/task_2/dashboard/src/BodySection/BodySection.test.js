import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', function () {
  it('renders the children and one h2 element', function () {
    const wrapper = shallow(<BodySection title='test title' children={<p>test children node</p>} />);
    expect(wrapper.find('h2').text()).toBe('test title');

    const child = wrapper.find('p');
    expect(child.exists()).toBe(true);
    expect(child.text()).toBe('test children node');
  });
});

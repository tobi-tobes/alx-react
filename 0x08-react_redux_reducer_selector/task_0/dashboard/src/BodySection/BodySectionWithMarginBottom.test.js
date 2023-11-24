import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import {StyleSheetTestUtils} from 'aphrodite';

describe('BodySectionWithMarginBottom', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders a BodySection component and that the props are passed correctly to the child component', function () {
    const children = <p>test children node</p>;
    const wrapper = shallow(<BodySectionWithMarginBottom title='test title'>{children}</BodySectionWithMarginBottom>);

    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBe(true);
    
    expect(bodySection.props().title).toBe('test title');
    expect(bodySection.props().children).toBe(children);
  });
});

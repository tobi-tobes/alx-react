/**
 * @jest-environment jsdom
*/

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import {StyleSheetTestUtils} from 'aphrodite';

describe('NotificationItem', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', function () {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct html when passing dummy type, and value props', function () {
    const dummyProps = {
      type: 'default',
      value: 'test',
    }

    const wrapper = shallow(<NotificationItem {...dummyProps}/>);
    const listItem = wrapper.find('li');
    const listItemDataType = wrapper.find('[data-notification-type]');

    expect(listItem.text()).toBe('test');
    expect(listItemDataType).toHaveLength(1);
  });

  it('renders the correct html when passing dummy html prop', function () {
    const dummyProps = {
      html: { __html: 'test' },
    }

    const wrapper = shallow(<NotificationItem {...dummyProps}/>);
    const listItem = wrapper.find('li');

    expect(listItem.html()).toContain('test');
  });

  it('calls the spy with the right ID argument when simulating a click on the component', function () {
    const markAsReadSpy = jest.fn();

    const dummyProps = {
      html: { __html: 'test' },
      id: 1,
      markAsRead: markAsReadSpy,
    }

    const wrapper = shallow(<NotificationItem {...dummyProps}/>);
    const listItem = wrapper.find('li');

    listItem.simulate('click');

    expect(markAsReadSpy).toHaveBeenCalledWith(dummyProps.id);
  });
});

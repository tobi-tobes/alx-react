import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', function () {
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

    expect(listItem.html()).toBe('<li data-notification-type=\"default\">test</li>');
  });
});

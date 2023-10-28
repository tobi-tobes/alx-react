import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', function () {
    it('renders without crashing', function () {
      const wrapper = shallow(<Notifications />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('renders three NotificationItem components', function () {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find(NotificationItem).length).toBe(3);
    });
  
    it('renders the text "Here is the list of notifications"', function () {
      const wrapper = shallow(<Notifications />);
      const textToFind = wrapper.find('p');
      expect(textToFind.text()).toEqual("Here is the list of notifications");
    });

    it('renders the right html in the first NotificationItem component', function () {
      const wrapper = shallow(<Notifications />);
      const notificationItems = wrapper.find(NotificationItem);
      const firstNotificationItem = notificationItems.first();
      expect(firstNotificationItem.html()).toBe('<li data-notification-type=\"urgent\"><strong>Urgent requirement</strong> - complete by EOD</li>');
    });
  });

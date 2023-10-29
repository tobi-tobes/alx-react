import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', function () {
    it('renders without crashing', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('renders three NotificationItem components', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find(NotificationItem).length).toBe(3);
    });
  
    it('renders the text "Here is the list of notifications"', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      const textToFind = wrapper.find('.Notifications p');
      expect(textToFind.text()).toEqual("Here is the list of notifications");
    });

    it('renders the right html in the first NotificationItem component', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      const notificationItems = wrapper.find(NotificationItem);
      const firstNotificationItem = notificationItems.first();
      expect(firstNotificationItem.html()).toBe('<li data-notification-type=\"default\">New course available</li>');
    });

    it('renders the menu item when displayDrawer is false', function () {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('does not render div.Notifications when displayDrawer is false', function () {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find('.Notifications').length).toBe(0);
    });

    it('renders the menu item when displayDrawer is true', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('renders div.Notifications when displayDrawer is true', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find('.Notifications').length).toBe(1);
    });
  });

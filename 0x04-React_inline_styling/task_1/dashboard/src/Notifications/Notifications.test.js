import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import {StyleSheetTestUtils} from 'aphrodite';

describe('Notifications', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

    it('renders without crashing', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('renders the text "Here is the list of notifications"', function () {
      const listNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: 'test'}}];
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
      const textToFind = wrapper.find('#Notifications p');
      expect(textToFind.text()).toEqual("Here is the list of notifications");
    });

    it('renders the right html in the first NotificationItem component', function () {
      const listNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: 'test'}}];
      const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications}/>);
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
      expect(wrapper.find('#Notifications').length).toBe(0);
    });

    it('renders the menu item when displayDrawer is true', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('renders div.Notifications when displayDrawer is true', function () {
      const wrapper = shallow(<Notifications displayDrawer />);
      expect(wrapper.find('#Notifications').length).toBe(1);
    });

    it('renders div.Notifications when displayDrawer is true and empty listNotifications is passed', function () {
      const wrapper = shallow(<Notifications displayDrawer listNotifications={[]}/>);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders div.Notifications when displayDrawer is true and listNotifications with notifications is passed', function () {
      const listNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: 'test'}}];
      const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications}/>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders div.Notifications with appropriate message when displayDrawer is true and empty listNotifications is passed', function () {
      const wrapper = shallow(<Notifications displayDrawer listNotifications={[]}/>);
      const textToFind = wrapper.find('#Notifications p');
      expect(textToFind.text()).toEqual("No new notification for now");
      expect(textToFind.text()).not.toEqual("Here is the list of notifications");
    });

    it('calls the spy with the right message when calling the function markAsRead on an instance of the component', function () {
      const consoleLogSpy = jest.spyOn(console, 'log');

      const listNotifications = [{id: 1, type: 'default', value: 'New course available'}];
      const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications}/>);

      const instance = wrapper.instance();
      instance.markAsRead(listNotifications[0].id);

      expect(consoleLogSpy).toHaveBeenCalledWith(`Notification ${listNotifications[0].id} has been marked as read`);

      consoleLogSpy.mockRestore();
    });

    it('does not rerender when updating the props of the component with the same list', function () {
      const listNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: 'test'}}];
      const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications}/>);

      const initialRenderCount = wrapper.instance().renderCount;
      wrapper.setProps({ listNotifications });

      expect(wrapper.instance().renderCount).toBe(initialRenderCount);
    });

    it('rerenders when updating the props of the component with a longer list', function () {
      const listNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: 'test'}}];
      const longerListNotifications = [{id: 1, type: 'default', value: 'New course available'}, {id: 2, type: 'urgent', value: 'New resume available'}, {id: 3, type: 'urgent', html: {__html: 'test'}}, {id: 4, type: 'urgent', value: 'New notification available'}];
      
      const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications}/>);

      const initialRenderCount = wrapper.instance().renderCount;

      wrapper.setProps({ listNotifications: longerListNotifications });

      const newRenderCount = wrapper.instance().renderCount;

      expect(newRenderCount).toBeGreaterThan(initialRenderCount);
    });
  });

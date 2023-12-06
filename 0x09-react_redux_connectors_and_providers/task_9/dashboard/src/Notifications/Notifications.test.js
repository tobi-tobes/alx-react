/**
 * @jest-environment jsdom
 */

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
    const listNotifications = [{guid: '1', type: 'default', value: 'New course available'}, {guid: '2', type: 'urgent', value: 'New resume available'}, {guid: '3', type: 'urgent', html: {__html: 'test'}}];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const textToFind = wrapper.find('#Notifications p');
    expect(textToFind.text()).toEqual("Here is the list of notifications");
  });

  it('renders the right html in the first NotificationItem component', function () {
    const listNotifications = [{guid: '1', type: 'default', value: 'New course available'}, {guid: '2', type: 'urgent', value: 'New resume available'}, {guid: '3', type: 'urgent', html: {__html: 'test'}}];
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications}/>);
    const notificationItems = wrapper.find(NotificationItem);
    const firstNotificationItem = notificationItems.first();
    expect(firstNotificationItem.html()).toContain('New course available');
  });

  it('renders the menu item when displayDrawer is false', function () {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('#menuItem').length).toBe(1);
  });

  it('does not render div.Notifications when displayDrawer is false', function () {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('#Notifications').length).toBe(0);
  });

  it('renders the menu item when displayDrawer is true', function () {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('#menuItem').length).toBe(1);
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
    const listNotifications = [{guid: '1', type: 'default', value: 'New course available'}, {guid: '2', type: 'urgent', value: 'New resume available'}, {guid: '3', type: 'urgent', html: {__html: 'test'}}];
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

  it('calls handleDisplayDrawer when menu item is clicked', function () {
    const handleDisplayDrawerMock = jest.fn();

    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={[]} handleDisplayDrawer={handleDisplayDrawerMock}/>);
    wrapper.find('#menuItem').simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', function () {
    const handleHideDrawerMock = jest.fn();

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} handleHideDrawer={handleHideDrawerMock}/>);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it('calls setNotificationFilter with URGENT when the button is clicked', function () {
    const setNotificationFilterMock = jest.fn();
    const listNotifications = [{guid: '1', type: 'default', value: 'New course available'}, {guid: '3', type: 'urgent', html: {__html: 'test'}}];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} setNotificationFilter={setNotificationFilterMock}/>);
    wrapper.find('button.urgent').simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('URGENT');
  });

  it('calls setNotificationFilter with DEFAULT when the button is clicked', function () {
    const setNotificationFilterMock = jest.fn();
    const listNotifications = [{guid: '1', type: 'default', value: 'New course available'}, {guid: '3', type: 'urgent', html: {__html: 'test'}}];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} setNotificationFilter={setNotificationFilterMock}/>);
    wrapper.find('button.default').simulate('click');
    expect(setNotificationFilterMock).toHaveBeenCalledWith('DEFAULT');
  });
});

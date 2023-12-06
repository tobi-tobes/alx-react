/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import {NotificationsContainer} from './NotificationsContainer';
import { StyleSheetTestUtils } from 'aphrodite';

describe('NotificationsContainer', function() {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('dispatches the fetchNotifications action when mounted', function () {
    const fetchNotificationsMock = jest.fn();
    const wrapper = mount(<NotificationsContainer fetchNotifications={fetchNotificationsMock}/>);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});

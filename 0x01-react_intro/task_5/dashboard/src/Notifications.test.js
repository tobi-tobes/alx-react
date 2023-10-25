import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', function () {
    it('renders without crashing', function () {
      const wrapper = shallow(<Notifications />);
      expect(wrapper).toMatchSnapshot();
    });
  
    it('renders three list items', function () {
      const wrapper = shallow(<Notifications />);
      const listItems = wrapper.find('li');
      expect(listItems).toHaveLength(3);
    });
  
    it('renders the text "Here is the list of notifications"', function () {
      const wrapper = shallow(<Notifications />);
      const textToFind = wrapper.find('p');
      expect(textToFind.text()).toEqual("Here is the list of notifications");
    });
  });

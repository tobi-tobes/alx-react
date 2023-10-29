import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', function () {
  it('renders without crashing', function () {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the 5 different rows', function () {
    const wrapper = shallow(<CourseList />);
    const courseListRow = wrapper.find(CourseListRow);

    expect(courseListRow).toHaveLength(5);
  });
});

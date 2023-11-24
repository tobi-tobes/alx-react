import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import {StyleSheetTestUtils} from 'aphrodite';

describe('CourseList', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', function () {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when listCourses is empty', function () {
    const wrapper = shallow(<CourseList listCourses={[]}/>);
    const courseListRow = wrapper.find(CourseListRow);
    expect(wrapper).toMatchSnapshot();
    expect(courseListRow).toHaveLength(1);
  });

  it('renders correctly when listCourses is passed', function () {
    const listCourses = [{id: 1, name: 'ES6', credit: 60}, {id: 2, name: 'Webpack', credit: 20}, {id: 3, name: 'React', credit: 40}];
    const wrapper = shallow(<CourseList listCourses={listCourses}/>);
    const courseListRow = wrapper.find(CourseListRow);
    expect(wrapper).toMatchSnapshot();
    expect(courseListRow).toHaveLength(5);
  });
});

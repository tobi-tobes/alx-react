/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { CourseList } from './CourseList';
import CourseListRow from './CourseListRow';
import {StyleSheetTestUtils} from 'aphrodite';
import { selectCourse, unSelectCourse, fetchCourses } from '../actions/courseActionCreators';

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

  it('dispatches the fetchCourses action when mounted', function () {
    const fetchCoursesMock = jest.fn();
    const wrapper = mount(<CourseList listCourses={[]} fetchCourses={fetchCoursesMock}/>);
    expect(fetchCoursesMock).toHaveBeenCalled();
  });

  it('dispatches selectCourse when checked is true', () => {
    const selectCourseMock = jest.fn();
    const wrapper = mount(<CourseList listCourses={[]} selectCourse={selectCourseMock}/>);
    wrapper.instance().onChangeRow('1', true);

    expect(selectCourseMock).toHaveBeenCalledWith('1');
  });

  it('dispatches unSelectCourse when checked is false', () => {
    const unSelectCourseMock = jest.fn();
    const wrapper = mount(<CourseList listCourses={[]} unSelectCourse={unSelectCourseMock}/>);
    wrapper.instance().onChangeRow('2', false);

    expect(unSelectCourseMock).toHaveBeenCalledWith('2');
  });
});
